const Product = require('../model');
const collectionName = "products";

exports.products = async () => {
	return await Product.find({});
}

exports.product = async (productID) => {
	return await Product.findById(productID);
}

exports.addProduct = async (data) => {
	const product = new Product(data);
	return await product.save();
}