const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    images: [{
        required: true,
        type: String,
    }],
    name: {
        required: true,
        type: String,
    },
    sku: {
        unique: true,
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    },
    desc: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model('Products', ProductSchema)