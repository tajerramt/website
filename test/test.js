var mongoose = require('mongoose');
var property = require('../routes/tst/properties');
var assert = require('assert');
mongoose.Promise = global.Promise;

describe('Database Tests', function () {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
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
    });




    describe('Test Database', function () {
        //Save object with 'name' value of 'Mike"
        it('New row saved to test database', function (done) {
            var testName = property({
                title: 'titlew',
                unit: 'unitw[i]',
                slug: 'slugw[i]',
                address: 'addressw[i]',
                description: 'descriptionw[i]',
                numRoom: 1,
                numBath: 1,
                petFriendly: false,
                ameneties: 'amenetiesw[i]',
                media: 'mediaw[i]',
                reviews: 'reviewsw[i]'
            });
            testName.save(done);
            // done();
        });
    })

    it('Should retrieve data from test database', function (done) {
        //Look up the 'Mike' object previously saved.

        property.find({}, (err, name) => {
            if (err) {
                throw err;
            }
            if (name.length === 0) {
                throw new Error('No data!');
            }
            done();
        });
    });

    // After all tests are finished drop database and close connection
    after(function (done) {
        mongoose.connection.close()
        done();
    });
});

// mongoose.connection.db.dropDatabase(function () {
//     mongoose.connection.close(done);
// });



// it('Dont save incorrect format to database', function (done) {
//     //Attempt to save with wrong info. An error should trigger
//     var wrongSave = property({
//         Name: 'Not Mike',
//         unit: 'unitw[i]',
//         slug: 'slugw[i]',
//         address: 'addressw[i]',
//         description: 'descriptionw[i]',
//         numRoom: 1,
//         numBath: 1,
//         petFriendly: false,
//         ameneties: 'amenetiesw[i]',
//         media: 'mediaw[i]',
//         reviews: 'reviewsw[i]'
//     });
//     wrongSave.save(err => {
//         if (err) {
//             return done();
//         }
//         throw new Error('Should generate error!');
//         // return done();
//     });
// });