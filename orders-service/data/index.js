var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var url1 = "mongodb+srv://taocoder:" + encodeURIComponent("@fY8fnLj!#n*9Y#") + "@cluster0.yjg9n.mongodb.net/ecommerce?retryWrites=true&w=majority";

exports.getConnection = async () => {
	const db = await MongoClient.connect(url1,  { useUnifiedTopology: true });
	return (db) ? db.db("ecommerce") : null;
}