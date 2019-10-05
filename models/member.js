const mongoose = require('mongoose');
const { Schema } = mongoose;

//create member Schema and model
const MemberSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    major: {
        type: String
    },
    w_num: {
        type: String
    },
    signup_date: {
        type: Date,
        default: Date.now()
    },
    // renewal_date: {
    // expiration_date: {
    //     //find year from sign up
    // username: String,
    password: {
        type: String
    }
});

const Member = mongoose.model('member', MemberSchema);
module.exports = Member;