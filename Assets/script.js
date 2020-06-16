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
            a:"window",
            b:"console",
            c:"device viewport",
            d:"server",
        },
        correctAnswer: "c"
    },
    {
        question: "In CSS, when/where must media queries be displayed? ",
        answers: {
            a:"first",
            b:"anywhere",
            c:"in a seperate file",
            d:"last",
        },
        correctAnswer: "d"
    },
	{
        question: "Who invented Javascript?",
        answers: {
            a:"Elon Musk",
            b:"Brendan Eich",
            c:"Bill Gates",
            d:"Steve Jobs",
        },
        correctAnswer: "b"
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



//setting up functions to get the quiz going
function buildQuiz(){
    //variable to store the user selection
    var output = [];

    //apply .forEach to the array of questions
    //arguments passed will be the questions and the index of that question 
    questions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store list of possible answers and variable for each possible answer
            var answers= [];  
            for(letter in currentQuestion.answers) {
                //adding html radio button
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>
                );
            }
            
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
            
        }
    );



}



function showResults(){}

//show results on submit button
submitButton.addEventListener("click", showResults);


