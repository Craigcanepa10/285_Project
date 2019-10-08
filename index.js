const express = require("express");
const bodyParser = require("body-parser");
//const Mongoose = require("mongoose");

var app = express();

app.use(require("./routes/api"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT || 4200, () => {
    console.log('Now listening for requests');
});

