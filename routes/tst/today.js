var mongoose = require('mongoose');
var propertySchema = require('./properties');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/lm?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("we're connected!");

});
var model = mongoose.model('properties');
model.find({}, function (err, adminLogins) {
    if (err) return console.error(err);
    console.log(adminLogins);
});