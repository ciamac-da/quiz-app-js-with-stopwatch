let stopwatchInterval;
let stopwatchTime = 0;

const quiz = {
    questions:  [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "Rome", "London", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        },
    ],
    currentQuestionIndex: 0,
    score: 0
};

const startStopwatch = () => {
    stopwatchInterval = setInterval(()=> {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000)
}

const updateStopwatchDisplay = () => {
    const stopwatchDisplay = document.getElementById("stopwatch-display");
    stopwatchDisplay.textContent = stopwatchTime
}

const displayQuizQuestion = () => {
    const question = quiz.questions[quiz.currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    questionText.textContent = question.question;
  
    const answerContainer = document.getElementById("answers");
    answerContainer.innerHTML = "";
  
    for (const answer of question.answers) {
      const answerButton = document.createElement("button");
      answerButton.textContent = answer;
      answerButton.addEventListener("click", handleAnswerSubmit);
      answerContainer.appendChild(answerButton);
    }
  }

  const handleAnswerSubmit = (event) => {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = quiz.questions[quiz.currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      quiz.score++;
    }
  
    quiz.currentQuestionIndex++;
  
    if (quiz.currentQuestionIndex === quiz.questions.length) {
      displayFinalScore();
    } else {
      displayQuizQuestion();
    }
  }
  
  const displayFinalScore = () => {
    clearInterval(stopwatchInterval);
    const score = document.getElementById("score-display");
    score.textContent = quiz.score;
  }
  
  startStopwatch();
  displayQuizQuestion();