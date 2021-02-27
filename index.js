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

function FindAllDataByQuery(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    var Query = { roll: "01", city: "Rangpur" }

    MyCollection.find(Query).toArray(function (error, result) {
        console.log(result)
    })
}

function FindAllDataByLimit(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    MyCollection.find().limit(20).toArray(function (error, result) {
        console.log(result)
    })
}

function FindAllDataBySort(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    var SortPattern = { roll: -1 }

    MyCollection.find().sort(SortPattern).toArray(function (error, result) {
        console.log(result)
    })
}

function UpdateMyData(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    var MyCollection = MyDatabase.collection('table_name');

    var MyQuery = { roll: "4" };
    var MyNewValues = { $set: { name: "Rabbil Hasan Rupom", city: "Gaibandha" } }

    MyCollection.updateOne(MyQuery, MyNewValues, function (error, result) {
        console.log(result);
    })
}

function CreateMyCollection(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb");
    MyDataBase.createCollection("teachers", function (error, result) {
        console.log(result);
    })
}

function DeleteMyCollection(MyMongoClinet) {
    var MyDatabase = MyMongoClient.db("node-mongodb-test");

    MyDataBase.dropCollection("teachers", function (error, result) {
        console.log(result);
    })

}