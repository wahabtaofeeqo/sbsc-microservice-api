var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var url1 = "atlas URL"

exports.getConnection = async () => {
	const db = await MongoClient.connect(url1,  { useUnifiedTopology: true });
	return (db) ? db.db("ecommerce") : null;
}