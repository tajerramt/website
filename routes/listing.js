var connection = require('./mysql');
var express = require('express');
var router = express.Router();
var query = `SELECT *
FROM property`;
/* GET lsiting page. */
router.get('/', function (req, res, next) {
    connection.query(query, (err, data) => {

        if (!err) {
            res.render('listing', {
                data: data,
                layout: 'listing'
            });

        } else {
            throw err;
        }
    });
});

module.exports = router;