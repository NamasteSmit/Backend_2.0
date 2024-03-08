//Query params information that client sends to a web server in the form of URL
//Query params appear at the end of URL and are seperated from base URL by ? (anything after ? is not actually treated as a part of base URL)
// Example : https://example.com/search?category=laptops&brand=hp&price_range=500-1000
//The server, upon receiving this request, can interpret the query parameters to perform a search in its database, filter the results based on the specified criteria, and then send back a response containing the relevant laptop products that match the given parameters.

// const express = require("express");
// const port = 3001;
// const app = express();

// const sum = (n)=>{
//    let ans = 0;
//    for(let i = 0 ; i<5 ; i++)
//    {
//     ans += n;
//    }
//    return ans;
// }

 
// app.get('/',(req,res)=>{
//    const n = req.params.n
//    const ans = sum(n);
//    res.send("Your answer is",ans);

// })


// app.listen(port);