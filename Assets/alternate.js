/** @format */

// set up all the variables here
//container where quiz questions display
var quizContainer = document.getElementsByClassName("quiz");
//container holding the results
var scoreContainer = document.getElementById("score");
//container holding the starting question
var instructionsContainer = document.getElementById("start");
var buttonContainer = document.getElementById("buttons");

//buttons
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var backButton = document.getElementById("previous");

//slides of individual questions
//var slides = document.querySelectorAll(".slide");
//let currentSlide = 0;

//set up array to display all the Q/As, using object properties
var questions = [
    {
        question: "Which of the following is not a semantic element?",
        answers: {
            a: "section",
            b: "article",
            c: "div",
            d: "heder",
        },
        correctAnswer: "c",
    },
    {
        question:
            "Media queries define how css styles are applied in relation to the characteristics of the _________",
        answers: {
            a: "window",
            b: "console",
            c: "device viewport",
            d: "server",
        },
        correctAnswer: "c",
    },
    {
        question: "In CSS, when/where must media queries be displayed? ",
        answers: {
            a: "first",
            b: "anywhere",
            c: "in a seperate file",
            d: "last",
        },
        correctAnswer: "d",
    },
    {
        question: "Who invented Javascript?",
        answers: {
            a: "Elon Musk",
            b: "Brendan Eich",
            c: "Bill Gates",
            d: "Steve Jobs",
        },
        correctAnswer: "b",
    },
];

instructionsContainer.textContent =
	"Welcome to the quiz on coding! Once you press start,you will have 75 seconds to complete this multiple choice quiz. If you get a question wrong, time will be deducted. You're final score will be the number of seconds left. Post your initials with your score at the end!";

    

//this hides the quiz elements when page first loads
	window.addEventListener("load", function (event) {
		submitButton.style.visibility = "hidden";
		nextButton.style.visibility = "hidden";
        backButton.style.visibility = "hidden";
        scoreContainer.style.visibility = "hidden";
        //quizContainer.style.visibility = "hidden";
    });
    

	//set up timer
	var timeEl = document.querySelector("#time");
	var startButton = document.querySelector("#start-button");
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


    

   //function to start our quiz 
   startButton.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        countDown();
       instructionsContainer.textContent = (questions[0].question);

        //trigger quiz to display
        //buildQuiz();

     
        //trigger buttons to display and other elements to hide
        //instructionsContainer.style.visibility = "hidden";
        startButton.style.visibility = "hidden";
        submitButton.style.visibility = "visible";
        nextButton.style.visibility = "visible";
        backButton.style.visibility = "visible";
        scoreContainer.style.visibility = "visible";
        

    }
});