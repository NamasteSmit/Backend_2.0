const express = require('express');
const port = 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.get('/home',(req,res)=>{
    console.log(req.headers["authorization"]);
   res.json({
    name : "Smit",
    age : 21
   })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})