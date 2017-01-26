var total = 0;
var score = 0;
document.getElementById('form1').addEventListener('click', function (e) {
    e.preventDefault();
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
    var quiz1 = new Quiz("How far can you walk into the woods? ", "half way", "Choices: half way, ear, why, 42, gravity");
    arr.push(quiz1);
    var quiz2 = new Quiz("What did vango cut off?", "ear", "Choices: half way, ear, why, 42, gravity");
    arr.push(quiz2);
    var quiz3 = new Quiz("who,what,where,when and _____?", "why", "Choices: half way, ear, why, 42, gravity");
    arr.push(quiz3);
    var quiz4 = new Quiz("What is the answer to the universe and everything", "42", "Choices: half way, ear, why, 42, gravity");
    arr.push(quiz4);
    var quiz5 = new Quiz("You kick a soccer ball. It goes 10 feet and comes back to you. How is this possible? ", "gravity", "Choices: half way, ear, why, 42, gravity");
    arr.push(quiz5);
    //console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arr[i].prompts();
    }
    document.getElementById('totalscore').innerHTML = "you scored: " + score + " out of " + total;
    //reset score
    total = 0;
    score = 0;
    document.getElementById('btn').addEventListener('click', function (e) {
        e.preventDefault();
        function arrAdded() {
            var question = document.getElementById('questionAdd').value;
            var answers = document.getElementById('ansAdd').value;
            var choices = document.getElementById('posAnsAdd').value;
            var quizAdd = new Quiz(question, answers, choices);
            arr.push(quizAdd);
        }
        arrAdded();
        //localStorage['name'] = arr;
        //var data = localStorage.getItem('name');
        //Sconsole.log(localStorage.key(i));
        // arrAdded();
        localStorage.setItem("names", JSON.stringify(arr));
        var storedquiz = JSON.parse(localStorage.getItem("names"));
    }); //end function
}); //end event listner function
