require("dotenv").config({ path: "../config.env" });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const time = { timestamps: true };
const { ModelServices } = require('../Services');

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    phone: { type: String, required: true },
    products: {
      type: Array,
      required: true
    },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" }
}, time);

const OrderModel = mongoose.model("Order", OrderSchema);
const Order = ModelServices(OrderModel);

module.exports = {
    Order,
    OrderModel
};