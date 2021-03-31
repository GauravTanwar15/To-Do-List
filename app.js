//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    varday=" ";

switch (currentDay) {
    case 0:
        day = "sunday";
        break;
    case 1:
         day = "Monday";
         break;
     case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
     case 4:
        day = "Thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
    default:
    console.log("error!" + currentDay);
      
}
res.render("list", {kindofDay: day});
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});