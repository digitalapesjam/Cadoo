properties = require('../properties');
$ = require('../../lib/jquery-2.1.3.min.js')

module.exports = function(game) {

  var insertname = {};  
  var score;
    
  insertname.init = function(n) {
    score = n;
  }
    
  insertname.create = function () {
      if (localStorage.player_name != undefined)
          $("#playername").val(localStorage.player_name);
      
      game.stage.backgroundColor = "#000000"
      $("#inserttext").css("display","block");
      $("#title").text("You Died!");
      $("#subtitle").text("What did you expect?");
      $("#scoretext").html("Hey, but your score is "+score+"!<br/>Insert your name and see how far you got in the world ranking.");
      $("#submit").css("visibility","visible");
      
    var theForm = $("#upload");
      
    $("#upload").unbind('submit').submit(function uploadScore(e) {
            localStorage.player_name = $("#playername").val();
        
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
                query.limit(1000);
                query.descending("score");
                query.find({
                  success: function(results) {
                    
                    var index = 0;
                    for (var i = 0; i < results.length; i++) {
                        //console.info(i+"   "+results[i].get('name')+": "+results[i].get('score'));
                        if (results[i].get('name') == object.get('name') && results[i].get('score') == object.get('score')){
                            index = i;
                            break;
                        }
                    }
                      
                    var min = index - 5 > 0 ? index-5 : 0; 
                    var max = min + 10 < results.length ? min + 10 : results.length;
                    min = max-min < 10 ? (max - 10 > 0 ? max-10 : 0) : min;
                      
                    $("#leader").text("Top Scorer: "+results[0].get('name')+" ("+results[0].get('score')+")");
                      
                    $("#scores").attr("start",min);
                    for (var i = min; i < max; i++)
                      $("#scores").append("<li>"+results[i].get('name')+": "+results[i].get('score')+"</li>");
                  },
                  error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                  }
                });
            });
        
            e.stopPropagation();
            e.preventDefault();
    });
    
    $("#restart").unbind('click').click(function(e) {
            $("#scoreboard").css("display","none");
            game.state.start('preloader');
            e.stopPropagation();
            e.preventDefault();
    });
      
    $("#fastrestart").unbind('click').click(function(e) {
            $("#inserttext").css("display","none");
            game.state.start('preloader');
            e.stopPropagation();
            e.preventDefault();
    });
      
  };
    
  

  return insertname;
};
