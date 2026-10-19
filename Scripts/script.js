// JavaScript for Tiger Quiz 

const quizData = [
    {
      question: "What is the estimated number of tigers in the wild today?",
      options: ["3200", "5600", "100,000", "6500"],
      answer: "5600"
    },
    {
      question: "Which of the following countries are tigers native to?",
      options: ["India", "Japan", "Australia", "Spain"],
      answer: "India"
    },
    {
        question: "How much can an adult tiger weigh?",
        options: ["500kg", "300kg", "50kg", "1000kg"],
        answer: "300kg"
    }
  
  ];
  
  let questionElement = document.getElementById("question");
  let optionsElement = document.getElementById("options");

  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
      <p>Click below to replay.</p>
      <button id="restart">Restart Quiz</button>
    `;
    document.getElementById("restart").addEventListener("click", restartQuiz);
  }

  
showQuestion();

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = '<h1>Test Your Knowledge!</h1><div id="question"></div> <div id="options">';

    questionElement = document.getElementById("question");
    optionsElement = document.getElementById("options");
    showQuestion()
}




function mobileNav() {
    let x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";} else {
            x.className = "navbar";
        }

}






