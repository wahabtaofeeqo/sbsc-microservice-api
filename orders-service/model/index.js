const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'users' },
	product: { type: Schema.Types.ObjectId, ref: 'products' },
	quantity: Number
});

module.exports = mongoose.model("orders", OrderSchema);