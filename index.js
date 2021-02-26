var MongoClient = require('mongodb').MongoClient;
var Url = "mongodb+srv://admin123:uBEzp2e2ZViZCLVO@cluster0.jrjv8.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(Url, config, function (error, MyMongoClient) {
    if (error) {
        console.log("Failed!");
    } else {
        console.log("Success");
        // InsertData(MyMongoClient);
        DeleteOneItem(MyMongoClient);
    }
});

function InsertData(MyMongoClient) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');
    var MyData = { name: "Kabir", roll: "07", city: "Sylhet" };

    MyCollection.insertOne(MyData, function (error) {
        if (error) {
            console.log("Insert Failed!");
        } else {
            console.log("Insert Success");
        }
    })
}

function DeleteOneItem(MyMongoClient) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');
    var DeleteItem = { roll: "07" };

    MyCollection.deleteOne(DeleteItem, function (error) {
        if (error) {
            console.log("Delete Failed!");
        } else {
            console.log("Delete Success");
        }

    })
}