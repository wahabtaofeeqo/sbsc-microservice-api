const express = require('express');
const router  = express.Router();

const productsServiceRoutes = require('./productsService.js');
const ordersServiceRoutes    = require('./ordersService.js');

router.use(productsServiceRoutes);
router.use(ordersServiceRoutes);

module.exports = router;