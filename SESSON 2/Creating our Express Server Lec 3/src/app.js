let express=require("express");
let app=express();

app.use("/test",(req,res)=>{
    res.end("Hello Bacdacsasr ka")
})
app.use("/hello",(req,res)=>{
    res.end("Hello sdvdsvdv")
})


app.listen("1000",()=>{
    console.log("Server is Listing Port 1000")
})