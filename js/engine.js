/*variables we need for the game*/

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;


/*listen for the button clicks */

$('button').click(function(event) {
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


function compare(you, machine) {

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

  switch (verdict) {
    case 'win':
      won++;
      $("#gameWon").text(won);
      break;
    case 'lose':
      lost++;
      $("#gameLost").text(lost);
      break;
    case 'draw':
      draw++;
      $("#gameDraw").text(draw);
      break;
  }

  $("#verdict").text(verdict);

  played++;
  $("#gamePlayed").text(played);
}
