let authicate=(req,res,next)=>{
    let token = "bc";
    let Authiticated = token == "bc";
    if (!Authiticated) {
      res.status(401).send("Unacuthorsied request");
    } else {
      console.log("ASuthicxtyed Sucesffly");
      next();
    }
}

let userAuthicate=(req,res,next)=>{
    let token="pqr";
    let isAuthicated=token==="pqr";
    if(!isAuthicated){
        res.status(401).send("UnAuthicated");
    }
    else{
        next();
    }
}


module.exports={
    authicate,userAuthicate
}