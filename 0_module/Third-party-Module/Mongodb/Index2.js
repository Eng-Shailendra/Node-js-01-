import mongodb from "mongodb";

async function connectiondb() {

    //step 1 --> create connect
    let client = await mongodb.MongoClient.connect("monogdb://localhost:27017")

    // step 2 --> create data base 
    let database = client.db("PRACTICE_DB_2");

    // step 2 --> ceate collection 
    let collation = await database.collections("USER");

}