const fs = require("fs");
const a = 999;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", (err,data) => {
    console.log("data")
})

setTimeout(() => console.log("set timeout"), 0);

function printA() {
    console.log("a=" + a);
}
printA()
console.log("Last line of program")


// o/p-
// a=999
// Last line of program
// set timeout
// setImmediate
// data

// 1. line by line
// 2. setImmediate,setTimeout goes to the differnet callback quque.
// 3. o/p - 999 , last line of program'
// Call stack Is Empty.
// Cycle have first  procss.nextick , promisecallback().
// file is reading
// no then timer run -> o/p->setimeout
// then goies to the  procss.nextick , promisecallback(). no 
// the pool no.
// then Goes to // then goies to the  procss.nextick , promisecallback(). no 
// then check -yes -> setimmdte -> o/p- > setImmediate
//  then goies to the  procss.nextick , promisecallback(). no
// the close no
// then file is reading is finshed the come to quque
// then excuet o.p-> data
