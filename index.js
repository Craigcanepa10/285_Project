const express = require("express");
const bodyParser = require("body-parser");
//const Mongoose = require("mongoose");

var app = express();

app.use("/api", require("./routes/api"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000, () => {
    console.log('Now listening for requests');
});

