// dependencies
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb+srv://rabbi:9898#MongoDB@nodemongo01.yb7enyv.mongodb.net/?retryWrites=true&w=majority",()=>{
  console.log('connected to MongoDB')
})


// connect to MongoDB


// middleWares Functions
app.use(express.static('./public'));
app.use(bodyParser.json())
// Routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

const users = [{
  name : 'rabbi',
  age:22,
  id: 1122
},
{
  name : 'ayan',
  age:29,
  id: 1124
},
{
  name : 'raju',
  age:24,
  id: 1123
}]

app.get("/user", (req, res)=>{
  res.send(users)
})

app.get("*", (req, res) => {
  res.send('404 not found');
});

app.post('/post', (req,res)=>{
  res.send(req.body)
  //console.log(req.body)
  //console.log('hello')
})


//configurations
const port = 5000;
app.listen(port, () => console.log(`listening to port ${port}`));