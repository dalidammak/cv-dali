const quizData = [
  {
    question: "Quelle langue fonctionne dans un navigateur web ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "Que signifie CSS ?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "Que signifie HTML ?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a"
  },
  {
    question: "En quelle année JavaScript a-t-il été lancé ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "aucun des choix ci-dessus",
    correct: "b"
  },
  {
    question: "Est-ce que JavaScript est un langage de programmation ?",
    a: "Yes",
    b: "No",
    c: "Not sure",
    d: "aucun des choix ci-dessus",
    correct: "a"
  },
  {
    question: "Comment pouvons-nous afficher Bonjour le monde en utilisant JavaScript ?",
    a: "alertbox('hello world')",
    b: "alert('hello world')",
    c: "myalert('hello world')",
    d: "aucun des choix ci-dessus",
    correct: "b"
  },
  {
    question: "Pour quoi est utilisé HTML ?",
    a: "Build the Website/App",
    b: "Programming",
    c: "Hacking",
    d: "aucun des choix ci-dessus",
    correct: "a"
  },
  {
    question: "Où est la meilleure place pour ajouter une balise script dans HTML ?",
    a: "Head",
    b: "Body",
    c: "Bottom of the HTML",
    d: "Les deux A et B",
    correct: "d"
  },
  {
    question: "Programming est?",
    a: "Art",
    b: "Science",
    c: "Headache",
    d: "Les deux A et B",
    correct: "d"
  },
  {
    question: "Comment ajouter une image à une page HTML ?",
    a: '<img src="image.jpg">',
    b: '<picture src="image.jpg">',
    c: '<image src="image.jpg">',
    d: "Les deux A et b",
    correct: "a"
  },
  {
    question: "Comment définir une classe CSS pour un élément HTML ?",
    a: '<div class="example">',
    b: '<div id="example">',
    c: "None of Them",
    d: '<div style="example;">',
    correct: "a"
  },
  {
    question: "Comment déclarer une variable en JavaScript ?",
    a: 'input(example)',
    b: 'let example;',
    c: "const example;",
    d: 'int example;',
    correct: "b"
  },
  {
    question: "Comment sélectionner un élément HTML en JavaScript ?",
    a: 'document.getElementsByClassName("example")',
    b: 'document.querySelector("#example")',
    c: 'document.getElementsByID("#example")',
    d: 'document.getElementById("example")',
    correct: "d"
  },
  {
    question: "Comment ajouter un écouteur d'événement à un élément HTML en JavaScript ?",
    a: 'element.onclick = function() {}',
    b: 'element.addEventListener("click", function() {})',
    c: "element.click = function() {}",
    d: 'Ca me concerne pas',
    correct: "a"
  },
  {
    question: "Qu'est-ce que le responsive design ?",
    a: "Un design qui s'adapte au contenu de la page",
    b: "Un design qui s'adapte à la résolution de l'écran",
    c: "Un design qui s'adapte à la taille de l'écran",
    d: "Un design qui s'adapte au code JavaScript",
    correct: "c"
  }
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>Vous avez répondu ${score}/${quizData.length} questions correctes</h2>
            <button onclick="history.go(0)">Rejouer</button>
        `;
    }
  }
});