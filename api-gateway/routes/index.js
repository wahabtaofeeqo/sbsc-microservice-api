const express = require('express');
const router  = express.Router();
const jwt = require('jwt-simple');

// Routes
const productsServiceRoutes = require('./productsService.js');
const ordersServiceRoutes    = require('./ordersService.js');
const userServiceRoutes    = require('./userService.js');


router.get("/check", function(req, res, next) {
	res.send("Hello World");
})

router.use(userServiceRoutes);
router.use(productsServiceRoutes);
router.use(ordersServiceRoutes);

module.exports = router;