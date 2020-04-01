/*jshint esversion: 8 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//**********Connection**********************

mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/march7?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("we're connected!");

});
















// //**********Schemas**********************
const authorModel = mongoose.Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    website: {
        type: String
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});
const bookModel = mongoose.Schema({
    title: {
        type: String,

    },
    subtitle: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});
let Author = mongoose.model('Author', authorModel);
let Book = mongoose.model('Book', bookModel);