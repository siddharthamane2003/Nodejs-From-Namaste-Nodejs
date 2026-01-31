let mongoose=require("mongoose");


// Define the scheam in that we have the deinations.

let DummySchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    emailId:{
        type:String
    },
    gender:{
        type:String
    },
    age:{
        type:Number
    }
})

// Model ->it will create the instances

let DummyUser=mongoose.model("User",DummySchema);
module.exports=DummyUser

// module.exports=mongoose.model(UserShcema)