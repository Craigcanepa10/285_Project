const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require('express-list-endpoints');
//Maybe this is where i tell it to use a CSS file.
//const Mongoose = require("mongoose");

var app = express();

app.use(require("./routes/api"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose.connect("mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority", 
// { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect("mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority", 
//{ useNewUrlParser: true, useUnifiedTopology: true });

app.listen(process.env.PORT || 3000, () => {
    console.log('Now listening for requests');
});

console.log(listEndpoints(app));

