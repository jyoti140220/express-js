var express = require('express');
var app = express();

var things = require('./route.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000,()=>{
    console.log("Server Running Port Number 3000.......")
});




