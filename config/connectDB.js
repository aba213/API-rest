const mongoose = require("mongoose");

const connectDB =  () => {
  try {
     mongoose.connect("mongodb://localhost:27017/myap")
    console.log("dabase connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;