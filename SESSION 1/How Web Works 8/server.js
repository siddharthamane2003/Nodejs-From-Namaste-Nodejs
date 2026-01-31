let http=require("node:http"); // These is HTTP SEVER

let Server=http.createServer(function (req,res) {  // CEARTE SEVER
    if(req.url==="/GetRequestDat"){
        res.end("Their is no Security Data");
    }
    res.end("Hello World!")  // SEND THE RESPONCE TO CLIENT
})

Server.listen(7777) // PORT NO. WHICH FROM THAT IT WILL LISTNE.