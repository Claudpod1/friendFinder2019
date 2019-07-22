var friends = require("../data/friends.js");

module.exports = function (app) {


    app.get("/api/home", function (req, res) {
        res.send("Welcome to Friend Finder.");
    });

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
   //loop through the friends from friends.js 
   //comparing the scores - math part 
   //send back the lowest 
    console.log(req.body);
    console.log(req.body.score);
    
    
   var maxDifference = 50
   var bestmatch;
   

   for(var i = 0; i < friends.length; i++){
       var score = 0
    
       for (var j = 0; j < friends[i].scores.length; j++){
        //math
        score += Math.abs(friends[i].scores[j]-req.body.score[j])
       }
       if (score < maxDifference){
           maxDifference = score

           bestmatch = friends[i];

       }


       
   }

   res.send(bestmatch);
      
    });
};
