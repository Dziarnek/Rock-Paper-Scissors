    //New game

var newGameBtn = document.getElementById("js-new-game");

document.getElementById("game").style.display = "none";
document.getElementById("js-new-game-section" && "winner-section").style.display = "none";

function setNewGame() {
    document.getElementById("game").style.display = "block";
    document.getElementById("js-new-game-section").style.display = "none";
    var playerN = prompt("Please enter your name", "Player");
        if ((typeof(playerN) == "string") && (playerN != "")){
                playerName.innerHTML = playerN;
        };

    var plPoints = 0,
        comPoints = 0;

        playerPoints.innerHTML = plPoints;
        computerPoints.innerHTML = comPoints;
        playerWinner.innerHTML = "";
        computerWinner.innerHTML = "";
};

newGameBtn.addEventListener("click", setNewGame);

    //Computer

function getComputerPick() {
    var possiblePicks = ['Rock', 'Paper', 'Scissors'];
        if (possiblePicks[Math.floor(Math.random()*3)] == "Rock") {
                computerPick = "Rock"
        } else if (possiblePicks[Math.floor(Math.random()*3)] == "Paper") {
                computerPick = "Paper";
        } else if (possiblePicks[Math.floor(Math.random()*3)] == "Scissors") {
                computerPick = "Scissors";     
        };
        computerChoice.innerHTML = computerPick;
};

    //Player

var rock = document.getElementById('js-rock'),
    paper = document.getElementById('js-paper'),
    scissors = document.getElementById('js-scissors'),
    playerPick = 0,
    computerPick = 0;

    rock.addEventListener('click', plPickRock);
    paper.addEventListener('click', plPickPaper);
    scissors.addEventListener('click', plPickScissors);

function plPickRock() {
    playerPick = "Rock"
    playerChoice.innerHTML = playerPick;
    getComputerPick();
    checkWinner(playerPick, computerPick)
};
function plPickPaper() {
    playerPick = "Paper";
    playerChoice.innerHTML = playerPick;
    getComputerPick();
    checkWinner(playerPick, computerPick)
};
function plPickScissors() {
    playerPick = "Scissors";
    playerChoice.innerHTML = playerPick;
    getComputerPick();
    checkWinner(playerPick, computerPick)
};

    //Checking who won

function checkWinner(playerPickElm, computerPickElm) {
    playerWinner.innerHTML = computerWinner.innerHTML = ""
    var winnerIs = "player";
    if (playerPickElm == computerPickElm) {
        winnerIs = 'draw';
    } else if (
        (computerPickElm == 'Rock' &&  playerPickElm == 'Scissors') ||
        (computerPickElm == 'Scissors' &&  playerPickElm == 'Paper') ||
        (computerPickElm == 'Paper' &&  playerPickElm == 'Rock')) {

        winnerIs = 'computer';
    };

    if (winnerIs == 'player') {
        playerWinner.innerHTML = "Win!";
        playerPoints.innerHTML++;
    } else if (winnerIs == 'computer') {
        computerWinner.innerHTML = "Win!";
        computerPoints.innerHTML++;
    } else if (winnerIs == 'draw') {
        playerWinner.innerHTML = "Draw!";
        computerWinner.innerHTML = "Draw!";
    };

function endGame() {
    document.getElementById("js-new-game-section").style.display = "flex";
    document.getElementById("winner-section").style.display = "block";
    document.getElementById("game").style.display = "none";
}

    if (playerPoints.innerHTML == 10) {
        winner.innerHTML = (playerName.innerHTML + "!");
        endGame();
    };
    if (computerPoints.innerHTML == 10) {

        winner.innerHTML = "Computer!";
        endGame();
    };
};