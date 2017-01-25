var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Quiz = (function () {
    function Quiz(name, total) {
        this.name = name;
        this.total = total;
    }
    return Quiz;
}());
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Question;
}(Quiz));
var questions = [];
questions[0] = "How far can you walk into the woods? ";
questions[1] = "What did vango cut off?";
questions[2] = "who,what,where,when and _____?";
questions[3] = "What is the answer to the universe and everything";
questions[4] = "You kick a soccer ball. It goes 10 feet and comes back to you. How is this possible? ";
var answers = [];
answers.push("half way");
answers.push('ear');
answers.push('why');
answers.push(42);
answers.push('gravity');
// console.log(questions);
// console.log(answers);
var q = document.getElementById('question');
var a = document.getElementById('possAns');
var ag = document.getElementById('answer');
q.innerHTML = questions[0];
// possible answers
for (var i = 0; i < questions.length; i++) {
    a.innerHTML += answers[i] + '<br>';
}
document.getElementById('form1').addEventListener('click', function (e) {
    e.preventDefault();
    var totalscore = 0;
    var yourscore = 0;
    //go through questions
    for (var i = 0; i < questions.length; i++) {
        q.innerHTML = questions[i];
        prompt(questions[i]);
        if (ag == answers[i].value) {
            console.log("correct");
            totalscore++;
            yourscore++;
        }
        else {
            console.log("try again next time.");
        }
        console.log("you scored: " + yourscore + " out of " + totalscore);
        document.getElementById('totalscore').innerHTML = "you scored: " + yourscore + " out of " + totalscore;
    }
});
