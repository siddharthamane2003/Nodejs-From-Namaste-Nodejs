Connction Requset ->  /request/send/:status/:toUserId"
1. we have to sent a connection request to the toUser in the form of Intrested , Ingnore
- Crearte Schema for the status , to user , form User Id.
- craete api.
- The We have to Intilatae the Schema woth the SchemaModel.
- the staus must be dynamic bause we are only chage the staus

2. Validatuions ->
- Only The  Intrested , Ingnore are allowed. 
- toUser Only Allowed from database.
- Send Connection requestion only onces and no request frome the to UserId. $or
- pre -> “Before an event happens, run this function first.” ex -> before save the same passowrd chkec that user id does not sedt requsrt to self.

3. Index -> Search -> Without use of index MONGODB will take to time , serach.
         - with -> faster and MONDODV Will hadnle it/
            implemnt -> unique , index , sparse-index.
    Compound Index -> We are trying to query to time same feild then use compud index as asding , desing.

- $and => must be true all condition
    {
    $and: [
        { condition1 },
        { condition2 },
        { condition3 }
    ]
    }



Codde => 

let mongoose = require("mongoose");

let ConnectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["Accept", "Reject", "Ignore", "Interested"],
        message: "{VALUE} is an incorrect status type",
      },
    },
  },
  { timestamps: true },
);

ConnectionRequestSchema.index({fromUserId:1,toUserId:1})


// ConnectionRequestSchema.pre("save", function (next) {
//   let SentConnectionRequest = this;

//   if (SentConnectionRequest.fromUserId.equals(SentConnectionRequest.toUserId)) {
//      throw new Error("User Cannot Send Request to Yourself!");
//   }

//   next();
// });





let ConnectionRequestModel = mongoose.model(
  "ConnectionRequestSchema",
  ConnectionRequestSchema,
);

module.exports = { ConnectionRequestModel };




const  mongoose  = require("mongoose");
const { Authicatemiddleware } = require("../middleware/auth");

const express = require("express");
const connectionRounter = express.Router();

// connectionRounter.post("/sentconnectionRequest" ,Authicatemiddleware, async (req,res)=>{
//     res.send("Sent Connection Request!!")
// })

let { ConnectionRequestModel } = require("../models/connectionReqest");
const UserModel = require("../models/user");

connectionRounter.post(
  "/request/send/:status/:toUserId",
  Authicatemiddleware,
  async (req, res) => {
    try {
      let fromUserId = req.user._id;
      let toUserId = req.params.toUserId;
      let status = req.params.status;

      let AllowedStatus = ["Interested", "Ignore"];
      if (!AllowedStatus.includes(status)) {
        return res.status(400).send(`Invalid Sttaus Type: ${status}`);
      }

      if (!mongoose.Types.ObjectId.isValid(toUserId)) {
        return res.status(400).send({ message: "Invalid UserId" });
      }

      let validatetouserfromuser = await ConnectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (validatetouserfromuser) {
        return res.status(400).send("Invalid Request Sent");
      }

      let SentConnectionRequest = new ConnectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });

      let data = await SentConnectionRequest.save();

      res.json({
        message: "User Sent Connection Request",
        data,
      });
    } catch (error) {
      res.status(400).send("User Invalid Request");
    }
  },
);

module.exports = { connectionRounter };