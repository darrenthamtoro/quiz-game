console.log("HELLO JS");

//VARIABLES 

var timerElement = document.querySelector(".timer-count");
var startButton = document.getElementById("startBtn");
var timerCount = 20;
var timerInterval;
var correctWrongELement = document.getElementById("correct-wrong");
// var wrong = document.querySelector(".wrong");
var currentIndex = 0;
var questionEl = document.getElementById("question");
var option1BTN = document.getElementById("option1Btn");
var option2BTN = document.getElementById("option2Btn");
var option3BTN = document.getElementById("option3Btn");
var option4BTN = document.getElementById("option4Btn");
var correctCount = 0;
var scoreBtn = document.getElementById("scoreBtn");

//Array of OJECTS 
var quizList = [
    //QIUESTION STARTS HERE 
    {
        question: "1. What is 1+1?",
        options: ["A. 1", "B. 2", "C. 3", "D. 4"],
        answer: "B. 2"

    },  //QIUESTION ENDS HERE 
    {
        question: "2. What is 3x3?",
        options: ["A. 9", "B. 18", "C. 20", "D. 6"],
        answer: "A. 9"

    },
    {
        question: "3. How many days are in a year? ",
        options: ["A. 120", "B. 365", "C. 275", "D. 180"],
        answer: "B. 365"

    },
    {
        question: "4. What is 5x2?",
        options: ["A. 15", "B. 7", "C. 10", "D. 20"],
        answer: "C. 10"

    },
    {
        question: "5. How many days are in a week?",
        options: ["A. 4", "B. 5", "C. 6", "D. 7"],
        answer: "D. 7"

    }

]
//FUNCTIONS 
function startTimer() {
    timerInterval = setInterval(function () {
        timerCount--;
        //display time on html element 
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            // Clears interval
            clearInterval(timerInterval);
            //game is over 
            gameOver();
        }

    }, 1000);
}

function displayQA() {
    console.log("current QA for", currentIndex, quizList[currentIndex]);

    //showing question on the html page 
    questionEl.textContent = quizList[currentIndex].question;

    //show text and value on the buttons
    option1BTN.textContent = quizList[currentIndex].options[0];
    option2BTN.textContent = quizList[currentIndex].options[1];
    option3BTN.textContent = quizList[currentIndex].options[2];
    option4BTN.textContent = quizList[currentIndex].options[3];


}
function gameOver() {
    //stop the clock 
    clearInterval(timerInterval); 
    //message 
    alert("Game Over!!"); 
    //HIDE THE SECTION 
    document.getElementById("displayQandA").style.display = "none";
    //UNHIDE THE START SCREEN
    document.getElementById("results").style.display = "block";
    //display the player Score 
    document.getElementById("playerScore").textContent= correctCount;
}

function startGame() {
    console.log("Start game and clock");

    //1. START THE CLOCK  -- look at the class example 
    startTimer();

    //UNHIDING THE SECTION 
    document.getElementById("displayQandA").style.display = "block";
    //HIDE THE START SCREEN
    document.getElementById("start-screen").style.display = "none";
    //2. CREATE AND CALL THE FUNCTION TO DISPLAY Q & A choices 
    displayQA();
}

function validateAns() {
    console.log("Button clicked", this.textContent);
    console.log("Correct answer is", quizList[currentIndex].answer);

    if (this.textContent === quizList[currentIndex].answer) {
        correctCount++;
        correctWrongELement.textContent = "Correct Answer!!!"
    } else {
        // deduct time penalty of 5 seconds 
        timerCount = timerCount - 5;
        correctWrongELement.textContent = "Wrong Answer!";
    }

    //Move to next Question 
    currentIndex++;
    if (currentIndex === quizList.length) {
        gameOver();
    } else {
        //Call the display QA to usow the next question 
        displayQA();
    }

}

//EVENT LISTINERS 
startButton.addEventListener("click", startGame);
option1BTN.addEventListener("click", validateAns);
option2BTN.addEventListener("click", validateAns);
option3BTN.addEventListener("click", validateAns);
option4BTN.addEventListener("click", validateAns);
scoreBtn.addEventListener("click", saveScore);
