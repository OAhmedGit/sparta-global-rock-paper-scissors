var playerChoice = "", computerChoice, playAgain, playerPoints = 0, computerPoints = 0;

while(playerPoints < 5 && computerPoints < 5){

    function computerChoice(){
        computerChoice = Math.random();
    
        if(computerChoice <= 0.3){
            computerChoice = "rock";
        } else if(computerChoice > 0.3 && computerChoice <= 0.6){
            computerChoice = "paper";
        } else{
            computerChoice = "scissors";
        }
    }
    
    function playerChoice(){
        playerChoice = prompt("Pick (r)ock (p)aper or (s)cissors");
    
        if(playerChoice == "r"){
            playerChoice = "rock";
        } else if(playerChoice == "p"){
            playerChoice = "paper";
        } else if(playerChoice == "s"){
            playerChoice = "scissors";
        }
    }
    
    function compareChoices(pChoice, cChoice){
        if(pChoice == cChoice){
            alert("Draw!");
        } 
        else if(pChoice == "rock" && cChoice == "scissors"){
            alert("rock beats scissors, you win!");
            playerPoints++;
        } 
        else if(pChoice == "paper" && cChoice == "rock"){
            alert("paper beats rock, you win!");
            playerPoints++;
        }
        else if(pChoice == "scissors" && cChoice == "paper"){
            alert("scissors beats paper, you win!");
            playerPoints++;
        }
        else if(cChoice == "rock" && pChoice == "scissors"){
            alert("rock beats scissors, you lose!");
            computerPoints++;
        } 
        else if(cChoice == "paper" && pChoice == "rock"){
            alert("paper beats rock, you lose!");
            computerPoints++;
        }
        else if(cChoice == "scissors" && pChoice == "paper"){
            alert("scissors beats paper, you lose!");
            computerPoints++;
        }
    }

    function checkPoints(){
        alert("Your points: " + playerPoints + "\n CPU points: " + computerPoints);

        if(playerPoints == 5 || computerPoints == 5){
            playAgain = prompt("Play again? y / n");

            if(playAgain == "y"){
                playerPoints = 0;
                computerPoints = 0;
            }
        }
    }

    playerChoice();
    computerChoice();
    compareChoices(playerChoice, computerChoice);
    checkPoints();
}




