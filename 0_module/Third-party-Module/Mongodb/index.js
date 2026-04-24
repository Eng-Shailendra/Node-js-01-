import mongodb from "mongodb";

async function connectDB() {

    // step 1 -- create a connection 
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");

    // step 2 -- to create database 
    let database = client.db("PRACTICE_DB");

    // step 3 -- to create collection
    let User = await database.collections("User");

}
