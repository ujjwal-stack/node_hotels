const express = require('express');
const MenuItem = require('./../models/menu'); // Ensure models/menu.js is in the correct path
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new MenuItem(data);

    const response = await newMenu.save();
    console.log("Menu saved Successfully!");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error saving menu :", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find(); // Fetch all people from the database  
    console.log("Person fetched successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error fetching person:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 router.get('/:tasteType', async (req, res) => {
    const tasteType = req.params.tasteType;
    try{
    if(tasteType=='sweet' || tasteType=='spicy' || tasteType=='savory'){
        const response = await MenuItem.find({taste : tasteType});
        console.log("menu taste fetched");
        res.status(200).json(response);
    }else{
        console.log("taste not fetched");
        res.status(404).json({error : "wrong taste type"});
    }

    }catch(err){
       console.log("error in fetchin taste", err);
       res.status(500).json({error : "Internal Server Error "})
    }
}) 

module.exports = router;
