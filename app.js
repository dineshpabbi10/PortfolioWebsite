var express = require("express");
app = express();
app.use(express.static('public'))

var port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/meme",(req,res)=>{
    res.render("test.ejs");
});
//     request("https://api.memeload.us/v1/random",(err,response,body)=>{
//         if(err){
//             console.log(err);
//         }else{
//         c = JSON.parse(body);
//         url = c["image"];
//         res.render("test.ejs",{url:url});
//     }
//     })

// })

app.listen(port,()=>{
    console.log("Server Running");
});