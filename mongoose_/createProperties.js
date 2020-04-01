/*jshint esversion: 8 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@website-2j6up.mongodb.net/fistbump?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});
mongoose.Promise = global.Promise;
var propertySchema = new mongoose.Schema({
    Title: String,
    Unit: String,
    Slug: String,
    Address: String,
    Description: String,
    NumRoom: Number,
    NumBath: Number,
    PetFriendly: Boolean,
    Ameneties: Array,
    PropertyPrice: Number,
    Room: [{
        Title: String,
        Description: String,
        Slug: String,
        MinDuration: Number,
        NumBeds: String,
        Ameneties: Array,
        PrivateBath: Boolean,
        Price: Number

    }],
    Media: {
        Name: String,
        Location: Array
    },
    Review: [{
        Name: String,
        Description: String,
        Stars: Number
    }]
});
var property = mongoose.model('Propeties', propertySchema);

var woodLand_A = {
    Title: "Woodland-A",
    Unit: "Woodland - Unit A",
    Slug: "Woodland-A",
    Address: "1910 Woodland Ave, Austin, TX",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.",
    NumRoom: 2,
    NumBath: 2,
    PetFriendly: true,
    Ameneties: ["one", "two", "three", "foor"],
    PropertyPrice: 2200,
    Room: [{
        Title: "Master-A",
        Description: "Blabla",
        Slug: "Master-A-Woodland",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Study-A",
        Description: "Blabla",
        Slug: "Study-B-Woodland",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }],
    Media: {
        Name: "HomeVideo",
        address: "public/woodland/homevideo.gif"
    },
    Review: [{
        Name: "El",
        Description: "Amazing !!!",
        Stars: "5"
    }, {
        Name: "Mehdi",
        Description: "Beautiful !!",
        Stars: "5"
    }, {
        Name: "Mo",
        Description: "Splender !!",
        Stars: "5"
    }]
};
var woodLand_B = {
    Title: "Woodland-B",
    Unit: "Woodland - Unit B",
    Slug: "Woodland-B",
    Address: "1910 Woodland Ave, Austin, TX",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.",
    NumRoom: 2,
    NumBath: 2,
    PetFriendly: true,
    Ameneties: ["one", "two", "three", "foor"],
    PropertyPrice: 2200,
    Room: [{
        Title: "Master-B",
        Description: "Blabla",
        Slug: "Master-B-Woodland",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        Price: 1100
    }, {
        Title: "Study-B",
        Description: "Blabla",
        Slug: "Study-B-Woodland",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }],
    Media: {
        Name: "HomeVideo",
        address: "public/woodland/homevideo.gif"
    },
    Review: [{
        Name: "El",
        Description: "Amazing !!!",
        Stars: "5"
    }, {
        Name: "Mehdi",
        Description: "Beautiful !!",
        Stars: "5"
    }, {
        Name: "Mo",
        Description: "Splender !!",
        Stars: "5"
    }]
};
var deerfield1703 = {
    Title: "Deerfield",
    Unit: "1703 Deerfield - Unit 1703",
    Slug: "1703-Deerfield",
    Address: "1703 Deerfield Dr, Austin, TX",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.",
    NumRoom: 5,
    NumBath: 4,
    PetFriendly: false,
    Ameneties: ["one", "two", "three", "foor"],
    PropertyPrice: 10000,
    Room: [{
            Title: "1 FL Master",
            Description: "Blabla",
            Slug: "1Fl-Master-1703Deerfield",
            MinDuration: 30,
            NumBeds: 1,
            Ameneties: ["one", "two", "three", "foor"],
            PrivateBath: true,
            Price: 1100
        }, {
            Title: "1 FL Study",
            Description: "Blabla",
            Slug: "1Fl-Study-1703Deerfield",
            MinDuration: 30,
            NumBeds: 1,
            Ameneties: ["one", "two", "three", "foor"],
            PrivateBath: true,
            Price: 1100
        }, {
            Title: "2 FL Left",
            Description: "Blabla",
            Slug: "2Fl-Left-1703Deerfield",
            MinDuration: 30,
            NumBeds: 1,
            Ameneties: ["one", "two", "three", "foor"],
            PrivateBath: true,
            Price: 1100
        },
        {
            Title: "2 FL Right",
            Description: "Blabla",
            Slug: "2Fl-Right-1703Deerfield",
            MinDuration: 30,
            NumBeds: 1,
            Ameneties: ["one", "two", "three", "foor"],
            PrivateBath: true,
            Price: 1100
        },
        {
            Title: "2 FL Master",
            Description: "Blabla",
            Slug: "2Fl-Master-1703Deerfield",
            MinDuration: 30,
            NumBeds: 1,
            Ameneties: ["one", "two", "three", "foor"],
            PrivateBath: true,
            Price: 1100
        }
    ],
    Media: {
        Name: "HomeVideo",
        address: "public/woodland/homevideo.gif"
    },
    Review: [{
        Name: "El",
        Description: "Amazing !!!",
        Stars: "5"
    }, {
        Name: "Mehdi",
        Description: "Beautiful !!",
        Stars: "5"
    }, {
        Name: "Mo",
        Description: "Splender !!",
        Stars: "5"
    }]
};
var deerfield1707 = {
    Title: "Deerfield-2",
    Unit: "Deerfield- Unit 1707",
    Slug: "Woodland-B",
    Address: "1910 Woodland Ave, Austin, TX",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.",
    NumRoom: 5,
    NumBath: 4,
    PetFriendly: true,
    Ameneties: ["one", "two", "three", "foor"],
    PropertyPrice: 10000,
    Room: [{
        Title: "Studio-1707",
        Description: "Blabla",
        Slug: "Studio-1707Deerfield",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Master-1707",
        Description: "Blabla",
        Slug: "Master-A-1707Deerfield",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Master-B-1707",
        Description: "Blabla",
        Slug: "Master-B-1707Deerfield",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Study-A-1707",
        Description: "Blabla",
        Slug: "Study-A-1707Deerfield",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Study-B-1707",
        Description: "Blabla",
        Slug: "Study-B-1707Deerfield",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }],
    Media: {
        Name: "HomeVideo",
        address: "public/woodland/homevideo.gif"
    },
    Review: [{
        Name: "El",
        Description: "Amazing !!!",
        Stars: "5"
    }, {
        Name: "Mehdi",
        Description: "Beautiful !!",
        Stars: "5"
    }, {
        Name: "Mo",
        Description: "Splender !!",
        Stars: "5"
    }]
};
var twelveOaks_101 = {
    Title: "Twelve Oaks-101",
    Unit: "Twelve Oaks - Unit 101",
    Slug: "Twelve-Oaks-101",
    Address: "704W 21st St, Austin, TX",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.",
    NumRoom: 2,
    NumBath: 2,
    PetFriendly: false,
    Ameneties: ["one", "two", "three", "foor"],
    PropertyPrice: 2200,
    Room: [{
        Title: "Master-101",
        Description: "Blabla",
        Slug: "Master-101-TwelveOaks",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Study-101",
        Description: "Blabla",
        Slug: "Study-101-TwelveOaks",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }],
    Media: {
        Name: "HomeVideo",
        address: "public/woodland/homevideo.gif"
    },
    Review: [{
        Name: "El",
        Description: "Amazing !!!",
        Stars: "5"
    }, {
        Name: "Mehdi",
        Description: "Beautiful !!",
        Stars: "5"
    }, {
        Name: "Mo",
        Description: "Splender !!",
        Stars: "5"
    }]
};
var twelveOaks_202 = {
    Title: "Twelve Oaks-202",
    Unit: "Twelve Oaks - Unit 202",
    Slug: "Twelve-Oaks-202",
    Address: "704 W 21st St, Austin, TX",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consectetur et porro voluptatem maiores quidem inventore harum explicabo deserunt fuga minima sed, sit nemo expedita. Dolor aliquid rerum recusandae excepturi.",
    NumRoom: 2,
    NumBath: 2,
    PetFriendly: true,
    Ameneties: ["one", "two", "three", "foor"],
    PropertyPrice: 2200,
    Room: [{
        Title: "Master-202",
        Description: "Blabla",
        Slug: "Master-202-TwelveOaks",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }, {
        Title: "Study-202",
        Description: "Blabla",
        Slug: "Study-202-TwelveOaks",
        MinDuration: 30,
        NumBeds: 1,
        Ameneties: ["one", "two", "three", "foor"],
        PrivateBath: true,
        Price: 1100
    }],
    Media: {
        Name: "HomeVideo",
        address: "public/woodland/homevideo.gif"
    },
    Review: [{
        Name: "El",
        Description: "Amazing !!!",
        Stars: "5"
    }, {
        Name: "Mehdi",
        Description: "Beautiful !!",
        Stars: "5"
    }, {
        Name: "Mo",
        Description: "Splender !!",
        Stars: "5"
    }]
};
var createProperty = (params) => {
    var new_property = new property(params);
    new_property.save((err, data) => {
        if (err) {
            throw err;
        }
        console.log("property created:" + data);
    })
};
//Main//
// createProperty(woodLand_A);
// createProperty(woodLand_B);
// createProperty(deerfield1703);
// createProperty(deerfield1707);
// createProperty(twelveOaks_101);
// createProperty(twelveOaks_202);