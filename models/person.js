const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min : 18
    },
    work: {
        type: String,
        enum: ['Chef', 'Waiter', 'Manager', 'Sweeper', 'Receptionist'],
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        min: 10000,
        required: true
    }

    });

    const Person = mongoose.model('Person', personSchema);

    module.exports = Person;
    //module.exports = mongoose.model('Person', personSchema); //export the model for use in other files