const User = require('../model');

exports.users = async () => {
	return await User.find({});
};

exports.user = async (email) => {
	return await User.findOne({email: email});
};

exports.userWithID = async (id) => {
	return await User.findById(id);
}

exports.addUser = async (data) => {
	var user = new User(data);
	return await user.save();
}