const express = require('express');
const Member = require('../models/member');
const router = express.Router();
const BodyParser = require("body-parser");

router.get('/roster', function(req, res){
    res.send({type : 'GET'});
});

router.get('/member', function(req, res){
    res.send({type : 'GET'});
});

//add new member to db
router.post('/member', function(req, res){
    Member.create(req.body).then(function(Member){
        res.send(Member);  
    }
    );
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