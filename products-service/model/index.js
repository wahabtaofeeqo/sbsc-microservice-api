const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
	name: String,
	price: String,
	created: Date,
	updated: Date
});

module.exports = mongoose.model("products", ProductSchema);