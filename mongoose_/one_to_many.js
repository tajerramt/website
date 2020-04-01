/*jshint esversion: 8 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//**********Connection**********************

mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/march17?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("we're connected!");

});
//**********Schemas**********************
var propertySchema = new mongoose.Schema({
    title: String,
    room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rooms"
    }]
});

var roomSchema = new mongoose.Schema({
    title: String,
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Propeties"
    }
});


var property = mongoose.model('Propeties', propertySchema);
var room = mongoose.model('Rooms', roomSchema);
// *****************functions********************************

const insertProperties = async () => {
    var properties = [{
        title: "one",
        // room: []
    }, {
        title: "two",
        // room: []
    }, {
        title: "three",
        // room: []
    }];

    for (var proper of properties) {

        var new_property = new property(proper);
        await new_property.save((err, data) => {
            if (err) throw err;
            console.log("property created!" + data);
        });


    }



    // insertProperties();

    // var two = property.findOne({
    //     title: 'two'
    // }, async (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     // console.log(data);
    //     for (var i in data.room) {
    //         console.log(data.room[i]);
    //         room.findById(data.room[i],
    //             (err, data) => {
    //                 if (err) throw err;
    //                 console.log(data);

    //             });
    //     }


    /////////////////////////////////////////
    var studio = new room({
        title: "Studio101",
        property: two._id
    });
    await studio.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms created");
    });

    data.room.push(studio);

    data.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms Savedin the two");
    });
};

/*
const insetRooms = async () => {
    var deerfield101 = await property.findOne({
        title: "one"
    });
    var deerfield202 = await property.findOne({
        title: "two"
    });
    var Woodland = await property.findOne({
        title: "three"
    });
    var studio = new room({
        title: "Studio202--before",
        property: deerfield101._id
    });
    var master1FL = new room({
        title: "1Fl Master--aonther",
        property: deerfield202._id
    });
    var master = new room({
        title: "MasterWD--aonther",
        property: Woodland._id
    });
    var study = new room({
        title: "StudyWD--aonther",
        property: Woodland._id
    });

    await studio.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms created");
    });
    await master1FL.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms created");
    });
    await master.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms created");
    });
    await study.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms created");
    });

    deerfield101.room.push(master1FL);
    deerfield202.room.push(studio);
    Woodland.room.push(master);
    Woodland.room.push(study);
    await deerfield101.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms Saved");
    });
    await deerfield202.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms Saved");
    });
    await Woodland.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Rooms Saved");
    });

};
// connecting();
// insertProperties();
// insetRooms();

property.findOne({}, function (error, story) {
    if (error) {
        return handleError(error);
    }
    // story.author = author;
    console.log(story.room[0].title); // prints "Ian Fleming"
});
// exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The property is %s', story);
//     // prints "The author is Ian Fleming"
// });

//***************************Delete collection:/***************************
// property.deleteMany({}, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log("rows deleted!!");
// });

*/