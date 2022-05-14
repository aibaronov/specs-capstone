
const emailData = require('./emailData/emailData');
const express = require("express");
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/", function(req, res) {
  res.send(emailData);
});

app.post("/send", function(req, res){
  console.log("Post received");
  console.log(req.body);
  res.send('Message Received');
});

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("Server started successfully");
});