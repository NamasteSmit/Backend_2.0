// const express = require('express');
// const port = 3000;

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Welcome");
// })

// app.get('/home',(req,res)=>{
//     console.log(req.headers["authorization"]);
//    res.json({
//     name : "Smit",
//     age : 21
//    })
// })

// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })

const express = require("express");
const port = 3000;

const app = express();

let users = [{
    name: "Smit",
    age: 21,
    kidneys: [{
        healthy: true,
      },
      {
        healthy: false,
      }
    ],
  },
];


app.get("/",(req,res)=>{
   const johnKidneys = users[0].kidneys;
   const numberOfKidneys = johnKidneys.length;
   //filter out healthy kidneys
   const healthyKidneys = johnKidneys.filter((item)=>{
     return item.healthy
   })

   const numberOfUnhealthyKidneys = numberOfKidneys-healthyKidneys.length;
   
   res.send({numberOfKidneys,healthyKidneys:healthyKidneys.length,numberOfUnhealthyKidneys})

})


//to be able to parse and get json body to the server
app.use(express.json());

//post a new kidney to the server
app.post("/",(req,res)=>{
     const isHealthy = req.body.isHealthy;
     users[0].kidneys.push({
        healthy : isHealthy
     })
     res.json({
        message : "Kidney added"
     })
})


//put all the kidneys to be healthy
app.put("/",(req,res)=>{
  
   for(let i = 0; i < users[0].kidneys.length; i++){
       users[0].kidneys[i].healthy=true;
   }

    //just to tell user ki ha everything is done
    res.json({})
})



//remove all the unhealthy Kidneys
app.delete("/",(req,res)=>{
 
    //You should return 411 status code when no unhealthy kidney


   const NewusersKidneys = users[0].kidneys.filter((items)=>{
         return items.healthy;
    })
 
    users[0].kidneys = NewusersKidneys;
     
    res.json({})

}) 

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})