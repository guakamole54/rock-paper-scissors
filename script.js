function getComputerChoice() {
    // get random number between 0 and 2 including
    let randInt = Math.floor(Math.random() * 3);

    if (randInt === 0) return "rock";
    else if (randInt === 1) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    const results = document.querySelector("#results");

    if (humanChoice === computerChoice) {
        {
            results.textContent = (`It's a tie ${humanChoice} ties with ${computerChoice}`);
            return "tie";
        }
    } else if
        ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {

        {
            results.textContent = (`You win: ${humanChoice} beats ${computerChoice}!`);
            return 'player';
        }

    } else {
        {
            results.textContent = (`You lose: ${computerChoice} beats ${humanChoice}!`);
            return 'computer';
        }
    }

}

let winner = null;
let computerScore = 0;
let humanScore = 0;

const div = document.querySelector('.options');
div.addEventListener("click", (event) => {
    let target = event.target;
    const scoreboard = document.querySelector(".scoreboard");
    const finalResult = document.querySelector(".final-result");
    switch (target.id) {
        case "rock":
            winner = playRound("rock", getComputerChoice());
            break;
        case "paper":
            winner = playRound("paper", getComputerChoice());
            break;
        case "scissors":
            winner = playRound("scissors", getComputerChoice());
            break;
    }

    if (winner == "player") humanScore++;
    else if (winner == "computer") computerScore++;

    scoreboard.textContent = `Scoreboard: YOU ${humanScore} : COMPUTER ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        winner = humanScore > computerScore ? "WIN" : "LOSE";
        finalResult.textContent = `GAME OVER!!! YOU ${winner}`;
        humanScore = 0;
        computerScore = 0;
    } else {
        finalResult.textContent = "";
    }
})

