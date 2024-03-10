const express = require('express');

const app = express();

const port = 3004;
const zod = require('zod');

app.use(express.json());//Adding app.use(express.json()) ensures that Express can parse JSON data in the request body

function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password: zod.string().min(6)
    })

    const response = schema.safeParse(obj);
    return response;

}

app.post('/login',(req,res)=>{
 

     const details = req.body;
     console.log("details",details);
   const validUser =  validateInput(details);
   console.log("validUser",validUser);
   if(!validUser.success){
    res.json({
        msg:"Not a valid user"
    })}else{
        res.send({
            msg:"Logged In successfully"
        })
    }
   }
     
)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
