
// Hello world!
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);




// with different method
var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.put('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000,()=>{
    console.log("Server Running..............")
});



/* run on terminal that request with any method 
   curl -X PUT "http://localhost:3000/things"
*/