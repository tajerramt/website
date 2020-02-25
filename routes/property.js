var express = require('express');
var connection = require('./mysql');
var router = express.Router();
var query = `SELECT *
FROM property`;

router.get('/:propertiesSlug', (req, res) => {
    var list = {};
    connection.query(query, (err, data) => {
        if (err) {
            throw err;
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].slug === req.params.propertiesSlug) {
                    list.property = data[i];
                    var foreignkey = `SELECT s.* FROM property p INNER JOIN room s
												ON s.unit = p.unit
												WHERE p.unit LIKE ?`;
                    connection.query(foreignkey, data[i].unit,
                        (err, room) => {
                            if (err) {
                                throw err;
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
});
module.exports = router;