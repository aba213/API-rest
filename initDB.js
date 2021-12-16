const { connect, connection } = require('mongoose');
const { config } = require('dotenv'); 
module.exports = () => {
    config(); 
    const uri = process.env.DB_URI;

connect('mongodb://localhost:27017/contactlist',
  { dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
   })
   .then(() => {
    console.log('Connection estabislished with MongoDB');
})
.catch(error => console.error(error.message));
}

