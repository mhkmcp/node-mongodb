var MongoClient = require('mongodb').MongoClient;
var Url = "mongodb+srv://admin123:uBEzp2e2ZViZCLVO@cluster0.jrjv8.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(Url, config, function (error) {
    if (error) {
        console.log("Failed!");
    } else {
        console.log("Success");
    }
})