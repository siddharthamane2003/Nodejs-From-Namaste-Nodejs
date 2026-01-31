// 1. Combine one module(file) into another module using require.
// 1st the reuqure file run then code will run.

// 2. Module are defalut protected their varbile and fn not dirtly using requier
// sol: export and import fn . {IMP}

// we cannot  acess file inside varble and fn wiothout export and import these
// called COMMON JS MODULE as export , requre()

// 3. we can also pass the mutiple , funtion to another export thow the object

// 4. Destrcting direatly

// wihout .js exting alos run the file code

// const sumofnum = require("./sum.js"); only fn

//const obj = require("./sum.js")

//const {sumofnum,x} = require("./sum.js") // Destrucring

//require("./xyz")

let name = "Namaste Node Js";

// let a=10;
// let b=10;

console.log("Hello", name);

//console.log(global) // Global Object these is not part of V8 engine and Broiswer
// these is super power as settimeout , claeresetimeoti etc.

console.log(this); // these is Empty Object these will not point to Global Object.
//console.log(globalThis)

let a = 40;
let b = 50;

//sumofnum(a,b) 2.

// 3. fn + varible
// obj.sumofnum(a,b);
// console.log(obj.x)

// 4. Destrcuting
// sumofnum(a,b);
// console.log(x)

// 5. ES Module (EJS)

//import { sumofnum } from "./sum.js";
//sumofnum(a,b)

// 6. ES Module is new Module but the In Idustry we can use the Commom js module
// when we use then es module in pachage.json we have type : module
// ans deafu in non-script mode it will be the common mode
// 7. common js module The is Syncronus and ES Module are avbile Asyc
// In common is non strict mode and es module in strict mode
// How we can test in in common js module with declrae varible we can run but in es module not work.

// module.export -> {} object

// 8. module.exports.x=x;
// module.exports.sumofnum=sumofnum

// Nested Module

// let { mutlyplie } = require("./calculate/mutliply.js");
// mutlyplie(a, b);


// Create Grupo file as module 
// 1. each file exprots then make imposrt and export in buch 
// 2. acess in any file


let {mutlyplie,sumofnum}=require("./calculate/index.js")

mutlyplie(10,20)
sumofnum(20,30)


// Josn file import
let data=require("./data.json");
console.log(JSON.stringify(data));
console.log((data));