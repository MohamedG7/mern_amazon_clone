const router = require('express').Router();
const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../Controllers/products');

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;