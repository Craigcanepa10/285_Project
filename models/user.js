const mongoose = require('mongoose');
const { Schema } = mongoose;
var crypto = require('crypto');

//create user Schema and model
const UserSchema = new Schema({
    first_name: { 
        type : String, 
        required : true
    },
    last_name: { 
        type : String, 
        required : true
    },
    email: { 
        type : String, 
        required : true
    },
    major: { 
        type : String, 
        required : true
    },
    w_num: { 
        type : String, 
        required : true
    },
    signup_date: Date,
    expiration_date: Date,
    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
        1000, 64, `sha512`).toString(`hex`); 
};

UserSchema.methods.validPassword = function(password) { 
    var hash_check = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return hash_check === hash; 
}; 

const User = mongoose.model('user', UserSchema);
module.exports = User;