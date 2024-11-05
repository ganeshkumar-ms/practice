require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const UserAPI = require('./API/UserAPI');
const FileAPI = require('./API/FileAPI');

app.use(cors({origin:process.env.CORS}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(process.env.DB_URL)
.then(()=>{
  console.log(("DB Connected"));  
})
.catch((err)=>{
  console.log(err);
})

app.use('/user',UserAPI);
app.use('/file', FileAPI)

app.listen(process.env.PORT,()=>{
  console.log('port running');  
})