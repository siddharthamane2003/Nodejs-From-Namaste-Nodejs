API's

AUTHROUNTRE

- POST /SIGNUP
- POST /LOGIN
- GET /LOGOUNT

PROFILERONUTER

- GET /PROFILE/VIEW
- PATCH /PROFILE/EDIT
- PATCH /PROFILE/PASSWORD

CONNECTIONREQUESTROUNTER

- POST /REQUEST/SEND/INTRESTED/:USERID
- POST /REQUEST/SEND/IGNORE/:USERID
- POST /REQUEST/REVIEW/ACCSPTED/:REQUESTID
- POST /REQUEST/REVIEW/REJECTED/:REQUESTID

USERROUNTER

- GET /USER/REQUEST/RECVIED
- GET /USER/CONNECTIONS
- GET /USER/FEED - GET THE ALL PROFILES OF USERS

STATUS : IGONRE , INTSRESTED , ACCPTED , INTTRSETED , REJECT

ROUNTER - SAME AS IN REACT ROUNTER GROUP THE API AND USE FOR THE DEV REDABLITY.

- EXPLORE THE APPLCIATION API FOR THE API NAMING CONVETION.


in exress the rouneter make differnt router as the auth , profile , connection routers
then import into the app.js and use with "/"

"/" use querfully it will do the line by line exction order matter remaimber.
check one by one api and sectuet it order matteer IMP.


logout api -> user will logout then cokkies will expire and toen will null.

-  /profile/edit",  Edit the Profile - only allowed the req.body in fn , update the req.body and req.user
-  "/profile/editpassword",  Edit Password