const express = require('express');
const port = 3001;

const app = express();


//UGLY_WAY
// app.get('/health-checkup',(req,res)=>{
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;
//     console.log(kidneyId , username , password);

//     if(username!="smit" || password!="pass")
//     {
//         res.status(403).json({
//             msg : "user doesnt exist"
//         })
//         return;
//     }

//     if(kidneyId!= 1 && kidneyId!=2){
//         res.status(403).json({
//             msg : "KidneyId doesnt exist"
//         })
//         return;
//     }

//     return res.json({
//         msg : "Kidney is healthy"
//     })
// })


//Using Middleware 

let numberOfRequest = 0;

function calculateRequest(req,res,next){
     console.log(numberOfRequest);
     numberOfRequest++;
     next();
}



function usernameMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username,password);
    if(username!="smit" && password!="pass") 
    {
        res.status(403).send({
            msg : "user doesnt exist"
        })
    }else{
        next();
    }
}

function kidneyIdMiddleware(req,res,next){
   const kidneyId = req.params.kidneyId;
   if(kidneyId!=1 && kidneyId!=2){
       res.status(403).send({
           msg : "KidneyId doesnt exist"
       })
   }else{
    next();
   }
} 

app.use(calculateRequest);

app.get('/health-checkup',usernameMiddleware,kidneyIdMiddleware,(req,res)=>{
    res.json({
        msg : "Kidney is healthy"
    })
})


app.listen(port,(err,res)=>{
    if(err) throw err;
    console.log("Server is running on port",port);
});