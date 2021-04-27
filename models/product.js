const mongoose = require('mongoose');

ProductSchema = new mongoose.Schema({
	name: { type: String, required: true},
	price: {type: Number, required: true}
});

module.exports = mongoose.model("products", ProductSchema);