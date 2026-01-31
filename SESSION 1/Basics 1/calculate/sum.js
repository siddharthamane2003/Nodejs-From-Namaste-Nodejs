console.log("Sum Is Excuted");

let x=10;

function sumofnum(a,b) {
        let sum=a+b;
        console.log(sum);
} 

// 2. module.exports=sumofnum    only fn


// 3. fn + varbile

// module.exports={
//         sumofnum:sumofnum,
//         x:x
// }

// 4.

//module.exports={sumofnum,x}

//console.log(module.exports) // these is {} object
// ES Module

// export function sumofnum(a,b) {
//         let sum=a+b;
//         console.log(sum);
// }

// module.exports.x=x;
// module.exports.sumofnum=sumofnum



module.exports.sumofnum=sumofnum