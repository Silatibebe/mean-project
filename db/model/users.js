
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
const UserSchema = new Schema({
     firstName: {
         type: String,
         require: true
     },
     lastName: {
        type: String,
        required: true
    },
     email: {
         type: String,
         required: true

     },
     password:{
         type: String,
         required:true
     }
});

//model

const User = mongoose.model('user', UserSchema);// first param should be 'User'

module.exports = {User};