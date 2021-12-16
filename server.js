const express = require('express');
const User =require('./models/user');
require('dotenv').config();

require('./initDB')();


const app = express();

const PORT = process.env.PORT || 5000;

app.listen(5000,(err)=>
err ? console.error(err) : console.log("server is running")
);