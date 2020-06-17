/** @format */

// set up all the variables here
//container where quiz questions display
var quizContainer = document.getElementsByClassName("quiz");
//container holding the results
var resultsContainer = document.getElementById("results");
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

//append elements to containers
//quizContainer.appendChild(instructionsContainer);
//buttonContainer.appendChild(submitButton);
//buttonContainer.appendChild(nextButton);
//buttonContainer.appendChild(backButton);

instructionsContainer.textContent =
	"Welcome to the quiz on coding! Once you press start,you will have 75 seconds to complete this multiple choice quiz. If you get a question wrong, time will be deducted. You're final score will be the number of seconds left. Post your initials with your score at the end!";

//this hides the quiz elements when page first loads
	window.addEventListener("load", function (event) {
		submitButton.style.visibility = "hidden";
		nextButton.style.visibility = "hidden";
        backButton.style.visibility = "hidden";
        resultsContainer.style.visibility = "hidden";
    });
    
    