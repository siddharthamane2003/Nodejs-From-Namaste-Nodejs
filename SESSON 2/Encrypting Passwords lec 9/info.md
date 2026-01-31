Password Secuty
No Other Will Be Update , see the password

- 1. we have to valid the data
- 2. Extract the Data From the body
- 3. encry the password
- 4. save to the database

let validator=require("validator");

let ValidatorFn=(req)=>{
let {firstName,lastName,emailId,password}=req.body;

    if(!firstName || !lastName){
        throw new Error("Name is Invalid")
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email is Invalid")
    }
    else if (!(validator.isStrongPassword(password))){
        throw new Error("Password is Invalid")
    }
}

let {firstName,lastName,password,emailId}=req.body;

module.exports={ValidatorFn};

that are exproia and import in app.js and use in body

Extrac the body

let {firstName,lastName,password,emailId}=req.body;

bcrypt is npm packge fot the incrypt the password for pass the arument and 2nd no.of time of ecyrption
More numer take time to encrtyp.

then pass the data with HashPassword in as intance in UserMode
save to Databce

Login Api

app.post("/login", async (req, res) => {
try {
// It will takes the EmailId , password
const { emailId, password } = req.body;

    // We have to find the user by emailId
    const user = await UserModel.findOne({ emailId });
    // if their is no user that not presnt from the EmailId
    if (!user) return res.status(404).send("Email Not Found");

    // Then compre with plaintext and encrypted password
    const match = await bcrypt.compare(password, user.password);
    // if not match throw error
    if (!match) return res.status(401).send("Invalid Password");
    // Send login Sucesflly

    res.send("Login Successful!");

} catch (err) {
res.status(500).send(err.message);
}
});
