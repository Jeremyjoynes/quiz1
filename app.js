var total = 0;
var score = 0;
var Quiz = (function () {
    function Quiz(question, answer, choice) {
        this.question = question;
        this.answer = answer;
        this.choice = choice;
    }
    Quiz.prototype.prompts = function () {
        var ans = window.prompt(this.question + "  \n " + this.choice);
        if (ans == this.answer) {
            score++;
            total++;
            alert("Correct! \n " + score + " / " + total);
        }
        else {
            total++;
            alert("Wrong! try again next time \n " + score + " / " + total);
        }
    };
    ;
    return Quiz;
}());
var arr = [];
var question = "How far can you walk into the woods? ";
var answers = "half way";
var choices = "Choices: half way, ear, why, 42, gravity";
var quiz1 = new Quiz(question, answers, choices);
arr.push(quiz1);
question = "What did vango cut off?";
answers = "ear";
choices = "Choices: half way, ear, why, 42, gravity";
var quiz2 = new Quiz(question, answers, choices);
arr.push(quiz2);
question = "who,what,where,when and _____?";
answers = "why";
choices = "Choices: half way, ear, why, 42, gravity";
var quiz3 = new Quiz(question, answers, choices);
arr.push(quiz3);
question = "What is the answer to the universe and everything";
answers = "42";
choices = "Choices: half way, ear, why, 42, gravity";
var quiz4 = new Quiz(question, answers, choices);
arr.push(quiz4);
question = "You kick a soccer ball. It goes 10 feet and comes back to you. How is this possible? ";
answers = "gravity";
choices = "Choices: half way, ear, why, 42, gravity";
var quiz5 = new Quiz(question, answers, choices);
arr.push(quiz5);
//console.log(arr);
function arrAdded() {
    var question = document.getElementById('questionAdd').value;
    var answers = document.getElementById('ansAdd').value;
    var choices = document.getElementById('posAnsAdd').value;
    var quizAdd = new Quiz(question, answers, choices);
    arr.push(quizAdd);
}
//localStorage['name'] = arr;
//var data = localStorage.getItem('name');
localStorage.setItem("names", JSON.stringify(arr));
var storedquiz = JSON.parse(localStorage.getItem("names"));
//Sconsole.log(localStorage.key(i));
// arrAdded();
document.getElementById('form1').addEventListener('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < arr.length; i++) {
        arr[i].prompts();
    }
    document.getElementById('totalscore').innerHTML = "you scored: " + score + " out of " + total;
}); //end event listner function
document.getElementById('form2').addEventListener('click', function (e) {
    e.preventDefault();
    arrAdded();
}); //end function
