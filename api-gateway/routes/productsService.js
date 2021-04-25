const express = require('express');
const router  = express.Router();

var axios = require('axios');
const baseUrl = "http://localhost:5000"; // URL of Product Service

// Broker
const cote = require('cote');
const requester = new cote.Requester({name: "Products Requester", key: "products"});

const api = axios.create({
	baseURL: baseUrl
});

router.get("/products", (req, res) => {

	requester.send({type: "products"}, function(err, result) {
		res.send(result);
	})
})

router.get("/products/:id", (req, res) => {

	requester.send({type: "a product", id: req.params.id}, function(err, result) {
		res.send(result);
	})
})

router.post("/products", (req, res) => {

	requester.send({ type: "create product", name: req.body.name, price: req.body.price }, (err, result) => {
			res.send(result);
		});
})

module.exports = router;