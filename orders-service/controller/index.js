const collectionName = "orders";
const Order = require('../model');

exports.orders = async () => {
	return await Order.find({});
}

exports.order = async (id) => {
	return await Order.findById(id);
}

exports.addOrder = async (data) => {
	var order = new Order(data);
	return await order.save();
}