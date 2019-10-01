var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var memberSchema = new mongoose.Schema({
    name: String,
    // wNumber: String,
    // major: String,
    // signUp: Date,
    // renewal: Date,
    // expiration: Date,

    // usename: String,
    // password: String,

    //role
  });
  
  var Jamie = mongoose.model('Jamie Peterson', memberSchema);