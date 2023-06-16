require("dotenv").config({ path: "../config.env" });
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SEC);
const { ErrorCustomResponse } = require('../Utils/ErrorResponse');

const charge = async (req, res, next) => {
    const { token, currency, price } = req.body;
    try {
        const charge = await stripe.charges.create({
          amount: price,
          currency,
          source: token,
        });
        if (!charge) {
            return next(
              new ErrorCustomResponse("charge unsuccessful", 401)
            );
        }
        res.status(200).json("payment done !!!!!!!");
    } catch (error) {
        next(error);
    }
};

module.exports = {
    charge
};