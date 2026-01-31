How v8 engine will excute code
V8 Artitecture

These is spefic to V8 engine Archtecture it will differ to other Js Engine as FIREFOX , SPIDERMONKY ETC.

1. Parsing
   - Lexical Anlysis (Tokanization)- Code will broken down in small parts.
   - Syntax Parsing (Abstarct Syntax Tree)- it will convert taoken to sytax tree.
   - js will read toekn line by line
   - why sytax error - bause code will does not convert into the sytax tree.

Iterpeter - line by line excetion. then convert into byte code
compilation - whole code convert into Machine code then excetion.

2. - Js is Just In Time (JIT) -> Both complier + Interpreter
   - Parsing passed to Ingintion Iterpreter.
   - Then Ingintion Iterpreter COnvert into Byte code.
   - then it will passed into Excection ans starts execton.
   - When some code is repetdly used reptataion of code. we have to optimze that code.
   - Turbofan complier takes Hote code (Reptation code) and convert to Optimszed Machine code.
   - Perform optmization.
     Then it will passed inoto Excetion and starts Executon.
   - But Turbofan complier is makes asmation as ex -> fn passed parate as number called then next called that assum parametes are numebr only.
   - For sol: Turbofan complier Deoptimzation of code.
   - Turbofan complier passed into ingination interpreter and deoptimztion perfom.
     then passed into byte code and excetion.

Ovrall

1. Ingintion Iterpreter Noramal Flow.
2. Hot code opatimzation Turbofan complier
3. Deoptimzation.

4. Garbage Colleation - side by side Ingintion Iterpreter it will work. - Unsed parts it will garge collectiore
