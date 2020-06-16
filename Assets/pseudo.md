colors for containers... 

blue from image:  code:	#84dbff
salmon: #f8a186
yellowish: #f8dd9d

switch main div background color blue for correct and orange for wrong and that makes the top color switch too

need an array of elements that get displayed depending on where in quiz you are

```
GIVEN I am taking a code quiz...

on first load.. click the start button and that gets the timer to start counting down and moves on to display qquestion one so an array of all the questions is needed
//put ids in place in the indesx html to use to add elements into
0
TIMER
timer container in top right corner
listen for the event click on the start button to display timer
final scored becomes the value left in the timer

click a choice from the questions.
then it will say right or wrong, taking time down if its wrong, then move to the next question
THEN I am presented with another question

apply data set within thew answers to hoose when to display each element

WHEN all questions are answered or the timer reaches 0
the game is ober and it saysd all done, enter your score and initials


For each question, we’ll want to generate the correct HTML, so next  create an array to hold the list of possible answers.

use a loop to fill in the possible answers for the current question. For each choice, we’re creating an HTML radio button, which we enclose in a <label> element. This is so that users will be able to click anywhere on the answer text to select that answer. If the label was omitted, then users would have to click on the radio button itself, which is not very accessible.

WHEN I save my initials and score
THEN I can view my previous scores
then can start over or clear the scores
```

once high score is submitted then go to the seperate html page and it gets displaued, the number and the initials


add bootstrap style to the buttons and choices

perhaps use data-index for answers one at a time

score becomes however much time is left

use style.hidden when moving to next portion

now one queswtion at a time.. 
need: way to show and hid questioons and buttons to navigate the quiz