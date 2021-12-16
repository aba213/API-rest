const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
        
    },
   

})

module.exports = mongoose.model('User', UserSchema);
