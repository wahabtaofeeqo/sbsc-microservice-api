var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');

const Controller = require('../controller');

//
const cote = require("cote");
const responder = new cote.Responder({name: "Users Responder", key: "users"});


responder.on("auth", async (req, callback) => {
	var result = await Controller.user(req.email);
	if (result) {
		callback(null, result);
	}
	else {
		callback(null, null)
	}
})

responder.on("users", async (req, callback) => {
	var result = await Controller.users();
	if (result) {
		callback(null, result);
	}
	else {
		callback(null, null)
	}
})

responder.on("login", async (req, callback) => {
 
	var User = await Controller.user(req.email);
	if (User) {
		var passwordOK = bcrypt.compareSync(req.password, User.password);
		if (!passwordOK) {
			callback(null, {
				error: false,
				message: "Password not correct",
			});
		}
		else {

			const payload = {userid: User._id, email: User.email};
			const token = jwt.encode(payload, process.env.JWT_SECRET);

			callback(null, {
				error: false,
				message: "Login Successfully",
				accessToken: token,
			});
		}
	}
	else {
		callback(null, {
			error: true,
			message: "Email not correct",
		})
	}
})

responder.on("register", async (req, callback) => {
	callback(null, {
		error: true,
		message: "Not implemented"
	})
})

responder.on("user with id", async (req, callback) => {
	const user = await Controller.userWithID(req.id);
	callback(null, user);
})

module.exports = router;
