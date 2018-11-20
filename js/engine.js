/*variables we need for the game*/

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost =0;
var draw = 0;


/*listen for the button clicks */
/*
$("#rock").click(function(event) {
  var playYou = 'rock';
  $("#playYou").text(playYou);
  var playMachine = computerMove();
  compare(playYou, playMachine);
});

$("#paper").click(function(event) {
  var playYou = 'paper';
  $("#playYou").text(playYou);
  var playMachine = computerMove();
  compare(playYou, playMachine)
});

$("#scissors").click(function(event) {
  var playYou = 'scissors';
  $("#playYou").text(playYou);
  var playMachine = computerMove();
  compare(playYou, playMachine);
});
*/



$('button').click(function(event){
 var playYou = this.getAttribute("value");
$("#playYou").text(playYou);
 var playMachine = computerMove();
 compare(playYou, playMachine);
})

function computerMove() {
  var playMachine = Math.floor(Math.random() * (3 - 0)) + 0;
  playMachine = choices[playMachine];
  $("#playComputer").text(playMachine);


  return playMachine;
}
/*Math.floor(Math.random() * (max - min)) + min; */
/* max is not include */


function compare(you, machine){

  var verdict = 'lose';

  if ( you == machine ) {
    verdict = 'draw';
  }

  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }

  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }

  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  if ( verdict == 'win') {
    won++;
    $("#gameWon").text(won);
  }

  if ( verdict == 'lose') {
    lost++;
    $("#gameLost").text(lost);
  }
  if ( verdict == 'draw') {
    draw++;
    $("#gameDraw").text(draw);
  }

  $("#verdict").text(verdict);

  played++;
  $("#gamePlayed").text(played);
}


$('button').click(function(event){
 var playYou = this.getAttribute("value");
})

/* function compare(you, machine){

  var verdict = 'lose';
  if (you == machine) {
    verdict = 'draw';
  }

  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }

  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }

  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  if (verdict == 'win') {
    $("gameWon").text(verdict);
  }

  if (verdict == 'lose') {
    $("gameLost").text(verdict);
  }

  if (verdict == 'draw') {
    $("gameDraw").text(verdict);
  }
}
*/

/*console.log will  tell you what happens, can be viewed in chrome console
$("#paper").click(function(event) {
  var playYou = 'paper';
  $("#playYou").text(playYou);
  console.log ("you: " + playYou);
});*/

// IDEA: curly bracket goes last!!!
