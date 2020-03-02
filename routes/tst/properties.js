var mongoose = require('mongoose');
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
module.exports = mongoose.model('properties', propertySchema);