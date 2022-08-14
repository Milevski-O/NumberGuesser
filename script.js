let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    let num = Math.floor(Math.random() * 8);
    console.log(num);
  return num;
}
function compareGuesses(human, pc, secret) {
  let h = Math.abs(secret - human);
  let p = Math.abs(secret - pc);
  if (h <= p) {
    return true;
  }
  else {
    return false;
  }
}

function updateScore(score) {
  if (score==="human") {
    humanScore++;
  }
  else if (score==='computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}