const express= require ("express");
require("dotenv").config();
const ConnectDB = require("./config/connectDB");



const app = express();

ConnectDB();


app.use(express.json());

app.use("/api/contact", require("./routes/Contact"));

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT,(err)=>
err ? console.error(err) : console.log("server is running")
);