const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    address:{
        type: String,
        require: true
    }
})

const customer = mongoose.model('customer', customerSchema);
module.exports = customer;