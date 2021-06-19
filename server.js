const express=require('express');
const app=express();

app.get('/hello/:id',(req,res)=>{
    console.log(req.headers)
    console.log(req.query)
    // console.log(req.params)
    // res.send(req.params)
    res.send()
}) 

app.listen(2000,()=>{
    console.log("Server Running On Port Number 2000......")
})