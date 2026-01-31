const fs = require("fs");

setImmediate(() => console.log("1st setImmediate"));

setTimeout(() => console.log("1st timer"), 0)

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt", "utf-8", (err, data) => {
    setTimeout(() => console.log("2nd timer"), 0)

    process.nextTick(() => console.log("2nd Process.nexttick"))

    setImmediate(() => console.log("2nd setImmediate"));

    console.log(data);
})


process.nextTick(() => console.log("1st Process.nexttick"))


console.log("last line of program")



// why beauce 2nd setimmedae 2nd timer beacause of the the current pahse is pool phase it will goes to immaget phase then timer

// alwys tries to pen and paper.