const Mongoose = require('mongoose');

//create member Schema and model
const MemberSchema = new Mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    major: String,
    w_num: String,
    signup_date: {
        type: Date,
        default: Date.now()},
    // renewal_date: {
    // expiration_date: {
    //     //find year from sign up
    username: String,
    password: String
});

var Member = Mongoose.model("Member", MemberSchema);
module.exports = Member;