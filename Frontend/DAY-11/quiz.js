const quizques = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "HyperText Markup Language",
        b: "HyperText Makeup Language",
        c: "Hey Text Makeup language",
        d: "Hello to my language",
        ans: "ans1"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Silver Sheets",
        b: "Cascading Silver Sheeps",
        c: "Cascading Style Sheets",
        d: "Common Style Sheets",
        ans: "ans3"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hyper Texting Trading Protocol",
        b: "Hyper Text Transmission Protocol",
        c: "Hyper Text Trading Protocol",
        d: "Hyper Text Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JackScript",
        b: "JavaScript",
        c: "JackSpirit",
        d: "JackSprint",
        ans: "ans2"
    },
    {
        question: "Q5: Which of the following colour a rainbow contains?",
        a: "Golden",
        b: "Silver",
        c: "Violet",
        d: "Black",
        ans: "ans3"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore=document.querySelector('#showscore');

let quescount = 0;
let score=0;

const loadques = () => {
    question.innerHTML = quizques[quescount].question;
    option1.innerHTML = quizques[quescount].a;
    option2.innerHTML = quizques[quescount].b;
    option3.innerHTML = quizques[quescount].c;
    option4.innerHTML = quizques[quescount].d;
}
loadques();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectall=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false)
}
submit.addEventListener('click', () => {
    const checkedans = getCheckAnswer();
    console.log(checkedans);

    if(checkedans == quizques[quescount].ans){
       score++;
    }
    quescount++;
     deselectall();
    if(quescount<quizques.length){
        loadques();
    }
    else{
         showScore.innerHTML=`
         <h3>You Scored ${score}/${quizques.length} ✌️ </h3>
         <button class="btn" onclick="location.reload()"  >Play Again</button>
         `;

         showScore.classList.remove('scorearea');
    }
});
