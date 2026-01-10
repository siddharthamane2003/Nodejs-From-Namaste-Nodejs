let name="Namaste Node Js";

let a=10;
let b=10;
console.log("Hello",a,b,name);

console.log(global) // Global Object these is not part of V8 engine and Broiswer
// these is super power as settimeout , claeresetimeoti etc.

console.log(this) // these is Empty Object these will not point to Global Object.


console.log(globalThis)