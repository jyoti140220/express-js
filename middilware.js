const express=require('express');
const app=express();
// application level middleware

app.use(function(req,res,next){
    console.log("Request ip :",req.ip)
    next()
})
app.get('/user',function(req,res,next){
    console.log("first middleware")
    res.send("hello")
    next()
},function(req,res,next){
    console.log("second middleware")
    next()
})
app.use((req,res,next)=>{
    console.log("ABCD")
})

app.listen(3030,()=>{
    console.log("RUNNING..")
})