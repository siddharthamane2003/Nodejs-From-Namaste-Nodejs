// monohgooes are used to connect the cluet
// add the datvase in url
// we have to Crated Databse amd then api calling. vice vaers have the iuuses.

let mongoose=require("mongoose");

let connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://siddharthamane2003:U76nrRVAQj6xWmZp@nodejsmongodb.0rxenn0.mongodb.net/DummyUser?appName=NodeJsMongoDB")
}

module.exports=connectDB;