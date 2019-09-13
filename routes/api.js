const express = require('express');
const Member = require('./member');
const router = express.Router();

var member = new Member("bob", "bob@microsoft.bob");

router.get('/members', function(req, res){
    //const member_array = {
     //   new member
    //}
    //todo: return all members from a member array
    console.log(member.name);
    res.send({type : 'GET'});
});

//add new member
router.post('/members', function(req, res){
    res.send({type : 'POST'});
});

//update member info
router.put('/members/:id', function(req, res){
    res.send({type : 'PUT'});
});

//delete member
router.delete('/members/:id', function(req, res){
    res.send({type : 'DELETE'});
});

module.exports = router;