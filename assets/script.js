//functions (lines 2-40, lines 42-76, and lines 78-96)
function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of potential answers
            const answers = [];
            
            // for loop that for each available answer...
            for(letter in currentQuestion.answers){
                
                // ...there will be a HTML radio button
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // added questions and answers to the output variable
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`

                `<div class="slide">
                 <div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        }
    );
    
    // combined the output list into one string of HTML displayed on webpage
    quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    //added || {} (aka "or empty object") to avoid error otherwise caused by .value

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  // ^function showSlide added to introduce page nav to js file. 

//variables (line 74, line 75, line 76, and lines 77-149)
const quizContainer = document.getElementById('quiz')
const resultsContainer  = document.getElementById('results')
const submitbutton = document.getElementById('submit')
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

// to begin the quiz
buildQuiz();

// pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// shows the first slide
showSlide(currentSlide);

// event listeners 
submitbutton.addEventListener('click', showResults);