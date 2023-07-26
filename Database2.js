const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var Users=[]
 const app = express()

   const port = 5000
   cors = require("cors");

   app.use(cors());
   app.use(express.urlencoded({extended:true}))
app.use(express.json())
 
app.listen(port, () => {
 console.log(`Example app listening on port ${port} `)
 
})
app.get('/customer', async(req, res) => {
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({Id:1},function(err, result) {
  
      if (err) throw err;
      console.log(result);
      Users=result;
    res.send(result)
   
       db.close();
     });
  });
 });
app.get('/sort', async(req, res) => {
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("mydb");
    var mysort = { title: 1 };

    dbo.collection("Tasks").find({}).sort(mysort).toArray(function(err, result) {
  
      if (err) throw err;
      console.log(result);
      Users=result;
    res.send(result)
       db.close();
     });
  });
 });



app.post('/customer', async(req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
     });
  });
 });

 