// dynamic routes or params we can say

/* We can now define routes, but those are static or fixed. 
To use the dynamic routes, we SHOULD provide different types of routes. 
Using dynamic routes allows us to pass parameters and process based on them.*/



// 1st exmple
var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000,()=>{console.log("SERVER RUNNING....")});



// 2nd exmple with 2 perameter
var express = require('express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.listen(3000,()=>console.log("RUNNING..."));




// 3rd exmple (Pattern Matched Routes)
// it will take only 5 digit number
var express = require('express');
var app = express();

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.listen(3000,()=>{
    console.log("RUNNING....")
});




// 4th exmple (if our api wrong than it will be go in "*")
var express = require('express');
var app = express();


app.get('/think', function (req, res) {
    res.send('GET data thinking.');
});
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});
app.listen(3000, () => {
    console.log("RUNNING....")
});