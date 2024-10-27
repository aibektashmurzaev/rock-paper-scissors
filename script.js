    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const outcome = document.querySelector('.outcome');

     function getComputerChoice(){
         let randomNumber = Math.floor(Math.random() * 3) + 1;
         switch(randomNumber){
         case 1: return 'rock';
         case 2: return 'paper';
         case 3: return 'scissors';
        } 
    }

    function playRound(humanChoice, computerChoice){
        console.log(humanChoice, computerChoice);
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
            const p = document.createElement('p');
            p.innerText = `You won, ${humanChoice} beats ${computerChoice}`;
            outcome.appendChild(p);
        
        } else if (humanChoice === computerChoice) {
            const p = document.createElement('p');
            p.innerText = `It's a draw! Both chose ${humanChoice}`;
            outcome.appendChild(p); 
        } else {
            const p = document.createElement('p');
            p.innerText = `You lost! ${computerChoice} beats ${humanChoice}`;
            outcome.appendChild(p);
        }
    }

    rockButton.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const humanChoice = 'rock';
        playRound(humanChoice, computerChoice);

    });


    paperButton.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const humanChoice = 'paper';
        playRound(humanChoice, computerChoice);

    });


    scissorsButton.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const humanChoice = 'scissors';
        playRound(humanChoice, computerChoice);

    });




