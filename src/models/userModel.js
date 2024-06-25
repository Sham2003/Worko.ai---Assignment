const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:String,
    age:Number,
    email:String,
    zipcode:Number,
    city:String
});

const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel;