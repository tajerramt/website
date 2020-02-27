var express = require('express');
var connection = require('./mysql');
var router = express.Router();
var query = `SELECT *
FROM property`;

router.get('/:propertiesSlug', (req, res) => {

    connection.getConnection((err, tempconnect) => {
        if (err) {
            tempconnect.release();
        } else {
            console.log('connect');

            var list = {};
            tempconnect.query(query, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].slug === req.params.propertiesSlug) {
                            list.property = data[i];
                            var foreignkey = `SELECT s.* FROM property p INNER JOIN room s
                                                        ON s.unit = p.unit
                                                        WHERE p.unit LIKE ?`;
                            tempconnect.query(foreignkey, data[i].unit,
                                (error, room) => {
                                    if (error) {
                                        throw error;
                                    } else {
                                        list.rooms = room;
                                        res.render('properties', {
                                            data: list.property,
                                            dataroom: list.rooms,
                                            layout: 'properties'
                                        });
                                    }
                                });
                        }
                    }
                }
            });
        }
    });
});
module.exports = router;