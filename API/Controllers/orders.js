const { Order } = require('../MongoDB/Models/Order');

const createOrder = async (req, res) => {
    const { userId, phone, products, amount, status } = req.body;
    try {
        const value = {
            userId,
            phone,
            products,
            amount,
            status 
        };
        const newOrder = await Order.createOne(value);
        res.status(200).json(newOrder);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.findAll();
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getOneOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const oneOrder = await Order.findById(id);
        res.status(200).json(oneOrder);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const { userId, phone, products, amount, status } = req.body;
    try {
        const updates = {
            userId,
            phone,
            products,
            amount,
            status 
        };
        const updatedOrder = await Order.updateById(id, updates, 'Order');
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedOrder = await Order.deleteById(id, 'Order');
        res.status(200).json(deletedOrder);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOneOrder,
    updateOrder,
    deleteOrder
};