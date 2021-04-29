var express = require('express');
var router = express.Router();

// Controller
const Controller = require('../controller');

//
const cote = require("cote");
const responder = new cote.Responder({name: "Orders Responder", key: "order"});

// Products
const productRequester = new cote.Requester({name: "Product Requester", key: "products"});

// Users
const userRequester = new cote.Requester({name: "Users Requester", key: "users"});

// Get all orders
responder.on("orders", async (req, callback) => {
	var data = await Controller.orders();
	if (data) {

		let orders = [];
		for (let i = 0; i < data.length; i++) {
			 
			let current = data[i];
			let product = await getProductWithID(current.product);
			let order = {
				id: current._id,
				user: await getUserWithID(current.user),
				product: product.data
			}

			orders.push(order);
		}

		callback(null, {
			error: false,
			message: "",
			data: orders
		});
	}
	else {
		callback(null, {
			error: true,
			message: 'Error occured! Please try again'
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


// Add new Order
responder.on("create order", async (req, callback) => {

	// Prepare Data
	const data = {
		user: req.customer_id,
		product: req.product_id,
		quantity: req.quantity
	}

	// Comfirm ID
	const product = await getProductWithID(req.product_id);
	if (!product) {
		callback(null, {
			error: true,
			message: "Product ID not correct",
		})
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
			message: 'Error occured'
		})
	}
});

async function getProductWithID(id) {
	return await productRequester.send({type: "a product", id: id});
}

async function getUserWithID(id) {
	return await userRequester.send({type: "user with id", id: id});
}

module.exports = router;