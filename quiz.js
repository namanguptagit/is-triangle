const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");

const correctAnswers = ["90°","right angled"];

function calculateScoreOf(){
let score = 0;
let index = 0;
const formResults = new FormData(quizForm);
for(let value of formResults.values()){
if(value === correctAnswers[index]){
    score++;
}
index++;
}
outputE1.innerText="Your Score is = " + score;
}
submitAnswerBtn.addEventListener("click",calculateScoreOf);
