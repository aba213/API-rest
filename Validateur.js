const user = require("../models/User");

exports.postUser = async (req, res) => {
  try {
  
    const newUser = new User(req.body);
  
    if (!req.body.email) {
      res.status(400).send({ message: "email is required check again" });
      return;
    }
    
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res
        .status(400)
        .send({ message: "user already exist email should be unique" });
      return;
    }
    const response = await newUser.save();
    res.send({ response: response, message: "user is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "can not save it" });
  }
};