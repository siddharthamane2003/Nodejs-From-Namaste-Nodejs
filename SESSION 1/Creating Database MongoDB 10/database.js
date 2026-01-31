// 1. Connect Node To MongoDB write password in <>.
// 2. pascode of web site node in https://mongodb.github.io/node-mongodb-native/6.8/.

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
  const collection = db.collection('CollectionOne');

  // Read the document/collectiom from the mongodb
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
 
  // Insert Many Documents into the MonoDB
    let data={
      rollNo:"20930",
      color:"Gren",
      Theme:"Dark",
      Gender:"Female"
    }


  //   const insertResult = await collection.insertMany([data]);
  //  console.log('Inserted documents =>', insertResult);

  //   Count the collection / doumnets
    // let countResult=await collection.countDocuments({});
    // console.log("Count of Doucmen",countResult)

    // find all doc with filter of color: "Red"

   let result = await collection.find({ color: "Red" }).toArray();
   console.log("Result:", result);

   // Insert One Document
  const insertResult = await collection.insertOne(data);
   console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());