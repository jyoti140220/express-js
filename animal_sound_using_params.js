//   parth's code explain

const express=require('express');
const app=express()
var animal_sound={
    Dog: "Bow Bow",
    Cat: "Meow Meow"
}

app.get('/animals/:animal_name',(req,res)=>{
    animal=req.params.animal_name;
    if(animal_sound[animal]) res.send(animal_sound[animal])
    else res.send("Valid Animal Name")
})

app.listen(3000,()=>{
    console.log("Server Running On Port 3000...... ")
})