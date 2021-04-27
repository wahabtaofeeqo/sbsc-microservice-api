const cote = require("cote");
const jwt = require('jwt-simple');

//
const userRequester = new cote.Requester({name: "Users Requester", key: "users"});

module.exports = async (req, res, next) => {
	if ((req.path == "/auth/login") || (req.path == "/auth/register")) {
		next();
	}
	else {
		if (!req.headers.authorization) 
			res.status(401).json({error: true, message: "You are not authorized"});

		const token = req.headers.authorization.split(" ")[1];
		const payload = jwt.decode(token, process.env.JWT_SECRET);
		if (payload) {
			var user = await userRequester.send({type: "auth", email: payload.email});
			if(user) {
				req.user = user;
				next();
			}
			else {
				res.status(401).json({
					error: true,
					message: "Token not recognised"
				})
			}
		}
		else {
			res.status(401).json({
				error: true,
				message: "Token not recognised"
			})
		}
	}
}