properties = require('../properties');
$ = require('../../lib/jquery-2.1.3.min.js')

module.exports = function(game) {

  var insertname = {};  
  var score;
    
  insertname.init = function(n) {
    score = n;
  }
    
  insertname.create = function () {
      game.stage.backgroundColor = "#000000"
      $("#inserttext").css("display","block");
      $("#title").text("You Died!");
      $("#subtitle").text("What did you expect?");
      $("#scoretext").html("Hey, but your score is "+score+"!<br/>Insert your name and see how far you got in the world ranking.");
      $("#submit").css("visibility","visible");
      
    var theForm = $("#upload");
      
    $("#upload").unbind('submit').submit(function uploadScore(e) {
            $("#scores").html("");
            $("#submit").css("visibility","hidden");
            var TestObject = Parse.Object.extend("Score");
            var testObject = new TestObject();
            testObject.save({"score":score,"name":$("#playername").val() ,"cheating":false}).then(function(object) {
                
                $("#inserttext").css("display","none");
                $("#scoreboard").css("display","block");
                var GameScore = Parse.Object.extend("Score");
                var query = new Parse.Query(GameScore);
                query.equalTo("cheating", false);
                query.limit(10);
                query.descending("score");
                query.find({
                  success: function(results) {
                    console.info(results);
                    for (var i = 0; i < results.length; i++) { 
                      var object = results[i];
                      $("#scores").append("<li>"+object.get('name')+": "+object.get('score')+"</li>");
                    }
                  },
                  error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                  }
                });
            });
        
            e.stopPropagation();
            e.preventDefault();
    });
    
    $("#restart").click(function(e) {
            $("#scoreboard").css("display","none");
            game.state.start('preloader');
            e.stopPropagation();
            e.preventDefault();
    });
      
  };
    
  

  return insertname;
};
