require("dotenv").config({ path: "../config.env" });
const jwt = require('jsonwebtoken');

const AGE_NUM = Math.floor(Date.now() / 1000) + (60 * 2);
const JWT_AGE = `${AGE_NUM}d`;

const createToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SEC,
        { expiresIn: JWT_AGE }
    );
};

module.exports = {
    createToken
};