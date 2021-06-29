console.log("HELLO JS");

//VARIABLES 

var timerElement = document.getElementsByClassName("timer-count");
var startButton = document.getElementById("startBtn");
var timer;
var timerInterval;
//Array of OJECTS 
var quizlist = [
    //QIUESTION STARTS HERE 
    {
        question: "Question 1 is here ",
        options: ["A", "B", "C", "D"],
        answer: "B"

    },//QIUESTION ENDS HERE 
    {
        question: "Question 2 is here ",
        options: ["Aplle", "Blue", "Cherry", "Dear"],
        answer: "Aplle"

    }
]
//FUNCTIONS 

function startGame() {
    console.log("Start game and clock");

    //1. START THE CLOCK  -- look at the class example 
    startTimer();
    
    //2. CREATE AND CALL THE FUNCTION TO DISPLAY Q & A choices 
    displayQA();
}

function displayQA() {

}

//EVENT LISTINERS 
startButton.addEventListener("click", startGame)
