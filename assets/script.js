const quizContainer = document.getElementById('quiz')
const resultsContainer  = document.getElementById('results')
const submitbutton = document.getElementById('submit')

function buildQuiz(){}

function showResults(){}

buildQuiz();

submitbutton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "What does a thermometer measure?", 
        answers: {
         a: "Volume",
         b: "Temperature",
         c: "Decibels",
         d: "Height",
        }, 
        correctAnswer: "b"
    }, 
    {
        question: "Cleopatra was the queen of which country?", 
        answers: {
         a: "Assyria",
         b: "Iran",
         c: "Egypt",
         d: "China",
        }, 
        correctAnswer: "c"
    },
    {
        question: "Which is the largest planet by volume?", 
        answers: {
         a: "Jupiter",
         b: "Neptune",
         c: "Earth",
         d: "Venus",
        }, 
        correctAnswer: "a"
    }, 
    {
        question: "What is the capital of Canada?", 
        answers: {
         a: "Quebec",
         b: "Ottawa",
         c: "Toronto",
         d: "Calgary",
        }, 
        correctAnswer: "b"
    }, 
    {
        question: "What is a synonym for a shape with 6 sides?", 
        answers: {
         a: "Octagon",
         b: "Pentagon",
         c: "Square",
         d: "Hexagon",
        }, 
        correctAnswer: "d"
    }, 
    {
        question: "According to Norse mythology, who is the god of thunder?", 
        answers: {
         a: "Magni",
         b: "Zeus",
         c: "Thor",
         d: "Loki",
        }, 
        correctAnswer: "c"
    }, 
    {
        question: "How many rings make up the symbol for the Olympics?", 
        answers: {
         a: "5",
         b: "6",
         c: "7",
         d: "4",
        }, 
        correctAnswer: "a"
    }, 
    
];