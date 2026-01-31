const crypto = require("node:crypto")
const { stringify } = require("node:querystring")

console.log("Program started")

//pbkdf2- Password based key derivative function version-2 

//This is an synchronous function of pbkdf2 which will block the main thread and these type of synchronus functions does not have any callback functions
crypto.pbkdf2Sync("akshumint999", "salt", 5000000, 20, "sha512");
console.log("Fist synchronous key is generated ")

//Asynchronous function
crypto.pbkdf2("akshumint999", "salt", 50000, 20, "sha512", (err, key) => {
    console.log("Below is the asynchronous key of your password")
    console.log(key)
})

function addition(x, y) {
    const result = x + y;
    return result;
}

var c = addition(5, 10);
console.log("Addition is: " + c)




// op: 
// Program started
// Fist synchronous key is generated 
// Addition is: 15
// Below is the asynchronous key of your password
// <Buffer 63 de 36 3c 0a b4 0c 44 06 6d 46 8d b4 73 e5 c2 84 e9 a3 bb>


// pbkdf2Sync these is asyc task but it is syc way of writing.
// it will balck the main thread till the their excetion.
// 1. the v8 engine will excute. does not matter how many times it will takes.
// 2. then v8 engine will excute the normal process it will excute the scy task then asyc task
// Does not use the pbkdf2Sync these funtions. beause it will blcok main thred