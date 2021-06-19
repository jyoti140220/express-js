const express=require('express');
const router=express.Router()


router.get('/:q',(req,res)=>{
    res.send(req.params.q)
})

router.post('/',(req,res)=>{
    res.send("hello post")
})
module.exports=router


// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res){
//    res.send('GET route on things.');
// });
// router.post('/', function(req, res){
//    res.send('POST route on things.');
// });

// //export this router to use in our index.js
// module.exports = router;