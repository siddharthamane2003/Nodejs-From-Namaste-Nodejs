Think Gaurd GET VS POST
MUST VALIDATE THINKING.

1. /request/review/:status/:requestId


After Sending Requset To Recivser We Then Reciver will be Accept or Reject.
- loggoed is must be touser , requst id in DB.
- Validations.

a sent intresnt to b
b will log 
b in qusru pass the requsrt id that are same as the touserid


after sending reqsut to user.
we have to handle touser.
touser we loging thhen it will acespt or reject.

requst id musrt in database and touserid.
Connection Request Review API
Short Working

User must be logged in

Gets status and requestId from URL

Allows only Accept or Reject

Validates request ID

Checks request belongs to user and is Interested

Updates status and saves

One Line

Accept or reject a pending connection request.



make rout of user -> get the all requsrt and conections.

2. /get/rquests/revieced

A sends request to B → status: "Interested"

B login and calls this API → gets all pending requests sent to them
B can see who sent the requests (fromUserId)

in that we only see the ide's not see the name of info abput the users
so we have to link to USER DB use the ref and poluate.(IMP) Link Database To USER.

- ref we have to that i wanted data in requst i want the FromUserId data0.



4. /user/connections -> the logges want all conection it can the yourself or other will acesspted.
- SO make the link to the User Data in Touser baise we want the both data.
- and i want only the from and to user data use map.






connectionRounter.post(
  "/request/review/:status/:requestId",
  Authicatemiddleware,
  async (req, res) => {
    try {
      const loggedUser = req.user;
      const { requestId, status } = req.params;

      let AllowedStatusByFromUser = ["Accept", "Reject"];

      if (!AllowedStatusByFromUser.includes(status)) {
        throw new Error("Stataus Inlvaid!!!!!!!");
      }

      if (!mongoose.Types.ObjectId.isValid(requestId)) {
        throw new Error("Reqest Id Invalid");
      }
      let toUser = await ConnectionRequestModel.findOne({
        _id: requestId, //Presnt In DB
        toUserId: loggedUser._id, // Touser Id
        status: "Interested", // Intesred
      });

      if (!toUser) {
        throw new Error("Sending User Invalid");
      }

      toUser.status = status;

      let data = await toUser.save();

      res.status(200).json({
        message: "Request updated successfully",
        status,
        data,
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);



UserRounter.get("/get/rquests/revieced", Authicatemiddleware, async (req, res) => {
    try {
        let loggedUser = req.user;

        let ConnectionRequestMo = await ConnectionRequestModel.find({
            toUserId: loggedUser._id,
            status: "Interested"
        }).populate("fromUserId", ["firstName", "lastName"])

        let data = await ConnectionRequestMo

        res.send({ message: "Data Sent Suceffly!!", data })

    } catch (error) {
        res.status(400).send(error.message)
    }


})


UserRounter.get("/user/connections", Authicatemiddleware, async (req, res) => {
    try {
        let loggedUser = req.user;

        let connections = await ConnectionRequestModel.find({

            $or: [
                { fromUserId: loggedUser._id, status: "Accept", },
                { toUserId: loggedUser._id, status: "Accept", }
            ]
        }).populate('fromUserId', 'firstName lastName')
          .populate('toUserId', 'firstName lastName');

        // let data = connections.map(row => row.fromUserId)
        // res.send(data);

        let data=connections.map(row=>{
            if(row.fromUserId._id.toString()===loggedUser._id.toString()){
                    return row.toUserId
            }
            return row.fromUserId;
        })
        res.send(data)

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});