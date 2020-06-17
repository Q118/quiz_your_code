/** @format */

// set up all the variables here
//containers
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var instructionsContainer = document.getElementById("start");
var buttonContainer = document.getElementById("buttons");
//buttons
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var backButton = document.getElementById("previous");


//slides of individual questions
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//append elements to containers
quizContainer.appendChild(instructionsContainer);
buttonContainer.appendChild(submitButton);
buttonContainer.appendChild(nextButton);
buttonContainer.appendChild(backButton);

//set quiz buttons to be hidden when page loads
window.addEventListener("load", (event) => {
	instructionsContainer.innerHTML =
		"Welcome to the quiz on coding! Once you press start,you will have 75 seconds to complete this multiple choice quiz. If you get a question wrong, time will be deducted. You're final score will be the number of seconds left. Post your initials with your score at the end!";

	submitButton.style.visibility = "hidden";
	nextButton.style.visibility = "hidden";
	backButton.style.visibility = "hidden";
});

//set up variables to display all the Q/As, using object properties
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
		instructionsContainer.style.visibility = "hidden";

		//trigger quiz to display
		buildQuiz();
		//trigger buttons to display
		startButton.style.visibility = "hidden";
		submitButton.style.visibility = "visible";
		nextButton.style.visibility = "visible";
		backButton.style.visibility = "visible";
		showSlide(currentSlide);
	}
});

//setting up functions to get the quiz going
function buildQuiz() {
	//variable to store the user selection
	var output = [];

	//apply .forEach to the array of questions
	//arguments passed will be the questions and the index of that question
	//code for each question gets looped through
	questions.forEach((currentQuestion, questionNumber) => {
		//variable to store list of possible answers and variable for each possible answer
		var answers = [];
		for (letter in currentQuestion.answers) {
			//adding html radio button
			answers.push(
				`<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
			);
		}
		//add the current question and its answers to the output
		//use join to take the list of answers and put them together in one string that
		//gets outputted into the answers div
		output.push(
			`<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join(" ")} </div>`
		);
	});
	//joining together the HTML generated above to show it to the page
	quizContainer.innerHTML = output.join(" ");
}

//build showResults function to loop over the answers, check them, and show if right or wrong
function showResults() {
	//get answers containers from quiz
	var answerContainers = quizContainer.querySelectorAll(".answers");

	//keep track of user's answers for each question
	let numCorrect = 0;

	questions.forEach((currentQuestion, questionNumber) => {
		//find the answer the user selected
		var answerContainer = answerContainers[questionNumber];
		var selector = `input[name=question${questionNumber}]:checked`;
		var userAnswer = (answerContainer.querySelector(selector) || {}).value;

		//if right answer
		if (userAnswer === currentQuestion.correctAnswer) {
			//alert("correct!");
			numCorrect++;
			//set attribute to green colored class
			answerContainers[questionNumber].style.color = "green";
		}
		//wrong answer
		else {
			//alert("Wrong, nice try!");
			answerContainers[questionNumber].style.color = "red";
		}
	});

	// show number of correct answers out of total
	resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

//function to show a slide of a question
function showSlide(n) {
	//hide current slide by removing the active class
	//show the new slide by adding the active class 
	slides[currentSlide].classList.remove('active-slide');
	slides[n].classList.add('active-slide');
	currentSlide = n;
	if(currentSlide === 0){
	  backButton.style.display = 'none';
	}
	else{
	  backButton.style.display = 'inline-block';
	}
	if(currentSlide === slides.length-1){
	  nextButton.style.display = 'none';
	  submitButton.style.display = 'inline-block';
	}
	else{
	  nextButton.style.display = 'inline-block';
	  submitButton.style.display = 'none';
	}
  }

//show results on submit button
submitButton.addEventListener("click", showResults);
