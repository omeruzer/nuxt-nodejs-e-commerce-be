const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = Schema({
    customerName: {
        require:true,
        type: String,
    },
    customerPhone: {
        require:true,
        type: Number,
    },
    customerEmail: {
        require:true,
        type: String,
    },
    items: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Products'
        },
        qty: {
            type: Number,
            default: 1
        }
    }],
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:"pending"
    }
})

module.exports = mongoose.model('Order', OrderSchema)