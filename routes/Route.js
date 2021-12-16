

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Validation = require("Validation");

router.post("/add", Validation.postUser);


router.get("/", async (req, res) => {
  try {
    const result = await User.find();
    res.send({ response: result, message: "geting user successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not " });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geting user successfully" });
  } catch (error) {
    res.status(400).send({ message: " no user with id" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    
     res.send({ response: "user deleted" });
    
  } catch (error) {
    res.send("no id ");
  }
});


router.put("/:id", async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    resul
       res.send({ message: "user updated" });
     
  } catch (error) {
    res.status(400).send({ message: " no user with this id" });
  }
});

module.exports = router;

module.exports= Route