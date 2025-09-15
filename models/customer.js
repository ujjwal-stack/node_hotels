const mongoose =require('mongoose');

const customerSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category: {
        type : String,
        enum : ['child', 'young', 'old'],
        required: true
    },
    purchase: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;