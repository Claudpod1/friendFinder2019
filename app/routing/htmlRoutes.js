var path = require("path");


/// routes to the html folders
module.exports = function(app){

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    app.get("/home", function (req,res){
        res.sendFile(path.join(__dirnam, "../public/home.html"));
    });

    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};
