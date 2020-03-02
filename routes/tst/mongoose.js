//Set up mongoose connection
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/properties', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("connecteed bitch ");

});
