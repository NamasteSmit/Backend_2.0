const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = "12345"
const port = 3000;


const ALL_USER = [
    {
        username : "smit1305@gmail.com",
        password : "123",
        name : "smit"
    },
    {
        username : "ram20@gmail.com",
        password : "123345",
        name : "ram"
    },
    {
        username : "bharat22@gmail.com",
        password : "1233345",
        name : "bharat"
    }
]

app.use(express.json());

const userExist = (username,password) => {

    for(let i = 0 ; i<ALL_USER.length ; i++){
        if(ALL_USER[i].username === username && ALL_USER[i].password === password)
        {
            return true;
        }
        return false;
    }
}


app.post('/signin',(req,res)=>{
  
    const username = req.body.username;
    const password = req.body.password;
 
    //check if user exist or not
    if(!userExist(username,password)){
        return res.status(400).json({
            message : "User not found"
        })
    }

    const token = jwt.sign({username : username},jwtPassword);
    return res.status(200).json({
        token : token
    })
}) 


app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    const decode = jwt.verify(token,jwtPassword);
    console.log(decode);
    const username = decode.username;

    return res.json({
        users : ALL_USER.filter((user)=>{
            if(user.username===username) return false;
            else return true;
        })
    })
})

app.listen(port,(req, res) =>{
    console.log("Server is running on port",port);
})