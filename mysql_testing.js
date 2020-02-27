const mysql = require('mysql');
let connection = mysql.createConnection({
    // connectionLimit: 100,
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: 'website',
    port: "8889",

});
// connection.connect(function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Connected!");
//     }
// });
// connection.get(function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Connected!");
//     }
// });
// connection.end();
module.exports = connection;