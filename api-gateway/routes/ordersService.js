const express = require('express');
const router  = express.Router();

var axios = require('axios');
const baseUrl = "http://localhost:4000"; //URL of Order Service

// Broker
const cote = require('cote');
const requester = new cote.Requester({name: "Orders Requester", key: "order"});

const api = axios.create({
	baseURL: baseUrl
});

router.get("/orders", async (req, res) => {
	var result = await requester.send({type: "orders"});
	res.send(result);
})

router.get("/orders/:id", async (req, res) => {

	var result = await requester.send({type: "an order", id: req.params.id});
	res.send(result);
})

router.post("/orders", async (req, res) => {

	var result = await requester.send({
			type: "create order", 
			customer_id: req.body.customer_id,
			product_id: req.body.product_id,
			quantity: req.body.quantity
		});

	res.send(result);
})

module.exports = router;