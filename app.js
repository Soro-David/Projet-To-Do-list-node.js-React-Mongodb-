var express=require("express");
var bodyParser= require("body-parser")
var app=express();

const Thing = require('./model/connec.js');

//
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.set('view engine','ejs');
app.use(express.static("public"));
app.get("/", function(req,res){
    //res.send("<h1> salut a tous </h1>")
    res.render("list");
})


app.listen(3000,function(){
    console.log("Listening to port 3000");
})