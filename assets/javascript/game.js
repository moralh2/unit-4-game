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

    $("#jewel-blue").on("click", function() {
        addScore(j1)
    });

    $("#jewel-red").on("click", function() {
        addScore(j2)
    });

    $("#jewel-purple").on("click", function() {
        addScore(j3)
    });

    $("#jewel-green").on("click", function() {
        addScore(j4)
    });

});

function newGame() {

    totalScore = 0

    var min = 19
    var max = 120
    randomNumber = Math.floor(Math.random() * (max - min) + min);

    [j1, j2, j3, j4] = getFourRandomNumbers()

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

function getFourRandomNumbers() {
    var min = 1
    var max = 12
    var arr = []
    while(arr.length < 4){
        var randomnumber = Math.floor(Math.random() * (max - min) + min);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr
}

function updatePageLayout() {
    $('#total-score').text(totalScore)
    $('#total-wins').text(winScore)
    $('#total-losses').text(loseScore)
    $('#random-number').text(randomNumber)
}