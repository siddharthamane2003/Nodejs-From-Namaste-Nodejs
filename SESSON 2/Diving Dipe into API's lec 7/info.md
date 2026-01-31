HM-> json vs js Object
| Feature | JSON                                  | Object                                |
| ------- | ------------------------------------- | ------------------------------------- |
| Nature  | Data format (string)                  | Data structure (in-memory)            |
| Usage   | Used for data transfer/storage (APIs) | Used for program logic & manipulation |


1. Dymaic data pass into Datbase

  pass the Dynmaic Data and pass into Datbase In Postaman in body in raw in json pass craete the data
  console.log(req); it will give the whole reqsut
  console.log(req.body) // error  undiefied
  buase the in postam these is json and we have to convert into object. for the resdablity.
  sol: express json -> json to object convert in app.use middleware
  it will work all rountes and also all http methods

  expres.json() it wil acess the json and convet into the object and with help of middleware it will works for all riutes
  these will pass into the body.
  we are creating the dumaic instaces of UserModdel.

  res.body->Instances
  UserModel -> Model
  app.use => Middl Ware
  express.json() -> These libary of express to convet json to object
    {
    firstName: 'Kalpesh',
    lastName: 'Patil',
    emailId: 'kalpeshpatil2001@gmail.com',
    password: 'Kalpesh@2003',
    _id: new ObjectId('696c6850d313b6d87dd8679a')
  }


  
  const UserObj=new UserModel(req.body);
  console.log(UserObj)
  try {
    await UserObj.save(); // UserObject will save to Databse
    res.send("User Added Sucsflluy!");
  } catch (error) {
    res.status(400).send("User Not Created DatBase");
  }
  
2. Get by Id, name 
- all user
- delete , update

app.use(express.json());

app.post("/signup", async (req, res) => {
  // pass the Dynmaic Data and pass into Datbase
  // 1. In Postaman in body in raw in json pass craete the data
  // console.log(req); it will give the whole reqsut
  // console.log(req.body) // error  undiefied
  // buase the in postam these is json and we have to convert into object. for the resdablity.
  // sol: express json -> json to object convert in app.use middleware
  // it will work all rountes and also all http methods

  // expres.json() it wil acess the json and convet into the object and with help of middleware it will works for all riutes
  // these will pass into the body.
  // we are creating the dumaic instaces of UserModdel.

  // res.body->Instances
  // UserModel -> Model
  // app.use => Middl Ware
  // express.json() -> These libary of express to convet json to object
  // Dymianc Data
  //   {
  //   firstName: 'Kalpesh',
  //   lastName: 'Patil',
  //   emailId: 'kalpeshpatil2001@gmail.com',
  //   password: 'Kalpesh@2003',
  //   _id: new ObjectId('696c6850d313b6d87dd8679a')
  // }

  const UserObj = new UserModel(req.body);
  console.log(UserObj);
  try {
    await UserObj.save(); // UserObject will save to Databse
    res.send("User Added Sucsflluy!");
  } catch (error) {
    res.status(400).send("User Not Created DatBase");
  }

  // Hard Coded
  // 2nd way
  // const UserObj = new UserModel({
  //   firstName: "Akshay",
  //   lastName: "Saini",
  //   emailId: "akshay@gmail.com",
  //   password: "askay@2003",
  // });

  // // craeting the new instance from the UserModle
  // let user=new UserModel(UserObj); one way
  // try {
  //   await UserObj.save(); // UserObject will save to Databse
  //   res.send("User Added Sucsflluy!");
  // } catch (error) {
  //   res.status(400).send("User Not Created DatBase");
  // }
});

// Get the ALL Users from the Databse using feed api.
// Means After sigup i have exlpre the pages that why all usres i exoplore

// 1st Intially we can get the users by emailId
// in Schema emailid as same as the compass.
// then using find() we are getting all user thaat match with emailId.
// trycath black. if useremail is wrong then it will retrun [] that we have to handle.

// Find Only One User
// FindOne()-> findOne() returns an arbitrary matching document unless a sort() is specified; index or no index, the order is not guaranteed.

app.get("/user", async (req, res) => {
  let UserEmailId = req.body.emailId;
  // let Users=await UserModel.find({emailId:UserEmailId});
  let Users = await UserModel.findOne({ emailId: UserEmailId });
  try {
    if (Users.length === 0) {
      // it will retrun the arry if usrer nit prestn then [] means leght =0
      res.status(404).send("User Not Found");
    } else {
      res.send(Users);
    }
  } catch (error) {
    res.status(404).send("Somethig went wrong..");
  }
});

//Get User By id
app.get("/username/:id", async (req, res) => {
  const { id } = req.params; // it give the url data (id)
  const user = await UserModel.findById(id);
  res.send(user);
});

//get By Name
app.get("/firstName", async (req, res) => {
  let firstname = req.body.firstName;
  let UserByName = await UserModel.findOne({ firstName: firstname });
  res.send(UserByName);
});

// With No filetrt {} we have to get the all users from Database

app.get("/feed", async (req, res) => {
  let AllUsers = await UserModel.find({});
  try {
    res.send(AllUsers);
  } catch (error) {
    res.send(404).send("Someting went Wrong!");
  }
});

// Delete User By Id
app.delete("/user", async (req, res) => {
  let UserID = req.body.UserID;
  try {
    // let user=await UserModel.findByIdAndDelete(UserID)
    let user = await UserModel.findByIdAndDelete({ _id: UserID });

    res.send("User Deleted Sucessfly");
  } catch (error) {
    res.send(404).send("Someting went Wrong!");
  }
});

// Update User by Patch
// In that findByIdAndUpdate == findByOneAndUpdate
// findByIdAndUpdate ->take the id and update another will udate other paramtes

app.patch("/user", async (req, res) => {
  let userid = req.body.userid; // takes the userId
  let data = req.body; // passinf Data

  let user = await UserModel.findByIdAndUpdate({ _id: userid }, data);
  //let user=await UserModel.findByIdAndUpdate({_id:userid},data,{returnDocument:"after"})

  // before = old Responce
  // after = updated Responce

  try {
    res.send("Updated Suceffluuy");
    console.log(user);
  } catch (error) {
    res.status(404).send("Somthing went wrong!");
  }
});

connectDB()
  .then(() => {
    console.log("Database Connection Established");
    app.listen(2010, () => {
      console.log("Sever is Sucesfully listing on port 2010");
    }); //listent the resqiests
  })
  .catch((err) => {
    console.error("DataBase cannot be connetced");
  });

// app.listen(2010, () => {
//   console.log("Sever is Sucesfully listing on port 2010");
// }); //listent the resqiests
