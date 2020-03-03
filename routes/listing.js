var connection = require('./mysql');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = require('./mongoose');
/* GET lsiting page. */
router.get('/', async (req, res, next) => {
    await db.model('properties').find((err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('listing', {
                data: data,
                layout: 'listing'
            });
        }
    });
});

module.exports = router;