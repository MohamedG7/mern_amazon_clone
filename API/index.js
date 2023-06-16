require('dotenv').config({ path: "./config.env" });

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const moment = require('moment');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { dataConnection } = require('./MongoDB/connection');
const cors = require('cors');
const { errorHandler } = require('./Middlewares/errorsHandler');

const auth = require('./Routes/auth');
const products = require('./Routes/products');
const orders = require('./Routes/orders');
const stripe = require('./Routes/stripe');

const logger = (req, res, next) => {
    console.log('middleware >>>>', `${req.protocol}://${req.get('host')}${req.originalUrl} --at--> ${moment().format()}`);
    next();
};
app.use(logger);

app.use(
    cors({
        origin: true
    }),
    bodyParser.json(),
    express.json(),
    cookieParser(),
    express.urlencoded({ extended: true })
);

app.use("/api/auth", auth);
app.use("/api/products", products);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);

dataConnection(server, PORT, mongoose);

app.use(errorHandler);