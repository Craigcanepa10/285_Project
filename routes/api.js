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
//GETALL
router.get('/member',function(req, res, next){
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

// //GET
// router.get('/member', function (req, res){
//     res.send({type : 'GET'});
// });

//add new member to db
router.post('/signup', jsonParser, function(req, res){
  console.log(req.body);
  let newMember = new Member();
  newMember.first_name = req.body.first_name;
  newMember.last_name = req.body.last_name;
  newMember.email = req.body.email;
  newMember.major = req.body.major;
  newMember.w_num = req.body.w_num;
  newMember.signup_date = new Date();
  newMember.expiration_date = new Date(newMember.signup_date.getTime() + (1000 * 60 * 60 * 24 * 365));
  newMember.setPassword(req.body.password);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("ACM").collection("Member");
  // perform actions on the collection object
    collection.insertOne(newMember)
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