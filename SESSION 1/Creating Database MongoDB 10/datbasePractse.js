
// const URL="mongodb+srv://siddharthamane2003:<db_password>@nodejsmongodb.0rxenn0.mongodb.net/?appName=NodeJsMongoDB";
let url="mongodb+srv://siddharthamane2003:S9mQx72LkFZP4HcW@nodejsmongodb.0rxenn0.mongodb.net/testdb?appName=NodeJsMongoDB";
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(url);

// Database Name
const dbName = 'DatBaseOne';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('CollectioTwo');

  //Read

    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    

    // // Insert
    // let data1={
    //     col:"White",
    //     rollNo:10,

    // }

    let data2={
        col:"White",
        rollNo:10,
        djbhd:"kjn"
        
    }
    
    
    // const insertResult1 = await collection.insertOne(data1);
    // console.log('Inserted documents =>', insertResult1);

    const insertResult2 = await collection.insertMany([data2]);
    console.log('Inserted documents =>', insertResult2);

    // Update Many or One
    const updateResult = await collection.updateMany({col:"White"}, { $set: { col: "Gray" } });
    console.log('Updated documents =>', updateResult);

    // Delet Many ot one

    // const deleteResult = await collection.deleteMany({ col: "Gray" });
    // console.log('Deleted documents =>', deleteResult);


    // Read , Insert , Update , Delete , count ,find no.

    let countResult=await collection.countDocuments({});
    console.log("Count of Doucmen",countResult)
 
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())