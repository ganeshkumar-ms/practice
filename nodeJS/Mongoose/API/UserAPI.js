const express = require('express');
const router = express.Router();
const User = require('../Schema/UserSchema')

router.get('/getdata', async function (req, res) {
  await User.find()
    .then(function (user) {
      res.send(user).status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

router.post('/postdata', async function (req, res) {

  const { Name, Email, Phone } = req.body;

  await User.create({
    Name: Name,
    Email: Email,
    Phone: Phone
  })
    .then(function (user) {
      res.send(user).status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

router.get('/getdata/:id', async function(req,res){
  await User.findById(req.params.id)
  .then(function (user) {
    res.send(user).status(200)
  })
  .catch(function (err) {
    res.send(err).status(400);
  })
})

router.put('/update/:id', async function(req,res){

  const { Name, Email, Phone } = req.body;

  await User.findByIdAndUpdate(req.params.id,{
    Name: Name,
    Email: Email,
    Phone: Phone
  })
  .then(function (user) {
    res.send(user).status(200)
  })
  .catch(function (err) {
    res.send(err).status(400);
  })
})

router.delete('/delete/:id', async function(req,res){
  await User.findByIdAndDelete(req.params.id)
  .then(function (user) {
    res.send('Data Deleted').status(200)
  })
  .catch(function (err) {
    res.send(err).status(400);
  })
})

module.exports = router;