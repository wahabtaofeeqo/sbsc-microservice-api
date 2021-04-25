var express = require('express');
var router = express.Router();

// Controller
const Controller = require('../controller');

//
const cote = require("cote");
const responder = new cote.Responder({name: "Orders Responder", key: "order"});

responder.on("orders", async (req, callback) => {
	var data = await Controller.orders();
	if (data) {
		callback(null, {
			error: false,
			message: "",
			data: data
		});
	}
	else {
		callback(null, {
			error: true,
			message: 'Database Connection Failed!'
		})
	}
});

responder.on("an order", async (req, callback) => {
	var result = await Controller.order(req.id);
	if (result) {
		callback(null, {
			error: false,
			message: "",
			data: result
		});
	}
	else {
		callback(null, {
			error: true,
			message: 'Database Connection Failed!'
		})
	}
});

responder.on("create order", async (req, callback) => {

	const data = {
		customer_id: req.customer_id,
		product_id: req.product_id,
		quantity: req.quantity
	}

	var result = await Controller.addOrder(data);
	if (result) {
		callback(null, {
			error: false,
			message: "Order added Successfully",
		});
	}
	else {
		callback(null, {
			error: true,
			message: 'Database Connection Failed!'
		})
	}
});

module.exports = router;