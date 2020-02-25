var express = require('express');
var connection = require('./mysql');
var router = express.Router();
var query = `SELECT *
FROM room`;
/* GET home page. */
router.get('/:roomSlug', function (req, res, next) {
    connection.query(query, (err, data) => {

        if (!err) {
            data.forEach(element => {
                if (element.slug === req.params.roomSlug) {
                    res.render('room', {
                        data: element,
                        layout: 'room'

                    });
                }
            });


        } else {
            throw err;
        }
    });
});

module.exports = router;