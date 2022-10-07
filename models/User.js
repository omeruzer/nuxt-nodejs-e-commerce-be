const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    name: {
        required: true,
        type: String,
    },
    surname: {
        required: true,
        type: String,
    },
    email: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    isAdmin: {
        type: Boolean,
        require:true,
        default: false
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
})

module.exports = mongoose.model('Users', UserSchema)