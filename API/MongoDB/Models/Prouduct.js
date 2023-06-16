require("dotenv").config({ path: "../config.env" });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const time = { timestamps: true };
const { ModelServices } = require('../Services');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, time);

const ProductModel = mongoose.model("Product", ProductSchema);
const Product = ModelServices(ProductModel);

module.exports = {
    Product,
    ProductModel
};