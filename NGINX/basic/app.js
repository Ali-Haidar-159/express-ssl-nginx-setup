// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let path = require("path") ;
let fs = require("fs") ;
let https = require("https") ;

//Creating Server : 

let myServer = https.createServer({

    key : fs.readFileSync(path.join(__dirname , "ssl" , "key.pem")) ,
    cert : fs.readFileSync(path.join(__dirname , "ssl" , "cert.pem"))

} , app) ;

// Connect With Server : 



// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).send("<h1>This is HOME page</h1>") ;

});

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "Page not found !" 

    });

});

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find the server error !!!" ,
        error : err

    });

});

// Exports Code :

module.exports = myServer ;
