const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const arr = [];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.get('/ejsoutput', function(req,res){
  res.render('Home',{bikes:arr})
})

app.post('/ejsoutput', function(req,res){
  arr.push(req.body.data);
  res.redirect('/ejsoutput');
})

app.listen(2300,()=>{
  console.log('ejs server running');
})