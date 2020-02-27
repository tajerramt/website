//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://root:root@cluster0-pt7ng.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect('mongodb://localhost/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
catch(error => handleError(error));

// Or:
// try {
//   await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// } catch (error) {
//   handleError(error);
// }
// mongoose.connect(mongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// var kittySchema = new mongoose.Schema({
//     name: String,
//     age: Float32Array
// });

// var Kitten = mongoose.model('Kitten', kittySchema);
// var silence = new Kitten({
//     name: 'silence',
//     age: 23

// });
// console.log(silence);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.off();
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:root@cluster0-pt7ng.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// client.connect(err => {
//     if (err) {
//         throw err;
//     } else {
//         const collection = client.db("test").collection("devices");
//         console.log(collection);
//         // perform actions on the collection object
//         client.close();
//     }

// });