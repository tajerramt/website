var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = require('./mongoose');
var property = require('./tst/properties');

/* GET home page. */
router.get('/', async (req, res, next) => {
  await db.model('properties').find((err, data) => {
    if (err) {
      throw err;
    } else {
      res.render('main', {
        data: data
      });
    }
  });
});


module.exports = router;