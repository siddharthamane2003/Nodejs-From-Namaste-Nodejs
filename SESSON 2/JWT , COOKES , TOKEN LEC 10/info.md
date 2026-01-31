- when we are login to any application then apllication must be validested.
  we have to do authitication.

- when we are login to any application then apllication server will validate  genrate token and attched to the cookies.
- these cokkies are sent back to the broser and it will be validsted. and storted
- when we are do anothr api these token will be sent and broswer will validate and sent then agin we are validte the cokkes.
- when cokies are fails -> cokkies have the duartion in time so these limited time
- but many app have the logn lasting time durations.

code :

let cokkiesparser=require("cookie-parser")
app.use(cokkiesparser());

We are send the cokkies agter validation

if(match){

     we have to get the cokkes in the two parmater beolw
      let cokkies=res.cookie("cokkes","ajcvdajhyvcdaucdagbckdabckuhbkcujak");
        sent cokkkies
      res.send(cokkies)
      res.send("Login Successful!");
    }

// we have to use it 
// for that we have to use the libary as the cokke-parser that use to read the cokkie
if the nomar print the cokies themn undifed 
app.get("/profile", async (req, res)=>{
  let ReadCookies=req.cookies
  // we Cannot Read Dirstly Cokkieis we have to parse
  // npm i cookie-parser
  console.log(ReadCookies.cokkes)

  res.send("Read Cokkies")
})

npm install jsonwebtoken
we have to validate the token.
so for that jwt-> JSON WEBPACK TOEKN -> IT WILL GENRATE THE TOKESN
- THESE IS ENCRTPTED HASH.
- SO CRAETING THE TOKE AND VALIDATE THAT PACKGAE IN NPM AS THE jsonwebtoken
we have to install 

1. we have to create toekn and pass into the cokkes 
 // 3️⃣ Create JWT
    const token = jwt.sign(
      { _id: user._id },
      "DEVTINDER@23304"
    );

    // 4️⃣ Store JWT in cookie (STRING only)
    res.cookie("token", token);

2. then verfiy the token

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, "DEVTINDER@23304");
    const user = await UserModel.findById(decoded._id)

    // 3️⃣ Send response
    res.status(200).json({
      message: "Profile Accessed",
      userId: decoded._id,
      user
    });

4. MidlleWare Authication
- In now we are only validat the profile and login  , sigup
- but next onwords we are not validating for these IMP.
- for the we have use MidlleWare Authication.
- it wokrs like the midlleware.
- the token validate , verfiy token , find user , validste user then 
- update user to req.
- send the user 
- call next()
- exdport the authicate to the and use inot the profile
 


let UserModel = require("../models/user.js");
let jwt = require("jsonwebtoken");

let Authicatemiddleware = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      throw new Error("Token Invalid!!!!!!!");
    }

    let encodedObj = await jwt.verify(token, "DEVTINDER@23304");
 
    let { _id } = encodedObj;

    let user = await UserModel.findById(_id);

    if (!user) {
      throw new Error("User Not Found!!!!!!!!!");
    }

    req.user = user;

    next();

  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports={Authicatemiddleware};


Authication Middleware is imp bause if third person they are trying to login 
then with help of middlaere it will does not login bause it will not conation gthe token.

we can use any to validate.


- we also expire the token and cokkes deped on the applaiction
- we have must expre the token and cookkes.
- tokne => expireId="0d" immeadty has created it will refuses "1d"
- cokkes -> {expires: new Date(Date.now() + 8 * 3600000)}

Redable Code 
- when we are crating the token these hard coded.
- with help of the schema method we can solve these.
- put into it and the use thse in User.