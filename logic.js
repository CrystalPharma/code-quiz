const startButton = document.getElementById ('start-button');
const questionContain = document.getElementById ('questions');
startButton.addEventListener ('click', startGame) 


function startGame(){
    startButton.classList.add ('hide');
    // console.log("start game!");
    var gameIntro = document.getElementById('start-screen');
    gameIntro.classList.add('hide');
    questionContain.classList.remove('hide');
    nextQuestion();
}

let shuffledQuestion, currentQuestion;

function nextQuestion(){
    revealQuestion(shuffledQuestion[currentQuestion]);
}

function revealQuestion(){

}

function makeChoices(){

}
