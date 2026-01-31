let express = require("express");
const DummyUser = require("./model/user");
let app = express();

connectDB = require("./config/database");

// Api for the send data to dabase we ahve to use the post
// created the dummy object must schme deinfination same to dummy objec.
// import model with helop of that craet the instancess.
// the save() use and that will be save into  datbse.
//error hanlinfg trycatch blcok

app.post("/sigunpdummy", async (req, res) => {
  let dummyObj = new DummyUser({
    firstName: "Akash",
    emailId: "askash2023@gmail.com",
    gender: "Male",
  });

  console.log("Dummy Instred");
  try {
    await dummyObj.save();
    res.send("DatBase Dummy User Instred@!");
  } catch (error) {
    console.log("Erro");
  }
});


connectDB()
  .then(() => {
    console.log("DatBase is Connected");

    app.listen("1000", (req, res) => {
      console.log("Listen Port:1000");
    });
  })
  .catch((error) => {
    console.error("Error in Datase");
  });
