
// dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// title change
var title = document.querySelectorAll("h1")[0];
var flag = document.querySelectorAll("span")[0];
var flag2 = document.querySelectorAll("span")[1];
if (randomNumber1 > randomNumber2){
  title.innerHTML = "Player 1 Wins!";
  flag.innerHTML = "⚐";
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 Wins!";
  flag2.innerHTML ="⚐";
} else {
  title.innerHTML = "It's a Draw!";
  flag
}
