var express = require('express');
var connection = require('./mysql');
var router = express.Router();
var query = `SELECT *
FROM property`;

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.getConnection((err, tempconnection) => {
    if (err) {
      tempconnection.release();
      throw err;
    } else {
      console.log("connect");
      tempconnection.query(query, (err, data) => {
        if (!err) {
          res.render('main', {
            data: data,
            layout: 'main'
          });
        } else {
          throw err;
        }
      });
      tempconnection.release();
    }
  });
});


module.exports = router;