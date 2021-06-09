const express=require('express');
const app=express()
const cookieParser=require('cookie-parser')
app.use(cookieParser())
app.get('/',(req,res)=>{
    // create cookies
    res.cookie("cooke1","123")
    res.cookie("cooke2","67")
    // access cookies
    res.send(req.cookies)
})
app.get('/show',(req,res)=>{
    res.send(req.cookies)
})
app.get('*',(req,res)=>{
    res.send("wrong")
})
app.listen(7890,()=>{
    console.log("runing...")
})