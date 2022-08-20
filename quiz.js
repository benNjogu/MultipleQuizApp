//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//create questions
let questions = [
  {
    question: "What does HTML stand for?",
    imgSrc: "img/html.png",
    choiceA: "correct",
    choiceB: "wrong",
    choiceC: "wrong",
    correct: "A",
  },
  {
    question: "What does CSS stand for?",
    imgSrc: "img/css.png",
    choiceA: "wrong",
    choiceB: "correct",
    choiceC: "wrong",
    correct: "B",
  },
  {
    question: "What does JS stand for?",
    imgSrc: "img/js.png",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "correct",
    correct: "C",
  },
  {
    question: "Bro do you even code?",
    imgSrc: "img/brocon.png",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "wrong",
    correct: "none",
  },
];

//variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let questionTime = 10; //10 seconds
const gaugeWidth = 150; //150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

//render a question
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1 second
}

//render progress
function renderProgress() {
  for (let i = 0; i <= lastQuestion; i++) {
    progress.innerHTML += "<div class='prog' id=" + i + "></div>";
  }
}

//Counter render
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    //answer is wrong change progress bar color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      //end score and show results to the user
      clearInterval(TIMER);
      renderScore();
    }
  }
}

//cneck answer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    //answer is correct
    score++;
    //change progress bar color to green
    answerIsCorrect();
  } else {
    //answer is wrong change progress bar color to red
    answerIsWrong();
  }

  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    //end score and show results to the user
    clearInterval(TIMER);
    renderScore();
  }
}

//correct answer
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

//wrong answer
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//render score
function renderScore() {
  scoreDiv.style.display = "block";

  //calculate the amount of questions answered in percentage
  const scorePercentage = Math.round((100 * score) / questions.length);

  //choose the image based on the score
  let img =
    scorePercentage >= 80
      ? "img/5.png"
      : scorePercentage >= 60
      ? "img/4.png"
      : scorePercentage >= 40
      ? "img/3.png"
      : scorePercentage >= 20
      ? "img/2.png"
      : "img/4.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePercentage + "%</p>";
}
