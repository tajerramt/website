var request = require('supertest');
var page = require('../app');
var assert = require('assert');
var mongoose = require('../routes/mongoose');
describe('loading express', function () {
    var server;
    before(function (done) {
        server = require('../bin/www');
        done();
        // var arw = require('../routes/mongoose');
    });
    after(function (done) {
        server.close((err) => {
            if (err) {
                throw err;
            } else {
                console.log('closed');
                mongoose.close(done);

                // server.close();
                // done();
            }
        });

        // after(function (done) {
        //     server.close(function () {
        //       mongoose.connection.close(done)
        //     })
        // })
        // done();
        //     // server.close();
        //     // (done);
        //     // process.exit(1);
        //     // mongoose.connection.close(done)
        //     // done();
        //     // assert();
        //     // server.close();
    });
    it('responds to /', function (done) {
        request(page)
            .get('/')
            .expect(200, done);
    });
    it('responds to /about', function (done) {
        request(page)
            .get('/about')
            .expect(200, done);
    });
});