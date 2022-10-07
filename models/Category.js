const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = Schema({
    name: {
        required: true,
        type: String,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }],
})

module.exports = mongoose.model('Categories', CategorySchema)