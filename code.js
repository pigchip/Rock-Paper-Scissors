function getComputerChoice(){
    let answer = Math.floor(Math.random() * (2 + 1) + 1);
    if (answer === 1)
        return "scissors";
    if (answer === 2)
        return "paper";
    if (answer === 3)
        return "rock";
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if((player === "rock" | player === "paper" | player === "scissors") && (computer === "rock" | computer === "paper" | computer === "scissors")){
        if (player === computer)
        return "It's a draw";

        if (player === "scissors"){
            if (computer === "paper")
                return "You Win! Scissors beats Paper";
            if (computer === "rock")
                return "You Lose! Rock beats Scissors";
        }

        if (player === "paper"){
            if (computer === "scissors")
                return "You Win! Paper beats Scissors";
            if (computer === "rock")
                return "You Lose! Rock beats Scissors";
        }

        if (player === "rock"){
            if (computer === "scissors")
                return "You Win! Rock beats Scissors";
            if (computer === "paper")
                return "You Lose! Paper beats Rock";
        }
    }
    else{
        return "Invalid input parameter";
    }
}

function game(){
    let numberOfGames = 5;
    let playerSelection;
    let computerSelection;
    let answer;
    let scoreUser = 0;
    let scoreComputer = 0;
    while (numberOfGames > 0){
        playerSelection = prompt("Input Rock Paper or Scissors");
        computerSelection = getComputerChoice();
        answer = playRound(playerSelection, computerSelection);
        console.log(answer);
        if (answer[4] === 'W')
            scoreUser++;
        if (answer[4] === 'L')
            scoreComputer++;
        if (answer[4] === ' ')
            numberOfGames++;
        if (answer[4] === 'l')
            numberOfGames++;
        numberOfGames--;
    }
    console.log("User score " + scoreUser);
    console.log("Computer score " + scoreComputer);
    if(scoreUser > scoreComputer)
        console.log("User Wins!");
    else
        console.log("Computer Wins!");
}

game();