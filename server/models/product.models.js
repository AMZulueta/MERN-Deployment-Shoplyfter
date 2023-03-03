const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String
    },

    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String, 
        // required: [true, "Image URL is required."]
    },

}, {timestamps: true})

const Product = model('Product', ProductSchema);

module.exports = Product;