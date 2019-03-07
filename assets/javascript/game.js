// import { type } from "os";

//VARIABLES
var score = 0;
var crystalNumber1;
var crystalNumber2;
var crystalNumber3;
var crystalNumber4;
var randomNumber = 0;
var crystalCounter = 0;
var win = 0;
var loss = 0;
var winsText;
var lossesText;


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var totalNumber = document.getElementById("total");


//Generate random number - reference Math.random function
randomNumber = Math.floor(Math.random() * 120) + 19

//Display random number
$("#number-to-guess").text(randomNumber);
$("#wins").text(win);
$("#losses").text(loss);


// Creating random numbers to the 4 crystals
crystalNumber1 = Math.floor(Math.random() * 12) + 1
crystalNumber2 = Math.floor(Math.random() * 12) + 1
crystalNumber3 = Math.floor(Math.random() * 12) + 1
crystalNumber4 = Math.floor(Math.random() * 12) + 1

//Generate new random guess number after each win/loss
var newNumber = function () {
    // When a user wins or loses, reset random number
    randomNumber = Math.floor(Math.random() * 120) + 19
    // Display new random Number
    $("#number-to-guess").text(randomNumber);

    // Also reset crystal values 
    // Create random numbers for crystals
    crystalNumber1 = Math.floor(Math.random() * 12) + 1
    crystalNumber2 = Math.floor(Math.random() * 12) + 1
    crystalNumber3 = Math.floor(Math.random() * 12) + 1
    crystalNumber4 = Math.floor(Math.random() * 12) + 1

    // Assigns random number values as data attributes to crystals
    $("#crystalNumber1").attr("data-crystal", crystalNumber1)
    $("#crystalNumber2").attr("data-crystal", crystalNumber2)
    $("#crystalNumber3").attr("data-crystal", crystalNumber3)
    $("#crystalNumber4").attr("data-crystal", crystalNumber4)

    crystalCounter = 0;
    // Displays value of crystals clicked
    $("#value").text(crystalCounter);
}

//Register when user has clicked crystal
$(".crystal").on("click", function () {
    var crystalValue = $(this).attr("data-crystal")
    crystalValue = parseInt(crystalValue);

    crystalCounter += crystalValue;
    console.log(crystalCounter);
    console.log(typeof(crystalCounter))
    console.log(typeof(randomNumber))
    $("#value").text(crystalCounter);
    //Determine wins/loss
    if (crystalCounter === randomNumber) {
        win++;
        winsText.textContent = "Wins: " + win;
        newNumber();
    } else if (crystalCounter > randomNumber) {
        loss++;
        lossesText.textContent = "Losses: " + loss;
        newNumber();
    }
})

// Assigns number value as data attribute when user clicks crystals
$("#crystalNumber1").attr("data-crystal", crystalNumber1)
$("#crystalNumber2").attr("data-crystal", crystalNumber2)
$("#crystalNumber3").attr("data-crystal", crystalNumber3)
$("#crystalNumber4").attr("data-crystal", crystalNumber4)








