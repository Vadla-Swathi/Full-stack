document.getElementById('quiz-form').addEventListener('submit',function(event){
    event.preventDefault();

const answers={
    q1:'Hyderabad',
    q2:'Narendra Modi',
    q3:'United States of America'
};
let score=0;
for(let question in answers){
    const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if(selectedAnswer && selectedAnswer.value === answers[question]){
        score++;
    }
}
const resultContainer=document.getElementById('result');
resultContainer.textContent=`Your score is ${score} out of ${Object.keys(answers).length}.`;
});