// Model

// IMP
// the all code of module is wrapped inside a function.
// that's why we have to acesss diratly as varble ,fn at the of require(..path)
// the function called IIEF (IMEDIALTY INVOKED FN)
// why these IIFE -> - It will IMEDIALTY invoked.
                   // - it will  Kepp coede , fn private.

// Q. How are varbles & fn provate in differnt module ?
// ans: IIFE , require stament


// Q . How do you get acess to mode.exports , require
// Node js passes paramter mode.exports , require in IIFE fn


// file.js will passes into node.js wrap into IIFE Fn node.js will passes parameter as
// mode.exports , require  then V8 engine will excute code.

// reuire("./path.js")

// 1. Resolving the Module -> Module Resolution: Node resolves the module path and determines the type of file (.js, .json, or .node). It also handles directory resolution like looking for index.js.
// 2. Loading Module -> Node loads the file from disk into memory, preparing it for execution.
// 3. Wraps inside IIFE -> all code will warp inside IIFE fn. and mode.exports , require paramrets 
// 4. Evalvaltion -> It will Evaliute code by V8 Engine and mode.export it will return the of code 
// 5. Cashing -> if every file have the  same requre("..path.js") thse will other files aslo same
// so node.js will only retrun the that file require("..path.js")


 