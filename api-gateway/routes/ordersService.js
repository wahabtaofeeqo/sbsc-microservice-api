const express = require('express');
const router  = express.Router();

// Broker
const cote = require('cote');
const requester = new cote.Requester({name: "Orders Requester", key: "order"});


router.get("/orders", (req, res) => {
	requester.send({type: "orders"}, function(err, result) {
		res.send(result);
	})	
})

router.get("/orders/:id", async (req, res) => {
	var result = await requester.send({type: "an order", id: req.params.id});
	res.send(result);
})

router.post("/orders", async (req, res) => {

	var result = await requester.send({
			type: "create order", 
			customer_id: req.user._id,
			product_id: req.body.product_id,
			quantity: req.body.quantity
		});

	res.send(result);
})

module.exports = router;