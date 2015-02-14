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
      
      
    var theForm = $("#upload");
    
    $("#scores").html("");
    $("#upload").css("visibility","hidden");
    $("#inserttext").css("display","none");
    var $scoreboard = $("#scoreboard");
    $scoreboard.css("display","block");
    $scoreboard.html('<h1>Scoreboard</h1>'+$scoreboard.html());
  
    var $scores = $("#scores");
    $scores.show();

    $("#restart").val("< Menu");

    var GameScore = Parse.Object.extend("Score");
    var query = new Parse.Query(GameScore);
    query.equalTo("cheating", false);
    query.limit(1000);
    query.descending("score");
    query.find({
      success: function(results) {
        
        // var index = 0;
        // for (var i = 0; i < results.length; i++) {
        //     //console.info(i+"   "+results[i].get('name')+": "+results[i].get('score'));
        //     if (results[i].get('name') == object.get('name') && results[i].get('score') == object.get('score')){
        //         index = i;
        //         break;
        //     }
        // }
          
        // var min = index - 5 > 0 ? index-5 : 0; 
        // var max = min + 10 < results.length ? min + 10 : results.length;
        // min = max-min < 10 ? (max - 10 > 0 ? max-10 : 0) : min;
        



        $("#leader").text("Top Scorer: "+results[0].get('name')+" ("+results[0].get('score')+")");
        
        results
          .filter(function(result, index){
            return true;
          })
          .forEach(function(result, index){
            $scores.append("<li>"+result.get('name')+": "+result.get('score')+"</li>")
          });


        // $("#scores").attr("start",min);
        // for (var i = min; i < max; i++)
        //   $("#scores").append("<li>"+results[i].get('name')+": "+results[i].get('score')+"</li>");
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

        
    $("#restart").unbind('click').click(function(e) {
            $("#scoreboard").css("display","none");
            game.state.start('menu');
            e.stopPropagation();
            e.preventDefault();
    });
      
      
  };
    
  

  return insertname;
};
