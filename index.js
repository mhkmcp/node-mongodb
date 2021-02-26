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

function DeleteAllItem(MyMongoClient) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    MyCollection.deletemany(function (error, resultObj) {
        if (error) {
            console.log("Delete Failed!");
        } else {
            console.log("Delete Success");
            console.log(resultObj.result.n + " Item Deleted!");
        }

    })
}

function FindOneWithoutCondition(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');
    var FindObj = {}
    MyCollection.findOne(FindObj, function (error, result) {
        console.log(result);
    })
}

function FindOneWithCondition(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    var FindObj = { roll: "05" }
    MyCollection.findOne(FindObj, function (error, result) {
        console.log(result);
    })
}

function FindAllData(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    MyCollection.find().toArray(function (error, result) {
        console.log(result)
    })
}

function FindAllDataByProjection(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    var ItemObj = {}
    var ItemProjection = { projection: { city: "", roll: "" } }

    MyCollection.find(ItemObj, ItemProjection).toArray(function (error, result) {
        console.log(result)
    })
}