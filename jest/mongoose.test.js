var property = require('./routes/tst/properties');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
before(done => {
    mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true

    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {

        console.log("we're connected!");
        done();
    });
})