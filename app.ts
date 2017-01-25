let score =0;
abstract class Quiz {

    name: string;
    total: number;

    constructor(name:string, total:number) {
        this.name = name;
        this.total = total;
    }
}


class Question extends Quiz {


}

let questions = [];
questions[0] = "How far can you walk into the woods? ";
questions[1] = "What did vango cut off?";
questions[2] = "who,what,where,when and _____?";
questions[3] = "What is the answer to the universe and everything";
questions[4] = "You kick a soccer ball. It goes 10 feet and comes back to you. How is this possible? ";

let answers = [];
answers.push("half way");
answers.push('ear');
answers.push('why');
answers.push(42);
answers.push('gravity');
// console.log(questions);
// console.log(answers);

let q = document.getElementById('question'); 
let a = document.getElementById('possAns');
let ag = document.getElementById('answer');

q.innerHTML = questions[0];

// possible answers
for(let i =0;i<questions.length; i++)
{
  a.innerHTML +=  answers[i] + '<br>';
}
document.getElementById('form1').addEventListener('click', function(e){
    e.preventDefault();
    let totalscore = 0;
    let yourscore =0;
//go through questions
for(let i =0;i<questions.length; i++)
{
 q.innerHTML = questions[i];
 prompt(questions[i]);
 if(ag == answers[i].value ){
     console.log("correct");
     totalscore++;
     yourscore++;
 }else {
     console.log("try again next time.");
 }
 console.log("you scored: " + yourscore + " out of " + totalscore);
document.getElementById('totalscore').innerHTML = "you scored: " + yourscore + " out of " + totalscore;
}

})
