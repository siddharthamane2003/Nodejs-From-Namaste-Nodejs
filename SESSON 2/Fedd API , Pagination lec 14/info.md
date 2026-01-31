/feed => Show The Profiles

1. we want profle not visted or anyone will our visted.
- hide the user or yourself that sent the connectuons
- Set will give the Unique intems of Obejct.

2. expect the our profile and visted profile will not on feed.
- using nin => not in array , ne-> not value


UserRounter.get("/feed",Authicatemiddleware,async (req,res)=>{
  let loogedUser=req.user;

  let connections=await ConnectionRequestModel.find({
    $or:[
      {fromUserId:loogedUser._id},
      {toUserId:loogedUser._id}
    ]
  }).select("fromUserId toUserId")


  const hideUserFromFide=new Set();

  connections.forEach((req)=>{
      hideUserFromFide.add(req.fromUserId.toString()),
      hideUserFromFide.add(req.toUserId.toString())
  })


// $nin → value should not be inside the given list
// $ne → value should not be equal to this one value
// select -> select fields

  let Users=await UserModel.find({
    $and:[
      {_id:{$nin:Array.from(hideUserFromFide)}},
      {_id:{$ne:loogedUser._id},}
    ]
  }).select(USER_SAFE_DATA)

  res.send(Users)
})


Pagination -> we want only the 10 user at one time

Params → part of URL path (/user/:id) → identifies resource
Query → after ? (/users?page=2) → filters or options

page =1 and limit 10 so 1 to 10
page 2 and lomit 10 so 11 to 20
skip page-1*limit 

page 4 lmit 10
skip =4-1*10 => 30 skips  pages of prole and give me that 31 to 40 
but huge data so data must be the limit 50> then 50 else lmit\