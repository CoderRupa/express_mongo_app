const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    customerID: {
        type: Number,
        require: true
    },
    bookID: {
        type: Number,
        require: true
    },
    initialDate:{
        type: Date,
        require: true
    },
    deliveryDate:{
        type: Date,
        require: true
    }
})

const order = mongoose.model('order', orderSchema);
module.exports = order;