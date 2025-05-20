// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let myServer = require("./app") ;

//Listen The Server : 

let PORT = 3000 ;

myServer.listen(PORT , function(){

    console.log(`Server is 🔥 running @ https://localhost:${PORT} ...`) ;

}) ;

// Exports Code :


