var mongoose = require('mongoose');
var property = require('./properties');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/lm?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("we're connected!");

});

var titlew = ['Deerfield', 'Deerfield-2', 'Twelve Oaks-101', 'Twelve Oaks-202', 'Woodland-A', 'Woodland-B'];
var unitw = ['1703 Deerfield - Unit 1703', 'Deerfield-2 - Unit 1707', 'Twelve Oaks - Unit 101', 'Twelve Oaks - Unit 202', 'Woodland - Unit A', 'Woodland - Unit B'];
var slugw = ['1703-Deerfield', '1707-Deerfield1', 'Twelve-Oaks-101', 'Twelve-Oaks-202', 'Woodland-A', 'Woodland-B'];
var addressw = ['1703-Deerfield dr, Austin, Tx, 78741', '1707-Deerfield dr, Austin, Tx, 787411', '704W 21st St, Austin, TX', '704W 21st St, Austin, TX', '1910 Woodland Ave, Austin, TX', '1910 Woodland Ave, Austin, TX'];
var descriptionw = ['blablabla', 'blablabla1', 'blablabla2'];
var numRoomw = [5, 5, 2, 2, 2, 2];
var numBathw = [4, 4, 2, 2, 2, 2];
var petFriendlyw = [false, false, false, false, false, true];
var amenetiesw = [
    ["Iron", "Washer", "Dryer", "Balcony", "Etc"],
    ["Iron", "Washer", "Dryer", "Balcony", "Etc1"],
    ["Iron", "Washer", "Dryer", "Balcony", "Etc2"],
    ["Iron", "Washer", "Dryer", "Balcony", "Etc2"],
    ["Iron", "Washer", "Dryer", "Balcony", "Etc2"],
    ["Iron", "Washer", "Dryer", "Balcony", "Etc2"],
];
var mediaw = ['images_deerfield', 'images_deerfield_2', 'images_tw_101', 'images_tw_202', 'images_wd_a', 'images_wd_b'];
var reviewsw = ['reviews_deerfield', 'reviews_deerfield_2', 'reviews_tw_101', 'reviews_tw_202', 'reviews_wd_a', 'reviews_wd_b'];

// var test = new property();
var adminLogin = mongoose.model('properties', property);
adminLogin.find(function (err, adminLogins) {
    if (err) return console.error(err);
    console.log(adminLogins);
});

// function insertToDataBase() {

//     for (let i = 0; i < titlew.length; i++) {
//         var test = new property({
//             title: titlew[0],
//             unit: unitw[i],
//             slug: slugw[i],
//             address: addressw[i],
//             description: descriptionw[i],
//             numRoom: numRoomw[i],
//             numBath: numBathw[i],
//             petFriendly: petFriendlyw[i],
//             ameneties: amenetiesw[i],
//             media: mediaw[i],
//             reviews: reviewsw[i]
//         });

//         //insrt data
//         test.save((err) => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log("Row created!!");
//             }
//         });
//         //log data
//     }
//     test.find({}, (data, err) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log("Row created!!", data);
//         }
//     });
// }
// insertToDataBase();


// test.findOne({}, (data, err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Row created!!", data);
//     }
// });

// db.close();