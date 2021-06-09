const bodyParser = require("body-parser");

const express=require('express')
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send(req.body)
    console.log(req.body)
})
app.listen(3000,()=>{
    console.log("RUNNING...")
})