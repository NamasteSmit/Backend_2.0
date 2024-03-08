const express = require('express');
const fs = require('fs');
const port = 3001;

const app = express();

app.get('/file/:fileName',(req,res)=>{
     const params = req.params.fileName;
     fs.readFile(params,(err,data)=>{
         if(err) throw err;
         res.send(data);
     })
})


app.listen(port,(err,res)=>{
    if(err) throw err;
    console.log("Server is running on port",port);
});