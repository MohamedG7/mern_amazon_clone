const router = require('express').Router();
const { createOrder, getAllOrders, getOneOrder, updateOrder, deleteOrder } = require('../Controllers/orders');

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOneOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;