const express = require(express);
const app = express();

app.get('/task',function(req,res){
  res.sendFile('navbar.html',{root:__dirname});
})

app.listen(1430,()=>{
  console.log("server running")
})