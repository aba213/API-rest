const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");


router.post("/add",async (req, res)=>{
  
  try {
  
    let newContact = new Contact({...req.body});
  let result= await newContact.save();
  res.send({ result, message: " successfully,aded" });
  } catch (error) {
    console.log(error)
  }
}) ;

router.get("/", async (req, res) => {
  try {
    let result = await Contact.find();
    res.send({  result, message: "geting user successfully" });
  } catch (error) {
    console.log(error)
  }
});

router.get("/:id", async (req, res) => {
  try {
    let result = await User.findOne({ _id: req.params.id });
    res.send({ result, message: "geting user successfully" });
  } catch (error) {
    console.log(error);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    let result = await User.deleteOne({ _id: req.params.id });
    
    result.n? res.send({result:result,msg:'deleted'}): res.status(400).send({result:result,msg: " not found " });
    
  } catch (error) {
    console.log(error);
  }
});


router.put("/:id", async (req, res) => {
  try {
    let result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    resul. nmodified?
       res.send({ result: result ,msg: " updated" }):
       res.status(400).send({result:result,msg:'alredy updeted'})
     
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;