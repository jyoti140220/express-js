const express=require('express');
const app=express();

app.get('/animal/:animal_name',(req,res)=>{
    var query_object=req.query
    var parms_value=req.params.animal_name
    c=1
    p=0
    for (i in query_object){
        if(i==parms_value){
            p=p+1
            res.send(query_object[i])
        }
        if(p==0 && c==5 && i!=parms_value){
            res.send("Invalid Animal Name ")
        }
        c=c+1
        
        
    }
    

})
app.listen(6000,()=>{
    console.log("Server Running......")
})