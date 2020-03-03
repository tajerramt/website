var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//properties database
mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/properties?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("we're connected!");

});
module.exports = db;