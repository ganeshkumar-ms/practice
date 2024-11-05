
// const http = require('http');

// http.createServer(function(req,res){
//   res.write("<h1>Hello Node Server</h1>");
//   res.end();
// }).listen(2400,()=>{
//   console.log("server running");
// })

const http=require('http');

http.createServer(function(req,res){
  res.write("<h1>Hello World!</h1>")
  res.end();
}).listen(1730,()=>{
  console.log("hello")
})