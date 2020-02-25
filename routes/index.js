var express = require('express');
var connection = require('./mysql');
var router = express.Router();
var query = `SELECT *
FROM property`;
/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query(query, (err, data) => {

    if (!err) {
      res.render('main', {
        data: data,
        layout: 'main'
      });

    } else {
      throw err;
    }
  });
});

module.exports = router;