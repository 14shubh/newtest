const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        unique : true
    }
});

const User = new mongoose.model('user',UserSchema)
module.exports = User;
 