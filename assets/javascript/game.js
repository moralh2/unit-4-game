var winScore = 0
var loseScore = 0
var totalScore = 0
var randomNumber = 0
var j1 = 0
var j2 = 0
var j3 = 0
var j4 = 0

$(document).ready(function() {
    
    newGame()
    $(".jewel-blue").click( addScore(j1) );
    $(".jewel-red").click( addScore(j2) );
    $(".jewel-purple").click( addScore(j3) );
    $(".jewel-green").click( addScore(j4) );
});

function newGame() {

    totalScore = 0
    randomNumber = getRandomNumber(19,120)
    j1 = getRandomNumber(1,12)
    j2 = getRandomNumber(1,12)
    j3 = getRandomNumber(1,12)
    j4 = getRandomNumber(1,12)
    updatePageLayout()
}

function addScore(value) {
    console.log("here")
    console.log(value)
    console.log(totalScore)
    totalScore += value
    console.log(totalScore)
    updatePageLayout()
    gameOver()
}

function gameOver() {
    if (totalScore == randomNumber) {
        winScore++
        newGame()
    }
    else if (totalScore > randomNumber) {
        loseScore++
        newGame()
    }
}

function getRandomNumber(min, max) {
    random = Math.floor(Math.random() * (max - min) + min);
    return random
}

function updatePageLayout() {
    console.log('in page layout')
    $('#total-score').text(totalScore)
    $('#total-wins').text(winScore)
    $('#total-losses').text(loseScore)
    $('#random-number').text(randomNumber)
}

