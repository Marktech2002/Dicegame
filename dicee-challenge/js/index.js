// dice challenge randomisation
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-dice6

var ramdomImageSource = "images/" + randomDiceImage; //sources

var image1 = document.querySelectorAll("img")[0]; // selcet the first image

image1.setAttribute("src", ramdomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var ramdomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1]; // the second image

image2.setAttribute("src", ramdomImageSource2);

// control statements for the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "😁Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "😁Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "😤 Draw !!!";
}
