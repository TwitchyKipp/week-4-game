var wins = 0;
var lose = 0;
var playerScore = 0;
var roundScore = 0;

var crystalScore = {
    "peridot": 0,
    "garnet": 0,
    "amethyst": 0,
    "saphire": 0,
};

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  // assign data attribute to images
  crystalGems.attr
  // start new Round
  function startNewRound() {
      roundScore = getRandomIntInclusive(19, 120);
      crystalScore.peridot = getRandomIntInclusive(1, 12);
      crystalScore.garnet = getRandomIntInclusive(1, 12);
      crystalScore.amethyst = getRandomIntInclusive(1, 12);
      crystalScore.saphire = getRandomIntInclusive(1, 12);
      playerScore = 0;
  }
  function playerWin() {
    alert("You defeated the Diamonds!");
    win++;
    startNewRound();
  }

  function playerLose() {
    alert("You Clod! You let the The Diamonds Destroy the Earth!!!");
    lose++;
    startNewRound();

  }

  function updateStats() {
      $("#win").html(wins);

  }

  function guessGem(color) {
      playerScore += crystalScore[color];
     
      if (playerScore === roundScore) 
     
      playerWin();

      else if (playerScore > roundScore)

      playerLose();

    }

    startNewRound();

    document.getElementById("peridot").onclick = function( {
        playeScore =+ roundScore
    })

    // display
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("loseCount").innerHTML = lose;
    document.getElementById("playerScore").innerHTML = playerScore
    console.log(roundScore);
    console.log(crystalScore);