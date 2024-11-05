const fs = require('fs');

function createFile(){
  fs.writeFileSync('sample.txt',`Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n Labore, dolor nihil quidem illo delectus, nam, rem fuga assumenda deserunt <span>Demo nitro...!\n</span> beatae tenetur. Nobis nam aperiam quam ratione ipsa accusantium voluptatibus dolores?`);
}

function ReadFile(){
  console.log(fs.readFileSync('sample.txt','utf-8'));
}

function deleteFile(){ 
  fs.unlinkSync('sample.txt');
}

module.exports = {createFile,ReadFile,deleteFile};