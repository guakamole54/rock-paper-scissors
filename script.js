function getComputerChoice() {
    // get random number between 0 and 2 including
    let randInt = Math.floor(Math.random() * 3);

    if (randInt === 0) return "rock";
    else if (randInt === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let input = prompt("Enter of of rock, paper or scissors: ").toLowerCase();
    console.log(input);
    
    if (!(input === 'rock' || input === 'paper' || input === 'scissors')) {
        console.log("That's an invalid choice!");
        return null;
    }

    return input;


}

function playGame(numberOfRounds=5) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            {console.log(`It's a tie ${humanChoice} ties with ${computerChoice}`)}
        } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {

            {console.log(`You win: ${humanChoice} beats ${computerChoice}!`); humanScore ++;}

        }else {
            {console.log(`You lose: ${computerChoice} beats ${humanChoice}!`); computerScore ++;}
        }

        console.log(`ROUND NO: ${i + 1}. The score is YOU: ${humanScore} COMPUTER: ${computerScore}`);

    }

    for (i = 0; i < numberOfRounds; i++){
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {i--; continue;}
        const computerChoice = getComputerChoice();

        
        playRound(humanChoice, computerChoice);
    }
}

playGame(numberOfRounds=10);