const express = require('express');
const router  = express.Router();

// Broker
const cote = require('cote');
const requester = new cote.Requester({name: "Users Requester", key: "users"});

router.post("/auth/login", (req, res) => {
	requester.send({ type: "login", email: req.body.email, password: req.body.password }, (err, result) => {
		res.send(result);
	});
})

router.get("/users", (req, res) => {
	requester.send({ type: "users" }, (err, result) => {
		res.send(result);
	});
})

module.exports = router;