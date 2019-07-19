var friends = require("../data/friends");

module.exports = function (app) {


    app.get("/api/honme", function (req, res) {
        res.send("Welcome to Friend Finder.");
    });

    app.get("/api/survey", function (req, res) {
        res.json(friends);
    });


    app.post("/api/survey", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (friends.length < 5) {
            friends.push(req.body);
            res.json(true);
        }
        // else {
        //     friends.push(req.body);
        //     res.json(false);
        // }
    });
};
