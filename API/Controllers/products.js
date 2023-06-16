const { Product } = require('../MongoDB/Models/Prouduct');

const createProduct = async (req, res) => {
    const { title, image, price, rating } = req.body;
    try {
        const value = {
            title,
            image,
            price,
            rating
        };
        const newProduct = await Product.createOne(value);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getOneProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const oneProduct = await Product.findById(id);
        res.status(200).json(oneProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { title, image, price, rating } = req.body;
    try {
        const updates = {
            title,
            image,
            price,
            rating
        };
        const updatedProduct = await Product.updateById(id, updates, 'Product');
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProduct = await Product.deleteById(id, 'Product');
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
};