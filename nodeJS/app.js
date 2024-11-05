console.log("Hello NodeJS");

// const opsys = require('os');

// console.log(opsys.cpus());
// console.log(opsys.networkInterfaces());

// console.log(opsys.userInfo());


// const http = require('http');

// http.createServer(function(req,res){
//   res.write("<h1>Hello Node Server</h1>");
//   res.end();
// }).listen(2400,()=>{
//   console.log("server running");
// })

// const fs = require('fs');

// fs.writeFileSync('sample.txt',`Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n Labore, dolor nihil quidem illo delectus, nam, rem fuga assumenda deserunt <span>Demo nitro...!\n</span> beatae tenetur. Nobis nam aperiam quam ratione ipsa accusantium voluptatibus dolores?`);

// console.log(fs.readFileSync('sample.txt','utf-8'));

// fs.unlinkSync('sample.txt');

const cust = require('./custom');
const { ReadFile } = require('./custom')
cust.createFile();

ReadFile()
// cust.deleteFile()
