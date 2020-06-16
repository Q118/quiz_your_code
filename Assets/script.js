/** @format */

// mak an array with the 4 questions
// make a seperate array for each question's answers
var questions = [
	"1. Which of the following is <em> not </em> a semantic element?",
	"2. Media queries define how css styles are applied in relation to the characteristics of the _________",
	"3. In CSS, when must media queries be displayed? ",
	"4. Who invented Javascript?",
];

//set up timer
var timeEl = document.querySelector("#time");
var startButton = document.querySelector(".start-button");
//variable to track remaining time
var secondsLeft = 75;


//function to start countdown
function countDown() {
	timerInterval = setInterval(function () {
		secondsLeft--;

		timeEl.textContent = "Time Left: " + secondsLeft;

		//if (secondsLeft ===0) {
		//setup here the end of game and enter highscores etc
		//}
	}, 1000);
} 
countDown();
//event listener for click of start button and countdown functin gets called
