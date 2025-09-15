const mongoose = require('mongoose');

//define the mongoose connection url
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'; // replace 'hotels' with your database name

mongoose.connect(mongoURL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

//get the default connection
//mongoose.connection is used to access the default connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURL);
});

db.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = mongoose;
//module.exports = mongoose; //export the connection for use in other files