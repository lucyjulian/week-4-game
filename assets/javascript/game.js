var randomNumber 
var crystal1Number
var crystal2Number
var crystal3Number
var crystal4Number
var wins = 0
var losses = 0
var totalScore = 0

$("#totalScore").html(totalScore);

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

//compound total score when a crystal is clicked
$("#crystal1").on("click", function(){
    totalScore = totalScore + crystal1Number;
    $("#totalScore").html(totalScore);
})
$("#crystal2").on("click", function(){
    totalScore = totalScore + crystal2Number;
    $("#totalScore").html(totalScore);
})
$("#crystal3").on("click", function(){
    totalScore = totalScore + crystal3Number;
    $("#totalScore").html(totalScore);
})
$("#crystal4").on("click", function(){
    totalScore = totalScore + crystal4Number;
    $("#totalScore").html(totalScore);
})

//if the total score = random number, increment wins by 1
// function checkForWin(){
//     if (totalScore === randomNumber){
//     wins++;
//     $("#wins").html(wins);
//     generateRandomNumber();
//     randomCrystals();
//     totalScore = 0;
// }


//if total score > random number, increment losses, 
//generate new random number, and reset total score count,
//give crystals new values

