console.log("Hello world");
var a = 1078698;
var b = 20986;

// Runs immediately when the call stack of the main thread is empty
setTimeout(() => {
    console.log("call me ASAP");
}, 0);

function mulFn(x, y) {
    const result = x * y;
    return result;
}

var c = mulFn(a, b);
console.log("multiplication result is: ", c);



// Hello world
// multiplication result is:  22637556228
// call me ASAP


// i will explain the code step by step : 
// 1. V8 engine will ecxute the syc code line by line 
// 2  whever see the ascy task then it will goes to libuv 
// 3. v8 egine after finsing their work it will ideal
// 4. in libuv perfom task asyc way. Each tsak placed in different queues.
// 5 . after finsheing task it will goes to the call stack for excetion.


//my qusetion is when libuv is excuet the asyc task then why agin v8 engine will exute it.??

//  Another Example: setTimeout
// setTimeout(() => console.log("done"), 2000);
// libuv counts 2 seconds
// then it says: “Timer done! Here’s callback!”
// V8 runs console.log("done")




