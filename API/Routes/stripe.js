const router = require("express").Router();
const { charge } = require('../Controllers/stripe');
//! stripe charge
router.post("/", charge);

module.exports = router;