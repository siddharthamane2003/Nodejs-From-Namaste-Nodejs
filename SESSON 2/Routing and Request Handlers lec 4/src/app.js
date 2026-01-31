const express = require("express");
let app = express();

// app.use("/", (res, req) => {
//   req.end("Hi bro......rsfgrss");
// });

// app.use("/test", (res, req) => {
//   req.end("Hi broefefefef...............");
// });

// app.use("/test12", (res, req) => {
//   req.end("Hi bro");
// });


// get method -> get the data from databse
// app.get("/user",(req,res)=>[
//     res.send({name:"Siddhart",roono:90})
// ])

//  post method -> send data to datbase
// app.post("/user",(req,res)=>{
//     res.send("Data Sucessfllly Sent...")
// })

//  Delete Data from DataBase
// app.delete("/user",(req,res)=>{
//     res.send("DELETED SUCESFLLY..")
// })

//  Patch -> update the data inot datbse
// app.patch("/user",(req,res)=>{
//     res.send("Update Data Base Susflly......")
// })

// thse all times runs
// app.use("/user",(req,res)=>{
//     res.send("Hbofvpeofbrb")
// })

// b is optionaol
// app.use("/ab?c",(req,res)=>{
//     res.send("hi.......")
// })

// a must b one and more than one and c is last
// app.use("/ab+c",(req,res)=>{
//     res.send("hi.......")
// })

// ab betwene any end c
// app.use("/ab*c",(req,res)=>{
//     res.send("hi.......")
// })

// /a/ the  anything
// app.use("/a/",(req,res)=>{
//     res.send("hi.......")
// })

// http://localhost:2000/abc?name=Siddharth  -> get the name using query
// req.query

// app.use("/abc",(req,res)=>{
//     console.log(req.query)
//     res.send(`Hello ${req.query.name}`);

// })

// Dymainc url as name  ,id , : dyamic

app.use("/abc/:name", (req, res) => {
  console.log(req.params);
  res.send("Hiii bro...");
});

app.listen("2000", () => {
  console.log("Hi bro....");
});

// Routing: "Routing determines how an application responds to a client request at a specific endpoint (URL) and HTTP method."
// Request: "A request is the message sent by the client to the server, containing information like URL, method, headers, and data."