const { UserModel, User } = require('../MongoDB/Models/User');
const Cryptojs = require('crypto-js');
const { ErrorCustomResponse } = require('../Utils/ErrorResponse');
const { createToken } = require('../Utils/JWT_Access');

const register = async (req, res, next) => {
    const newUser =new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt( req.body.password, process.env.PASS_SEC ).toString(),
    });
    try {
        const hashedPassword = Cryptojs.AES.decrypt(
            newUser.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(Cryptojs.enc.Utf8);

        if (originalPassword.length < 6) {
            return next(
                new ErrorCustomResponse("Password is too short", 401)
            );
        };

        if (req.body.password !== req.body.confirmPassword) {
            return next(
                new ErrorCustomResponse("your passwords don't match", 401)
            );
        };

        const savedUser = await newUser.save();

        const id = savedUser._id;

        const accessToken = createToken(id);

        const { password, ...others } = savedUser._doc;

        res.status(200).json({...others, accessToken});
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return next(
                new ErrorCustomResponse("Please write your correct email", 401)
            );
        };

        const hashedPassword = Cryptojs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(Cryptojs.enc.Utf8);

        if(originalPassword !== req.body.password) {
            return next(
                new ErrorCustomResponse("Please write your correct password", 401)
            );
        };

        const id = user._id;

        const accessToken = createToken(id);

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login
}