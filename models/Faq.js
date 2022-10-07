const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FaqSchema = Schema({
    title: {
        required: true,
        type: String,
    },
    answer: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model('Faq', FaqSchema)