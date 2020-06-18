/** @format */

// set up all the variables here
//container where quiz questions display
var quizContainer = document.getElementsByClassName("quiz");
//container holding the results
var scoreContainer = document.getElementById("score");
//container holding the starting question ans quiz questions
var instructionsContainer = document.getElementById("start");

var formContainer = document.getElementById("score-form");
var buttonContainer = document.getElementById("buttons");
var answerContainer = document.getElementById("answers");

//timer
var timer = document.getElementById("timer");

//buttons
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var backButton = document.getElementById("previous");

//answer containers
var aContainer = document.getElementById("aChoice");
var bContainer = document.getElementById("bChoice");
var cContainer = document.getElementById("cChoice");
var dContainer = document.getElementById("dChoice");

//form variables
var userInput = document.querySelector("#initials");
var scoreSubmitButton = document.querySelector("#score-submit");
var userPost = document.querySelector("#posted-scores");

//set up array to display all the Q/As, using object properties
var questions = [
	{
		question: "Which of the following is not a semantic element?",
		answers: {
			a: "section",
			b: "article",
			c: "div",
			d: "header",
		},
		correctAnswer: "c",
	},
	{
		question:
			"Media queries define how css styles are applied in relation to the characteristics of the _________.",
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
	"Welcome to the quiz on coding! Once you press start, you will have 75 seconds to complete this multiple choice quiz. If you get a question wrong, ten seconds of time will be deducted. Your final score will be the number of seconds left. Post your initials with your score at the end!";

//this hides the quiz elements when page first loads
window.addEventListener("load", function (event) {
	submitButton.style.visibility = "hidden";
	nextButton.style.visibility = "hidden";
	backButton.style.visibility = "hidden";
	scoreContainer.style.visibility = "hidden";
	answerContainer.style.visibility = "hidden";
	timer.style.visibility = "hidden";
	formContainer.style.visibility = "hidden";
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

		timeEl.textContent = secondsLeft;
		//setup here the end of game and enter highscores etc
		//if (secondsLeft ===0) {}
		
		
	}, 1000);
}

//function for high scores to local storage

function renderHighScores() {
	var highScore = localStorage.getItem("initials", userInput);

	//localStorage.getItem("initials", userInput);
}

//function to start our quiz
startButton.addEventListener("click", function (event) {
	if (event.target.matches("button")) {
		countDown();
		//display questions and answers and timer
		timer.style.visibility = "visible";
		instructionsContainer.textContent = questions[0].question;
		aContainer.textContent = questions[0].answers.a;
		bContainer.textContent = questions[0].answers.b;
		cContainer.textContent = questions[0].answers.c;
		dContainer.textContent = questions[0].answers.d;

		//trigger buttons to display and other elements to hide
		//instructionsContainer.style.visibility = "hidden";
		startButton.style.visibility = "hidden";
		nextButton.style.visibility = "visible";
		scoreContainer.style.visibility = "visible";
		answerContainer.style.visibility = "visible";

		aContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Incorrect! Try again or click next.";
				//decrease time
				secondsLeft = parseInt(secondsLeft);
				secondsLeft = secondsLeft - 10;
			}
		});
		bContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Incorrect! Try again or click next.";
				//decrease time
				secondsLeft = parseInt(secondsLeft);
				secondsLeft = secondsLeft - 10;
			}
		});
		cContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Correct! Click next to move on.";
			}
		});
		dContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Incorrect! Try again or click next.";
				//decrease time
				secondsLeft = parseInt(secondsLeft);
				secondsLeft = secondsLeft - 10;
			}
		});

		//code for next button
		nextButton.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				//display next question
				instructionsContainer.textContent = questions[1].question;
				aContainer.textContent = questions[1].answers.a;
				bContainer.textContent = questions[1].answers.b;
				cContainer.textContent = questions[1].answers.c;
				dContainer.textContent = questions[1].answers.d;

				//find right answer
				aContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Incorrect! Try again or click next.";
						//decrease time
						secondsLeft = parseInt(secondsLeft);
						secondsLeft = secondsLeft - 10;
					}
				});
				bContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Incorrect! Try again or click next.";
						//decrease time
						secondsLeft = parseInt(secondsLeft)
						secondsLeft = secondsLeft -10;
					}
				});
				cContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Correct!Click next to move on.";
						
					}
				});
				dContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Incorrect! Try again or click next.";
						//decrease time
						secondsLeft = parseInt(secondsLeft)
						secondsLeft = secondsLeft -10;
					}
				});
			}
			nextButton.addEventListener("click", function (event) {
				if (event.target.matches("button")) {
					instructionsContainer.textContent = questions[2].question;
					aContainer.textContent = questions[2].answers.a;
					bContainer.textContent = questions[2].answers.b;
					cContainer.textContent = questions[2].answers.c;
					dContainer.textContent = questions[2].answers.d;
					//find right answer
					aContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent =
								"Incorrect! Try again or click next.";
							//decrease time
							secondsLeft = parseInt(secondsLeft)
							secondsLeft = secondsLeft -10;
						}
					});
					bContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent =
								"Incorrect! Try again or click next.";
							//decrease time
							secondsLeft = parseInt(secondsLeft)
							secondsLeft = secondsLeft -10;
						}
					});
					cContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent =
								"Incorrect! Try again or click next.";
							//decrease time
						}
					});
					dContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent = "Correct!Click next to move on.";
							
						}
					});
				}

				nextButton.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						instructionsContainer.textContent = questions[3].question;
						aContainer.textContent = questions[3].answers.a;
						bContainer.textContent = questions[3].answers.b;
						cContainer.textContent = questions[3].answers.c;
						dContainer.textContent = questions[3].answers.d;
						//next button hides on the last question
						nextButton.style.visibility = "hidden";
						//submit button appears on last question
						submitButton.style.visibility = "visible";

						//find right answer
						aContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent =
									"Incorrect! Try again or click next.";
								//decrease time
								secondsLeft = parseInt(secondsLeft)
								secondsLeft = secondsLeft -10;
							}
						});
						bContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent = "Correct!Click next to move on.";
								
							}
						});
						cContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent =
									"Incorrect! Try again or click next.";
								//decrease time
								secondsLeft = parseInt(secondsLeft)
								secondsLeft = secondsLeft -10;
							}
						});
						dContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent =
									"Incorrect! Try again or click next.";
								//decrease time
								secondsLeft = parseInt(secondsLeft)
								secondsLeft = secondsLeft -10;
							}
						});
					}

					submitButton.addEventListener("click", function (event) {
						//remove and display necessary buttons/form
						aContainer.style.visibility = "hidden";
						bContainer.style.visibility = "hidden";
						cContainer.style.visibility = "hidden";
						dContainer.style.visibility = "hidden";
						submitButton.style.visibility = "hidden";
						formContainer.style.visibility = "visible";

						instructionsContainer.textContent =
							"All done! You're final score is: " + secondsLeft;
						instructionsContainer.style.fontSize = "3em";
						clearInterval(timerInterval);
						timer.style.visibility = "hidden";

						scoreSubmitButton.addEventListener("click", function (event) {
							event.preventDefault();
							console.log(event);

							var userInput = document.querySelector("#initials").value;
							localStorage.setItem("initials", userInput);
							renderHighScores();
							window.location = "Assets/highscores.html";

							userPost.textContent = userInput;
						});
					});
				});
			});
		});
	}
});
