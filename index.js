const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require('express-list-endpoints');
//const Mongoose = require("mongoose");

var app = express();

app.use(require("./routes/api"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000, () => {
    console.log('Now listening for requests');
});

console.log(listEndpoints(app));

