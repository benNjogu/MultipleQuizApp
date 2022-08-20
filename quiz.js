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
const score = document.getElementById("score");

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
