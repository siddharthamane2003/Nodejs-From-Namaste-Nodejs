const express = require("express");
let app = express();

// js will excetion call stack ,excetion conetxt
// Nested Rooutes

// at one time reqet and send responce.
// next() for go to the next req.
// next() they are expedcting the req , res.
// Array represting
// another way of routing.
// middleware -> these testin/chaing requet and use.
// requesry hadnle -> result
// why wew need -> wrtign athucate eaxh time , we are user one and re-use agin.

// the express js will chedck the fisrt mathced routes and retrun the resonce

// when we do not use the end menas do not pass the responce it will wait only  nothing. console
// app.use("/client", (req, res) => {
//   console.log("Kay Mag")
// });

// correct way
// app.use("/client", (req, res) => {
//   res.send("correct ahe")
// });

// it will not work beacie of order of exection listn and send the res.
// at one timer requet and one responce

// app.use("/client", (req, res) => {
//  res.send("Correct ahe")
// },(req,res)=>{
//     res.send("He pan zal pahije")
// });

// it will wait of 1st res beaice express does not excute by its own.
// still wait
// app.use("/client", (req, res) => {

// },(req,res)=>{
//     res.send("He pan zal pahije")
// });

// next() for go to the next req
// Order of Exection matter
// but it will not go beauce of one rount will at one time handle only one request
// it will go to the 2nd reqaurt but the 1st only also pass req
// erro  Cannot set headers after they are sent to the client

// app.use("/client", (req, res,next) => {
//      res.send("Correct Ahe")
//     next()
// },(req,res)=>{
//     res.send("He pan zal pahije")
// });

// in below 2nd will excute but it will gives the error as the 1st will send the resqut go to call stack.
// erro Cannot set headers after they are sent to the client
// app.use(
//   "/client",
//   (req, res, next) => {
//     next();
//     res.send("Correct Ahe");
//   },
//   (req, res) => {
//     res.send("He pan zal pahije");
//   }
// );

// 1st req  not next goes  and then it will goes to the 2nd req print it
// then goes to next() are expeccting to get the req that erro Gives

// app.use(
//   "/client",
//   (req, res, next) => {
//    // res.send("Correct Ahe 1 ");
//     next();
//   },

//   (req, res, next) => {
//      res.send("He pan zal pahije 5 ");c
//     console.log("kcbdajkda")
//     next();
//   }
// );

// we can pass inot array.
// pass the re2 then mian not also work

// app.use(
//   "/client",
//   [(req, res, next) => {
//     res.send("Correct Ahe 1 ");
//   },

//   (req, res, next) => {
//     // res.send("He pan zal pahije 5 ");c
//     console.log("kcbdajkda");
//   },
//   (req, res, next) => {
//     // res.send("He pan zal pahije 5 ");c
//     console.log("4");
//   },
//   (req, res, next) => {
//     // res.send("He pan zal pahije 5 ");c
//     console.log("6");
//   }]
// );

// In Nesting/Chaing the routes all chaing the requet are the middlerWare and match the requet is called Route hanler

// these also correct way of writing
// app.get("/client",(req,res,next)=>{
//    // res.send("Hi Bri..ghhjj.....") // middlee ware
//     next()
// })

// app.get("/client",(req,res,next)=>{
//     res.send("Hi Bro....fghjk...") // correct req hanlder
// })

// use vs all
// | Point        | `app.use()`                                              | `app.all()`                                                   |
// | ------------ | -------------------------------------------------------- | ------------------------------------------------------------- |
// | **Purpose**  | Used for **middleware** (auth, logging, parsing, etc.)   | Used for **routes** that match **all HTTP methods**           |
// | **Behavior** | Runs **before** the final route (can pass with `next()`) | Sends **response directly** (doesn’t need middleware pattern) |

// use → for middleware
// all → for routes handling all methods

// Authitication -> Verfiy users , verification. handle the authicate middleware

// let { authicate } = require("../middleware/authicate");

// app.use("/client", authicate);

// app.use("/client/getuser", (req, res) => {
//   res.send("User Data !!");
// });

// app.use("/client/adminpage", (req, res) => {
//   res.send("Admin Page  Data !!");
// });

// let { userAuthicate } = require("../middleware/authicate.js");

// app.use("/user", userAuthicate);
// specific also use the Authitication.

// app.use("/user/userpage", userAuthicate, (req, res) => {
//   console.log("User Page");
//   res.send("User Page");
// });

// app.use("/user/userlogin", userAuthicate, (req, res) => {
//   res.send("User Login Page");
// });

// app.post("/user/test", (req, res) => {
//   res.send("hello from simple server");
// });

// Error Hadling

// If api have the issue then we have to handle it.
// in "/" ity will hadle it.
// order maater of err,req,res,next

// app.get("/getuser",(req,res)=>{
//     throw new Error("jgggjgjv")
// })

// app.use("/",(err,req,res,next)=>{
//     if(err){
//         console.log("Error::")
//         res.status(500).send("Somthing went Wrong.")
//     }
// })

// if the sepecifc erro then it will handle it in try catch block

app.get("/getuser", (req, res) => {
  try {
    throw new Error("Something Went Wrong!");
  } catch (error) {
    // res.send("User Data Sent!!")
    console.log(error);
    res.status(500).send(error.message);
  }
});

// if we dont write any try cathc globally hnadle it.
// order matter.
// aqlwaus erite the sepcic and then next global

app.use("/", (err, req, res, next) => {
  if (err) {
    console.log("Error::");
    res.status(500).send("Somthing went Wrong.");
  }
});

app.listen("3000", () => {
  console.log("Hi bro....");
});
