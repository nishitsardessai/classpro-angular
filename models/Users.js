var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');
//var crypto = require('crypto'); 

var userSchema = new mongoose.Schema({
    id : Number,
    name: String,
    username:  String,
    password: String
});

module.exports = mongoose.model('User', userSchema);


