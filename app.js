//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
//using express
const app = express();
//declaring array
var items = ["buy food", "cook food", "make food"];
//using EJS
app.set('view engine', 'ejs');
//using body parser
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
    var today = new Date();
    //javascript objects
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", options);
      
res.render("list", {kindofDay: day, newListItems: items});
});


app.post("/", function(req, res){
var item = req.body.newItem;

items.push(item);

   res.redirect("/");
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});