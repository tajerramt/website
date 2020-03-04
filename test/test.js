var request = require('supertest');
var page = require('../app');
var assert = require('assert');
var mongoose = require('../routes/mongoose');
describe('loading express server ', function () {
    var server;
    before(function (done) {
        server = require('../bin/www');
        done();
    });
    after(function (done) {
        server.close((err) => {
            if (err) {
                throw err;
            } else {
                console.log('Connection closed!!');
                mongoose.close(done);
            }
        });
    });
    it('responds to home page', function (done) {
        request(page)
            .get('/')
            .expect(200).expect(/Deerfield/, done);
    });
    it('responds to about page', function (done) {
        request(page)
            .get('/about')
            .expect(200, done);
    });
    it('responds to listing page', function (done) {
        request(page)
            .get('/listing')
            .expect(200)
            .expect(/Deerfield/, done);
    });
    it('responds to contact page ', function (done) {
        request(page)
            .get('/contact')
            .expect(200, done);
    });
});