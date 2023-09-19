let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreDiv = document.getElementById("score");
const resultDiv = document.getElementById("result_display");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");

//computer choice randomly
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

//replacing lower with upercase
function convertCase(anything) {
  if (anything === "rock") {
    return "Rock";
  }
  if (anything === "paper") {
    return "Paper";
  }
  return "Scissors";
}

// Winning Condition
function win(user, computer) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  resultDiv.innerHTML = `<h2 id="result">🎉You win!!!🎉</h2>`;
}

// Losing Condition
function loses(user, computer) {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `<h2 id="result"> You lose.</h2>`;
}

// Draw Condition
function draw(user, computer) {
  resultDiv.innerHTML = `<h2 id="result">It was a draw!</h2>`;
}

// The core game
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      loses(userChoice, computerChoice);
      break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      draw(userChoice, computerChoice);
      break;
  }
}

//reset button
function clearMessage(event) {
  event.preventDefault();
  const resultDivDelete = document.querySelectorAll("#result_display, #score");
  resultDiv.innerHTML = "";
  userScoreSpan.innerHTML = 0;
  computerScoreSpan.innerHTML = 0;
  userScore = 0;
  computerScore = 0;
}

// buttons
function main() {
  rockBtn.addEventListener("click", () => game("rock"));
  paperBtn.addEventListener("click", () => game("paper"));
  scissorsBtn.addEventListener("click", () => game("scissors"));
  resetBtn.addEventListener("click", () => clearMessage(event));
}

main();
