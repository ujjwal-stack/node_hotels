const express = require('express')

const app = express();
require('./db'); // Ensure db.js is in the same directory
// Ensure models/person.js is in the correct path

const Customer = require('./models/customer')

const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to our hotel booking service!');
});





app.post('/customers', async (req, res) => {
  try{
    const data = req.body;

    const newCust = new Customer(data);

    const response = await newCust.save();
    console.log("Customer saved successfully:");
    res.status(200).json(response);

  }catch(err){
    console.log("Error saving customer:", err);
    res.status(500).json({ error: 'Internal Server Error' });

  }
});

app.get('/customers', async (req, res) => {
  try{
    const data = await Customer.find();
    console.log("customer fetched successfully");
    res.status(200).json(data);
  }catch(err){
    console.log("error in fetching", err);
    res.status(500).json({error: "internal server error"});
  }
})



// Import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes); 


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});