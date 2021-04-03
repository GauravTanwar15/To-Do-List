//jshint esversion:6

//If you want ate
exports.getDate =function () {
var today = new Date();
//javascript objects
var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
};

return today.toLocaleDateString("en-US", options);
};

//If you want Day
exports.getDay = function () {
var today = new Date();
//javascript objects
var options = {
    weekday: "long",
};

return today.toLocaleDateString("en-US", options);
};