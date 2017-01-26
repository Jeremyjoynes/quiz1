let total =0;
let score =0;
 class Quiz {

    question: string;
    answer: string;
    choice: string;

    constructor(question:string, answer: string, choice: string) {
        this.question = question;
        this.answer = answer;
        this.choice = choice;
    }


    prompts() {
    
    let ans = window.prompt(`${this.question}  \n ${this.choice}` );
    if(ans == this.answer)
    {
        score++;
        total++;
        alert(`Correct! \n ${score} / ${total}`);
    }
    else{
         total++;
        alert(`Wrong! try again next time \n ${score} / ${total}`);
    }
};
}
let arr: Quiz[] = [];
let question = "How far can you walk into the woods? ";
let answers = "half way";
let choices = "Choices: half way, ear, why, 42, gravity"
let quiz1 = new Quiz(question, answers, choices);
arr.push(quiz1);

 question = "What did vango cut off?";
 answers = "ear";
 choices = "Choices: half way, ear, why, 42, gravity"
 let quiz2 = new Quiz(question, answers, choices);
 arr.push(quiz2);

 question = "who,what,where,when and _____?";
answers = "why";
 choices = "Choices: half way, ear, why, 42, gravity"
 let quiz3 = new Quiz(question, answers, choices);
 arr.push(quiz3);

 question = "What is the answer to the universe and everything";
 answers = "42";
 choices = "Choices: half way, ear, why, 42, gravity"
let quiz4 = new Quiz(question, answers, choices);
arr.push(quiz4);

 question = "You kick a soccer ball. It goes 10 feet and comes back to you. How is this possible? ";
 answers = "gravity";
 choices = "Choices: half way, ear, why, 42, gravity"
let quiz5 = new Quiz(question, answers, choices);
arr.push(quiz5);
//console.log(arr);


 document.getElementById('form1').addEventListener('click', function(e){
      e.preventDefault();

for(let i =0; i < arr.length; i++)
{
    arr[i].prompts();
}
    document.getElementById('totalscore').innerHTML = "you scored: " + score + " out of " + total;
 });//end event listner function


 document.getElementById('form2').addEventListener('click', function(e){
     e.preventDefault();
    let question = (<HTMLInputElement>document.getElementById('questionAdd')).value;
    let answers = (<HTMLInputElement>document.getElementById('ansAdd')).value;
    let choices = (<HTMLInputElement>document.getElementById('posAnsAdd')).value;
    let quizAdd = new Quiz(question, answers, choices);
    arr.push(quizAdd);
 });//end function


