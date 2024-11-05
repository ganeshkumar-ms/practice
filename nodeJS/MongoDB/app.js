const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const MongoDB = require("mongodb");


const dbURL = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

const dbConnect = new MongoDB.MongoClient(dbURL);

if (dbConnect) {
  console.log("Connected");
} else {
  console.log("Not Connected")
}

app.get('/getdata', async function (req, res) {
  const database = await dbConnect.connect();
  const db = database.db("ganesh");
  const collection = await db.collection('user');

  const result = await collection.find().toArray();

  res.send(result).status(200)
})

app.post('/postdata', async function (req, res) {
  const database = await dbConnect.connect();
  const db = database.db("ganesh");
  const collection = await db.collection('user');

  const result = await collection.insertOne(req.body);

  res.send(result).status(200)
})

app.get('/getdata/:id', async function (req, res) {
  const database = await dbConnect.connect();
  const db = database.db("ganesh");
  const collection = await db.collection('user');

  const result = await collection.findOne({ _id: new MongoDB.ObjectId(req.params.id) });

  res.send(result).status(200)
})

app.put('/update/:id', async function (req, res) {
  const database = await dbConnect.connect();
  const db = database.db("ganesh");
  const collection = await db.collection('user');

  const result = await collection.findOneAndUpdate(
    {
      _id: new MongoDB.ObjectId(req.params.id)
    },
    {
      $set: req.body
    });

  res.send(result).status(200)
})

app.delete('/delete/:id', async function (req, res) {
  const database = await dbConnect.connect();
  const db = database.db("ganesh");
  const collection = await db.collection('user');

  await collection.findOneAndDelete({ _id: new MongoDB.ObjectId(req.params.id) })

  res.send("Data Deleted").status(200);
  console.log("Data Deleted @" + new Date().toLocaleString({hourCycle: 'h12'},{timeStyle:"full"}));
  
})

app.listen(6754, () => {
  console.log("server running")
})