const express = require('express');
const Member = require('../models/member');
const router = express.Router();
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
<<<<<<< HEAD
json = bodyParser.json();
=======
jsonParser = bodyParser.json();
>>>>>>> origin/working_Jamie

router.get('/', function(req, res){
    res.send('Hello World! ACM Website coming soon.');
});
//GETALL
router.get('/members',function(req, res, next){
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true,
        useUnifiedTopology: true
    });    
    client.connect(err => {
        const collection = client.db("ACM").collection("Member");
        // perform actions on the collection object
        collection.find({}).toArray(function(error, result)  {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});
//Get one
router.get('/member', json, function(req, res, next){
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true,
        useUnifiedTopology: true
    });    
    client.connect(err => {
        const collection = client.db("ACM").collection("Member");
        var ObjectID = require("mongodb").ObjectID
        collection.find({w_num: req.body.w_num}).toArray(function(error, result) {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });
});

//add new member to db
<<<<<<< HEAD
router.post('/member', json, function(req, res){
    const first_name = req.first_name;
    const last_name = req.last_name;
    const email = req.email;
    const major = req.major;
    const w_num = req.w_num;
    const signup_date = new Date();
    const password = req.password;
=======
router.post('/signup', jsonParser, function(req, res){
  console.log(req.body);
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var major = req.body.major;
    var w_num = req.body.w_num;
    var signup_date = new Date();
    var expiration_date = new Date(signup_date.getTime() + (1000 * 60 * 60 * 24 * 365));
    var password = req.body.password;
>>>>>>> origin/working_Jamie

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("ACM").collection("Member");
  // perform actions on the collection object
    collection.insertOne({first_name: first_name, last_name: last_name, email: email, major: major, w_num: w_num, signup_date: signup_date, expiration_date: expiration_date, password: password})
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