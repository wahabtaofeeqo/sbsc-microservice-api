const Database = require('../data');
const collectionName = "orders";

exports.orders = async () => {

	const Connection = await Database.getConnection();
	if (Connection) {
		const result = await Connection.collection(collectionName).find({}).toArray();
		return result;
	}

	return null
};

exports.order = async (productID) => {

	const Connection = await Database.getConnection();
	if (Connection) {
		var query = { _id: productID };
		const result = await Connection.collection(collectionName).find({query}).toArray();
		return result;
	}

	return null
};

exports.addOrder = async (data) => {

	const Connection = await Database.getConnection();
	if (Connection) {
		return await Connection.collection(collectionName).insertOne(data);
	}

	return null
}