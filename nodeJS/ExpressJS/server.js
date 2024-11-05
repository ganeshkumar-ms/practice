const express = require('express');
const app = express();

app.get('/get', function(req,res){
  res.send("<h1>Welcome to ExpressJS</h1>")
})

app.get('/html', function(req,res){
  res.sendFile('home.html',{root:__dirname})
})

app.listen(2400,()=>{
  console.log("server running");
  
})