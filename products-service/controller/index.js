const Database = require('../data');
const collectionName = "products";

exports.products = async () => {

	const Connection = await Database.getConnection();
	if (Connection) {
		const result = await Connection.collection(collectionName).find({}).toArray();
		return result;
	}

	return null
};

exports.product = async (productID) => {

	const Connection = await Database.getConnection();
	if (Connection) {
		const query = { _id: productID };
		return await Connection.collection(collectionName).find(query).toArray();
	}

	return null
};

exports.addProduct = async (data) => {

	const Connection = await Database.getConnection();
	if (Connection) {
		return await Connection.collection(collectionName).insertOne(data);
	}

	return null
}