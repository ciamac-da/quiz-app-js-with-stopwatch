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