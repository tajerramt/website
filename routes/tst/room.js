var mongoose = require('mongoose');
var property = require('./properties');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/lm?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var propertySchema = new mongoose.Schema({
    title: String,
    unit: String,
    slug: String,
    address: String,
    description: String,
    numRoom: Number,
    numBath: Number,
    petFriendly: Boolean,
    ameneties: Array,
    media: String,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("we're connected!");

});

var collections = db.collections;
var names = [];
var alo = db.collection('properties', property);
Object.keys(collections).forEach(function (k) {
    names.push(k);
});
alo.find({}, function (err, adminLogins) {
    if (err) return console.error(err);
    console.log(adminLogins);
});
// console.log(alo);
// console.log(names);