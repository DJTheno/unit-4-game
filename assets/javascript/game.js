//spudo coding//

//game with 4 crystals that gives us a random result

//every crystal needs to have a random number. This selects a random number at the begining of the game
$(document).ready(function(){
    var random=math.floor(Math.random() *101+19);

    //append random number
    $("randomNumber").text(random);
//defining the var
var number1 = Math.floor(Math.random() *11+1);
var number2 = Math.floor(Math.random() *11+1);
var number3 = Math.floor(Math.random() *11+1);
var number4 = Math.floor(Math.random() *11+1);

var userTotal=0;
var wins = 0;
var losses = 0;
//jquery to print out text of wins and losses
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
//resets number after wins or losses
function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $("#randomNumber").text(random);
    var number1 = Math.floor(Math.random()*11+1);
    var number2 = Math.floor(Math.random()*11+1);
    var number3 = Math.floor(Math.random()*11+1);
    var number4 = Math.floor(Math.random()*11+1);
    userTotal = 0;
    $("#score").text(userTotal);}

//win and loss alerts if you have won or lost
    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function loser() {
        alert("You lost!!");
        wins++;
        $("#numberLosses").text(wins);
        reset();
    }
//set up onclick functions

$("#blue").on ("click", function(){
    userTotal = userTotal + number1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }   
  })  

  $("#green").on ("click", function(){
    userTotal = userTotal + number2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }   
  })  


  $("#red").on ("click", function(){
    userTotal = userTotal + number3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }   
  })  

  $("#yellow").on ("click", function(){
    userTotal = userTotal + number4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }   
    }) 
