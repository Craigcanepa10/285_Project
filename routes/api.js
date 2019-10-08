const express = require('express');
const Member = require('../models/member');
const router = express.Router();
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', function(req, res){
    res.send('Hello World! ACM Website coming soon.');
});

router.get('/member', function (req, res){
    res.send({type : 'GET'});
});

//add new member to db
router.post('/signup', jsonParser, function(req, res){
  console.log(req.body);
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var major = req.body.major;
    var w_num = req.body.w_num;
    var signup_date = Date.now();
    var password = req.body.password;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("ACM").collection("Member");
  // perform actions on the collection object
    collection.insertOne({first_name: first_name, last_name: last_name, email: email, major: major, w_num: w_num, signup_date: signup_date, password: password})
    .then(out => res.status(201).json({message: "Success"}))
  client.close();
});
});

//update member info
router.put('/member/:id', function(req, res){
    res.send({type : 'PUT'});
});

//delete member
router.delete('/member/:id', function(req, res){
    res.send({type : 'DELETE'});
});

module.exports = router;