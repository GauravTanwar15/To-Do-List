//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const date = require(__dirname + "/date.js");
//using express
const app = express();
//declaring array
var items = ["buy food", "cook food", "make food"];
var workItems = [];
//using EJS
app.set('view engine', 'ejs');
//using body parser
app.use(bodyparser.urlencoded({extended:true}));
//placing css folder under public folder n accessing pre-made css
app.use(express.static("public"));

app.get("/", function(req, res){
   //calling function date from other page.
    let day = date.getDate();
      
res.render("list", {listTitle: day, newListItems: items});
});


app.post("/", function(req, res){

    var item = req.body.newItem;
//if item is from work 
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
//if from other
    else{
        items.push(item);
       res.redirect("/");
        }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
}); 

app.get("/about", function(req, res){
     res.render("about");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});