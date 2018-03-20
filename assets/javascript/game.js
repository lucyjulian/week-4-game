var randomNumber = 0
var crystal1Number
var crystal2Number
var crystal3Number
var crystal4Number
var wins = 0
var losses = 0
var totalScore =0
var win = false;
$("#wins").html(wins);
$("#totalScore").html(totalScore);
$("#losses").html(losses);

//generate the random number (between 15 and 75)
function generateRandomNumber(){
    randomNumber = (Math.floor(Math.random() * 60) + 15);
    $("#randomNumber").html(randomNumber);
}
generateRandomNumber();

//assign random values to each of the 4 crystals (between 1 and 10)
function randomCrystals(){
    crystal1Number = (Math.floor(Math.random() * 10) + 1);
    crystal2Number = (Math.floor(Math.random() * 10) + 1);
    crystal3Number = (Math.floor(Math.random() * 10) + 1);
    crystal4Number = (Math.floor(Math.random() * 10) + 1);
}
randomCrystals();

//winner function
function winner(){
    wins++;
    $("#wins").html(wins);
    generateRandomNumber();
    randomCrystals();
    totalScore = 0;
    $("#totalScore").html(totalScore);
}

//loser function
function loser(){
    losses++;
    $("#losses").html(losses);
    generateRandomNumber();
    randomCrystals();
    totalScore = 0;
    $("#totalScore").html(totalScore);
}

//compound total score when a crystal is clicked

$("#crystal1").on("click", function(){
    totalScore = totalScore + crystal1Number;
    $("#totalScore").html(totalScore);
    console.log(totalScore);
    if (totalScore === randomNumber){
        winner();
    }
    if (totalScore > randomNumber){
        loser();
    }
})
$("#crystal2").on("click", function(){
    totalScore = totalScore + crystal2Number;
    $("#totalScore").html(totalScore);
    console.log(totalScore);
    if (totalScore === randomNumber){
        winner();
    }
    if (totalScore > randomNumber){
        loser();
    }
})
$("#crystal3").on("click", function(){
    totalScore = totalScore + crystal3Number;
    $("#totalScore").html(totalScore);
    console.log(totalScore);
    if (totalScore === randomNumber){
        winner();
    }
    if (totalScore > randomNumber){
        loser();
    }
})
$("#crystal4").on("click", function(){
    totalScore = totalScore + crystal4Number;
    $("#totalScore").html(totalScore);
    console.log(totalScore);
    if (totalScore === randomNumber){
        winner();
    }
    if (totalScore > randomNumber){
        loser();
    }
})
