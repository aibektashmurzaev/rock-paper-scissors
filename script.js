let computerScore = 0;
let humanScore = 0;
const rock ="rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice(){
   let randomNumber = Math.floor(Math.random() * 3) + 1;
   switch(randomNumber){
    case 1: return rock;
    case 2: return paper;
    case 3: return scissors;
   }
}

let comp = getComputerChoice();
console.log(comp);

function getHumanChoice(){
    let humanChoice = prompt("Please enter the option: Rock, Paper, Scissors:");

    if(humanChoice.toLowerCase() == rock || humanChoice.toLowerCase() == paper || humanChoice.toLowerCase() == scissors){
        return humanChoice;
    }else{
        while(humanChoice.toLowerCase() != rock || humanChoice.toLowerCase() != paper || humanChoice.toLowerCase() != scissors){
            let newHumanChoice = prompt("Enter a valid value");
            if(newHumanChoice.toLowerCase() == rock || newHumanChoice.toLowerCase() == paper || newHumanChoice.toLowerCase() == scissors){
                humanChoice = newHumanChoice;
                return humanChoice;
            }
        }
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == rock && computerChoice == scissors){
        humanScore++;
        console.log( rock + " beats " + scissors + ", you won!");
    }else if(humanChoice == rock && computerChoice == paper){
        computerChoice++;
        console.log(paper + " beats " + rock + " you lost!" );
    }else if(humanChoice == scissors && computerChoice == rock){
        computerChoice++;
        console.log( rock + " beats " + scissors + ", you lost!");
    }else if(humanChoice == paper && computerChoice == rock){
        humanChoice++;
        console.log(paper + " beats " + rock + " you won!" );
    }else if(humanChoice == scissors && computerChoice == paper){
        humanChoice++;
        console.log(scissors + " beats " + paper + " you won!");
    }else if(humanChoice == paper && computerChoice == scissors){
        computerChoice++;
        console.log(scissors + " beats " + paper + " you lost!");
    }else{
        console.log("draw go again");
    }
}

const humanSelection = getHumanChoice();
const ComputerSelection = getComputerChoice();

playRound(humanSelection, ComputerSelection);

