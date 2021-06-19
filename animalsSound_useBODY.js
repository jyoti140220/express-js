const express = require('express');


const app = express();
app.use(express.json());


app.get('/animal/:animal_name', (req, res) => {
    var body_data = req.body
    var parms_value = req.params.animal_name
    c = 1
    p = 0
    for (i in body_data) {
        if (i == parms_value) {
            p = p + 1
            res.send(body_data[i])
        }
        if (p == 0 && c == 5 && i != parms_value) {
            res.send("Invalid Animal Name ")
        }
        c = c + 1


    }

})
app.listen(6090, () => {
    console.log("Server Running......")
})



// parth's code explain



