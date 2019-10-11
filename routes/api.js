const express = require('express');
const Member = require('../models/member');
const router = express.Router();
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
jsonParser = bodyParser.json();


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
router.get('/member', jsonParser, function(req, res, next){
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
// router.put('/extend', function(req, res){
//     const MongoClient = require('mongodb').MongoClient;
//     const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true,
//         useUnifiedTopology: true
//     });    
//     client.connect(err => {
//     const collection = client.db("ACM").collection("Member");
//         var ObjectID = require("mongodb").ObjectID
//         collection.findOneAndUpdate({w_num: req.body.w_num}).then(function(error, result) {
//             if(error) {
//                 return res.status(500).send(error);
//             }
//             expiration_date.getTime() + (1000 * 60 * 60 * 24 * 365)
//             .then(res.send(expiration_date));    
//         });
//     });
// });



//delete member
router.delete('/delete', jsonParser ,function(req, res){
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true,
        useUnifiedTopology: true
    });    
    client.connect(err => {
    const collection = client.db("ACM").collection("Member");
        var ObjectID = require("mongodb").ObjectID
        collection.findOneAndDelete({w_num: req.body.w_num}).then(function(error, result) {
            if(error) {
                return res.status(500).send(error);
            }
            console.log("This member was removed.");
        });
    });
});

module.exports = router;