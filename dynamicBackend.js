const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect("");

const users = mongoose.model('Users',{
    name:String,
    email:String,
    age:Number
})


app.use(express.json());
app.post('/signup',async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;

    const existingUser = await users.findOne({ email: email});
    console.log(existingUser);
    if(existingUser){
        return res.status(400).json({
            message : "User already exist"
        })
    }

    const user = new users({
        name: name,
        email: email,
        age: age
    })

    user.save();
    res.json({
        message : "User added"
    })
})

app.listen(port,(req,res)=>{
    console.log("Server is running on port",port);
})
