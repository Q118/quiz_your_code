/** @format */


// set up variables tpo get timer going
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

//set up variables to display all the Q/As, using object properties 
var questions = [
    {
        question: "Which of the following is" <em> "not" </em> "a semantic element?",
        answers: {
            a: "<section>",
            b: "<article>",
            c: "<p>",
            d: "<heder>",
        },
        correctAnswer: "c"
    },
    {
        question: "Media queries define how css styles are applied in relation to the characteristics of the _________",
        answers: {
            a:"",
            b:"",
            c:"",
            d:"",
        },
        correctAnswer: "c"
    },
    {
        question: "In CSS, when must media queries be displayed? ",
        answers: {
            a:"",
            b:"",
            c:"",
            d:"",
        },
        correctAnswer: "d"
    },
	{
        question: "Who invented Javascript?",
        answers: {
            a:"",
            b:"",
            c:"",
            d:"",
        },
        correctAnswer: "d"
    }
];




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

//event listener for click of start button and countdown functin gets called
startButton.addEventListener("click", function (event) {
	if (event.target.matches("button")) {
        countDown();
        //trigger quiz to display
        buildQuiz();
	}
});


function buildQuiz(){}

function showResults(){}

//show results on submit button
submitButton.addEventListener("click", showResults);


