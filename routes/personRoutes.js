const express = require('express')
const Person = require('./../models/person'); 
const router = express.Router();

router.post('/', async (req, res) => {

  try {
    const data = req.body;  // Assuming the request body contains the person data in JSON format

    // Create a new Person instance
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("Person saved successfully:");
    res.status(200).json(response);

  } catch (err) {
    console.log("Error saving person:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})

router.get('/', async (req, res) => {
  try {
    const data = await Person.find(); // Fetch all people from the database  
    console.log("Person fetched successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error fetching person:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:worktype', async (req, res) => {
  try{
    const worktype = req.params.worktype;
    if(worktype=='Chef' || worktype=='Manager' || worktype=='Sweeper' || worktype=='Waiter' || worktype=='Receptionist'){
      const response = await Person.find({work : worktype});
      console.log("response fetched");
      res.status(200).json(response);
    }else{
      console.log("error in fetching");
      res.status(404).json({error : "invalid worktype"});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error : "Internal server error"});
    }
    
})

module.exports = router;