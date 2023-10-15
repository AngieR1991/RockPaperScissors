
let value = 0;
let playerWins = 0;
let computerWins = 0;
let computerSelection = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const winPrompt = document.getElementById('winPrompt');
const descriptionPrompt = document.getElementById('descriptionPrompt');

const playerImg = document.getElementById('playerImage');
const computerImg = document.getElementById('computerImage');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));


function handleClick(playerSelection)
{
    if(playerWins < 5 && computerWins < 5)
    {
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    else
    {
        winnerPopUp(playerWins, computerWins);
        resetGame();
    }
}

function getComputerChoice(){
    value = Math.floor(Math.random() * 3);

    if(value == 0)
        return 'rock';
    else if(value ==1)
        return 'paper';
    else
        return 'scissors';
}

function updateScore(playerWins, computerWin)
{
    playerScore.textContent = "Player: " + playerWins;
    computerScore.textContent = "Computer: " + computerWins;
}

function updateImages(playerSelection, computerSelection)
{
    switch(playerSelection)
    {
        case 'rock'     : playerImg.src = "./images/rock.jpg";
                          break;
        case 'paper'    : playerImg.src = "./images/paper.jpg";
                          break;
        case 'scissors' : playerImg.src = "./images/scissors.jpg";
                          break;
        default         : playerImg.src = "./images/rock.jpg";
    }

    switch(computerSelection)
    {
        case 'rock'     : computerImg.src = "./images/rock.jpg";
                          break;
        case 'paper'    : computerImg.src = "./images/paper.jpg";
                          break;
        case 'scissors' : computerImg.src = "./images/scissors.jpg";
                          break;
        default         : computerImg.src = "./images/introImage.jpg";
    }  
}

function winnerPrompt(playerSelection, computerSelection)
{
    if ((playerSelection   == 'rock' && computerSelection =='scissors') || 
        (computerSelection == 'rock' && playerSelection =='scissors'))
    {
       descriptionPrompt.textContent = "Rock beats scissors";
    }
    else if ((playerSelection   == 'paper' && computerSelection == 'rock') || 
             (computerSelection == 'paper' && playerSelection   == 'rock'))
    {
        descriptionPrompt.textContent = "Paper beats rock";
    }
    else if ((playerSelection  == 'scissors' && computerSelection == 'paper') ||
            (computerSelection == 'scissors' && playerSelection   == 'paper'))
    {
        descriptionPrompt.textContent = "Scissors beats paper";
    }
    else{
        descriptionPrompt.textContent = "Y'all are the same";
    }
}


function playRound(playerSelection, computerSelection)
{
    updateImages(playerSelection, computerSelection);

    if((playerSelection == 'rock'    && computerSelection == 'scissors') ||
       (playerSelection == 'paper'   && computerSelection == 'rock') ||
       (playerSelection =='scissors' && computerSelection == 'papers'))
    {
        playerScore.textContent = "Player: " + ++playerWins;
        winPrompt.textContext = 'You won!';
        winnerPrompt(playerSelection, computerSelection);
    }
    else if((playerSelection == 'rock'     && computerSelection == 'paper') ||
            (playerSelection == 'paper'    && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock'))
    {
        computerScore.textContent = "Computer: " + ++computerWins;
        winPrompt.textContent = 'You lost.';
        winnerPrompt(playerSelection, computerSelection);
    }
    else
    {
        winPrompt.textContent = "It's a tie";
        winnerPrompt(playerSelection, computerSelection);
    } 
    
}


function winnerPopUp(playerWins, computerWins)
{
    if(playerWins ==5)
    {
        alert("You Won!!! CONGRATS!!!!!!");
    }   
    else
    {
        alert("You lost. Boo");
    }
}

function resetGame()
{
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = "Player: " + playerWins;
    computerScore.textContent = "Computer: " + computerWins;
    winPrompt.textContent = "Want to play? Beat the computer 5 times to win!";
    descriptionPrompt.textContent = "Click an option to start the game";
    playerImg.src = "./images/introImage.jpg";
    computerImg.src = "./images/introImage.jpg";  
}