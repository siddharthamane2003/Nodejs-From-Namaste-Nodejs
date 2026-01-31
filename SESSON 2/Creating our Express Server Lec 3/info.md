1. Installtion -> 1. npm init

2. create server for use express.js
   install express -> npm i express. dowolad the express js and it will imported in nodule module. we can use in project.

- dependices -> our project will depedn on the express package.
- expess dependacis will also depedn on the depencies.

3. version -> 4.19.2 4-> major , 19 -> minor , 2 -> patch. ^ , ~ , extact. path ,minore , major update.
1. app.listen(2010,()=>{
   console.log("Sever is Sucesfully listing on port 2010")
   }) //listent the resqiests
   
listen -> it will get/listen the requset from the server.

app.use("/hello",(req,res)=>{
res.send("Hello From Server")
})
app.use (req , res) -> it is Request Hadler , what we have to send the resoce.
it will run in port numbe as 2010
but if we want to spefic api . as /hello

we are conitnly re-runnign the code sol: install the nodemon. and write in terminal as the "nodemon" src/app.js.
if we do chages it autmaticly save do not re-excute./refersing

but if we waqnt use the npm run dev the we have to
"start": "node src/app.js", these for node
"dev": "nodemon src/app.js" thse for nodemon