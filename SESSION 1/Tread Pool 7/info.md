Tread Pool

1. some task/code will block our main thred/call stack.
  - sol: In libuv thred loop to mange these tasks.
  - it will takes and excute while intarcting with os.
  - Their pool size is 4.
  ex-> their are 4 task that will acuupy the 4 thred in thred pool.
       and new task in coming then one of them freeze and then new task will accupy thred till the new thred.
    thred-> it will accupu the thred in thred poll excute task and if it will blcok/frezze thred.
    
2. Most Imp Q -> Node js is Single or Multiple Threded ?
   ans : IT DEPENDS 
         if code is SYC THEN IT WILL SINGLE THRED.
         IN CODE HAVE THE CODE WHICH WILL BLOCK MAIN THRED LIKE LOOKUP,CRYPTO 
         THEN IT MANXGE BY THRED POOL.
        
3. We also Increse the size of thred pool process.env.UV_THREADPOOL_SIZE = sizenumber

4. if thir no.of api hit to server it cannot use the thred pool
   - In networking api hits to the sockets. alos called sokect descripter
   - hit reque then we have send data.
   - if we want to do muiple task then we  have to warp the socket into the thred.
   - if 1000 request then 10000 thred accuop it's wrong. its not opimzie 
   - thrad per connection.
   - sol: In OS EPOLL FOR LINX AND KQUEUE (MACOS) 
   - IT is SCALABE I/O EVENT NOTIFICATION MEACHISM.
   - THESE WILL GRAB ALL API INSIDE IT. AND AFTER SOME ACTITY OR FINHES EXEXCTION IT WILL PASSE/notify TO LIBUV AND IT WILL HANDLE IT.