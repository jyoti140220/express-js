const express=require('express');
const app=express()
const asdf=require('./rout.js')
app.use('/asdf',asdf)
app.listen(4000,()=>{
    console.log("RUNNING.....")
})




// var express = require('Express');
// var app = express();

// var things = require('./things.js');

// //both index.js and things.js should be in same directory
// app.use('/things', things);

// app.listen(3000);