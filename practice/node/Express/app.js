const express = require('express');
const app = express();

app.get('/get',function(req,res){
  res.send("<h3>Hello Express</h3>");
})

 app.get('/html',function(req,res){
   res.sendFile('home.html',{root:__dirname})
})

app.listen(6754,()=>{
  console.log("server running");
})