Event Loop 

1. In libnv event loop , call back queue.
   - the asyc task will excute in libuv.
   - the task of callback fn are placed in differnet queue.
   - Each task will perofrom their task.
   - The Event Loop checks the  call srack is emty then only push callback into the callstack.

2. Event Loop (IMP)
  - Their is Priority cycle In Event loop.
  - Timer => pool => checks => close
  - Time settimout , setitarval ,all timer 
  - pool -> api call , i/p task , file reading most of the task is their
  - checks -> In that have the setImmedate timer
  - close - closing realetd task , closing file etc.
  
3. Inside cylce have the another cyle as procss.nextick , promisecallback().
 - Every Phase before it will check thse 1. procss.nextick , 2. promisecallback() priority.
 - if present then execute these then go to the goes to next phase.

4. file read take time to raeds that why its last exucte.
 the after the call stack , event loop empty then after finsing the file reading task 
 then it event loop will excute the file reading.
the event loop will finshed his work then it will go to the "pool phase"

5. their also more phases as the pending callback , prepare/ideal phase.
   - In pending callback -> In pool phase suppose no. of i/o task and if some of them no extued then it will excute next itration in pending callback.

    TICK -> ONE INTRATION ONE COMPLETE CYCLE

   - prepare/idael phase - it will mange by event loop.

   TIMER -> PENDING CALLBACK -> PREPARE/IDEAL -> POOL -> CHECK -> CLOSE 

 ┌──────────────────────────────────────────┐
 │          EVENT LOOP CYCLE (Main)         │
 └──────────────────────────────────────────┘
             ↓
   procss.nextick , promisecallback().
     ┌──────────────────┐
     │    TIMERS        │  (setTimeout, setInterval)
     └──────────────────┘
             ↓
    procss.nextick , promisecallback().
     ┌──────────────────┐
     │     POLL         │  (I/O, fs.readFile, API calls)
     └──────────────────┘
             ↓
 procss.nextick , promisecallback().
     ┌──────────────────┐
     │    CHECK         │  (setImmediate)
     └──────────────────┘
             ↓
 procss.nextick , promisecallback().
     ┌──────────────────┐
     │     CLOSE        │  (closing file/socket)
     └──────────────────┘
             ↓
          (loop repeats...)