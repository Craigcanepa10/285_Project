const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");

var app = Express();

app.use("/api", require("./routes/api"));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT || 3000, () => {
    console.log('Now listening for requests');
});

// connect to DB, move into api requests!!!
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jpeter:0nyx@acm-eb7i4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("ACM").collection("Member");
  // perform actions on the collection object
  client.close();
});