const express = require('express');
const router = express.Router();
const Ufiles = require('../Schema/FileSchema');
const multer = require('multer')
const fs = require('fs')

const FileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage: FileStorage });

router.use('/files', express.static('uploads'));

router.get('/getdata', async function (req, res) {
  await Ufiles.find()
    .then(function (user) {
      res.send(user).status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

router.post('/postdata', upload.single('img'), async function (req, res) {

  const { Title, SubTitle } = req.body;

  await Ufiles.create({
    Title: Title,
    SubTitle: SubTitle,
    Fname: req.file.filename,
    Fpath: req.file.path
  })
    .then(function (user) {
      res.send(user).status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

router.get('/getdata/:id', async function (req, res) {

  await Ufiles.findById(req.params.id)
    .then(function (user) {
      res.send(user).status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

router.put('/update/:id', upload.single('img'), async function (req, res) {
  const { Title, SubTitle } = req.body;

  await Ufiles.findById(req.params.id)
    .then(function (files) {
      fs.unlinkSync(files.Fpath)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })

  await Ufiles.findByIdAndUpdate(req.params.id, {
    Title: Title,
    SubTitle: SubTitle,
    Fname: req.file.filename,
    Fpath: req.file.path
  })
    .then(function (user) {
      res.send(user).status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

router.delete('/delete/:id', async function (req, res) {

  await Ufiles.findById(req.params.id)
    .then(function (files) {
      fs.unlinkSync(files.Fpath)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })

  await Ufiles.findByIdAndDelete(req.params.id)
    .then(function () {
      res.send('Data Deleted').status(200)
    })
    .catch(function (err) {
      res.send(err).status(400);
    })
})

module.exports = router;