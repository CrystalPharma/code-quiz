const startButton = document.getElementById('start-button');
const nextButton =document.getElementById('next-button');
const questionContain = document.getElementById('question-container');
startButton.addEventListener('click', startGame)
let shuffledQuestion, currentQuestion;
const questionElement =document.getElementById ('question');

function startGame() {
    startButton.classList.add('hide');
    // console.log("start game!");
    var gameIntro = document.getElementById('start-screen');
    gameIntro.classList.add('hide');
    nextButton.classList.remove('hide');
    shuffledQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    questionContain.classList.remove('hide');
    nextQuestion();
}



function nextQuestion() {
    revealQuestion(shuffledQuestion[currentQuestion]);

}

function revealQuestion(question) {
    questionElement.innerHTML= question.question;
}

function makeChoices() {

}

