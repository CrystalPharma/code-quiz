const startButton = document.getElementById('start-button');
const gameIntro = document.getElementById('start-screen');
const questionContainer = document.getElementById('question-container');
let shuffledQuestion = [];
let currentQuestion = 0;
const questionTitle = document.getElementById('question-title');
const answer1ButtonsElement = document.getElementById('answer1-button');
const answer2ButtonsElement = document.getElementById('answer2-button');
const answer3ButtonsElement = document.getElementById('answer3-button');
const answer4ButtonsElement = document.getElementById('answer4-button');
const choicesNodelist = document.querySelectorAll('.answer-choice');
//time interval
var timeEl = document.querySelector("#time");
var secondsLeft = 60;
const end = document.getElementById('end-screen');
let score = document.getElementById('highscores');
let scorevar = 0
console.log('score: ', score)
var userScore = 0;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.innerText = secondsLeft + " seconds left";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
} 
//
function startGame() {
    startButton.classList.add('hide');
    gameIntro.classList.add('hide');
    shuffledQuestion = [...questions.sort(() => Math.random() - 0.5)];
    currentQuestion = 0;
    questionContainer.classList.remove('hide');
    setTime();
    nextQuestion();
}

function endGame() {

}

function nextQuestion() {
    revealQuestion(shuffledQuestion[currentQuestion]);
    currentQuestion++;
}

function revealQuestion(question) {

    questionTitle.innerHTML = question.question;

    question.answers.forEach((answerObj, index) => {
        let btn = choicesNodelist[index];
        btn.innerText = answerObj.text;
        btn.addEventListener('click', selectAnswer)
        // const button = document.createElement('button');
        // button.innerText = answer.text
        // button.classList.add('button')
        console.log('abccccc', answerObj, index)
        if (answerObj.correct) {
            // button.dataset.correct = answer.correct;
            btn.classList.add('correct-answer');
            
            
        } else {

        }
        // button.addEventListener('click', selectAnswer)
        // answerButtonsElement.appendChild(button)
    })

}

function clearAnswerButton() {
    setClassState(document.body)
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

const selectAnswer = async (e) => {
    console.log('asnwer choice clicked');
    // console.log('e.target is', e.target);
    const { target: clickedButton } = e;
    // const selectButton = e.target
    console.log('clickedButton is', clickedButton);
    // const correct = selectedButton.dataset.correct
    // setClassState(document.body, correct)
    if (clickedButton.classList.contains('correct-answer')) {
        console.log('You clicked on the correct answer!!!')
        scorevar += 1;
        console.log(scorevar);
        score = document.getElementById('highscores');
        console.log('score', score)
        btn = document.getElementsByClassName('correct-answer')[0];
        console.log(btn)
        btn.classList.add('corr-ans');

    } else {
        // subtract some amount from your time variable or timer
        clickedButton.classList.add('youwrong')
        secondsLeft-=20;
        scorevar -=1;
    }
   
    // Array.from(answerButtonsElement.children).forEach(button => {
    //     setClassState(button, button.dataset.correct)
    // })
    // if (shuffledQuestion.length > currentQuestion + 1) {
    // } else {
    //     startButton.innerText = 'Restart'
    //     startButton.classList.remove('hide')
    // };

    secondsLeft += 5;
    await delay(5000);
    btn.classList.remove('corr-ans');
    clickedButton.classList.remove('youwrong')
    nextQuestion();
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function setClassState(element, correct) {
    setClassState(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

startButton.addEventListener('click', startGame)// good practice to put addEventListener at end of js