function playGame(){

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


   function getHumanChoice(){
       let humanChoice = prompt("Please enter the option: Rock, Paper, Scissors:").toLowerCase();

    if(humanChoice == rock || humanChoice == paper || humanChoice == scissors){
        return humanChoice;
    }else{
        while(humanChoice != rock || humanChoice != paper || humanChoice != scissors){
            let newHumanChoice = prompt("Enter a valid value").toLowerCase();
            if(newHumanChoice == rock || newHumanChoice == paper || newHumanChoice == scissors){
                humanChoice = newHumanChoice;
                return humanChoice;
            }
        }
    }
   }

    function playRound(humanChoice, computerChoice){
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {

            humanScore++; 
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        
        } else if (humanChoice === computerChoice) {
            console.log(`It's a draw! Both chose ${humanChoice}`);
        
        } else {
            computerScore++; 
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for( let i=0; i<5; i++){
        let computerChoiceP = getComputerChoice();
        console.log(computerChoiceP);
        let humanChoiceP = getHumanChoice();

        playRound(humanChoiceP, computerChoiceP);
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if(humanScore > computerScore) {
        console.log(`You won the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if(computerScore > humanScore) {
        console.log(`You lost the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

}

let result = playGame();
console.log(result);

