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
        return;
    }

    return input;


}

getHumanChoice();