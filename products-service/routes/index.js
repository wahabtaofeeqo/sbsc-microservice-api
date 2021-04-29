var express = require('express');
var router = express.Router();

const Controller = require('../controller');

//
const cote = require("cote");
const responder = new cote.Responder({name: "Products Responder", key: "products"});

// Get all products
responder.on("products", async (req, callback) => {
	var result = await Controller.products();
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


// Get a single product with ID
responder.on("a product", async (req, callback) => {

	var product = await Controller.product(req.id);
	if (product) {
		callback(null, {
			error: false,
			message: "",
			data: product
		});
	}
	else {
		callback(null, {
			error: true,
			message: 'No product found!',
			data: null
		})
	}
});

// Add a new Product
responder.on("create product", async function(req, callback) {

	const data = {
		name: req.name,
		price: req.price,
	}

	var result = await Controller.addProduct(data);
	if (result) {
		callback(null, {
			error: false,
			message: "Product added Successfully",
		});
	}
	else {
		callback(null, {
			error: true,
			message: 'Error occured!'
		})
	}
});


module.exports = router;