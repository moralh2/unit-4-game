// initialize variables
var winScore = 0
var loseScore = 0
var totalScore = 0
var randomNumber = 0
var j1 = 0
var j2 = 0
var j3 = 0
var j4 = 0

// on doc ready, add on-click w/ function, associated to corresponding random number value (j1-j4)
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

// function for new game - init total score, random values (j1-j4), update html layout
function newGame() {
    totalScore = 0

    var min = 19
    var max = 120
    randomNumber = Math.floor(Math.random() * (max - min) + min);

    [j1, j2, j3, j4] = getFourRandomNumbers()

    updatePageLayout()
}

// fnc to add value passed as argument to the total score, then update html layout, and check if game ended
function addScore(value) {
    totalScore += value
    updatePageLayout()
    gameOver()
}

// fnc to verify if game ended
function gameOver() {
    // if total score and random number are equal, increment wins, start new game
    if (totalScore == randomNumber) {
        winScore++
        newGame()
    }
    // if total score exceeded random number, increment losses, start new game
    else if (totalScore > randomNumber) {
        loseScore++
        newGame()
    }
}

// fnc to select the 4 random numbers associated with the crystals
function getFourRandomNumbers() {
    // min and max [1,12]
    var min = 1
    var max = 12
    var odds = [1,3,5,7,9,11]
    var arr = []
    // loop through selecting a random number, adding it to the array if unique, until array has 4
    while(arr.length < 4){
        var randomnumber = Math.floor(Math.random() * (max - min) + min);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    console.log('---')
    console.log('Here are the random values...cheater')
    console.log(arr)
    console.log('---')


    // added this to swap first random value for an odd one if all 4 were originally even numbers
    if (!ensureOdd(arr)) {
        console.log('had to use - swap for odd')
        indexForOddInteger = Math.floor(Math.random() * 5)
        arr[0] = odds[indexForOddInteger]
    }
    return arr
}

// fnc to verify if array has odd number
function ensureOdd(array) {
    var odd = false
    for(i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            odd = true
        }
    }
    if (odd) {
        return true
    } 
    else {
        return false
    }
}

// fnc to upate text for wins, losses, total score, and the random number
function updatePageLayout() {
    $('#total-score').text(totalScore)
    $('#total-wins').text(winScore)
    $('#total-losses').text(loseScore)
    $('#random-number').text(randomNumber)
}