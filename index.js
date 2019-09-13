const express = require('express');

//set up express app
const app = express();

//initial routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || 27017, function(){
    console.log('Now listening for requests');
});