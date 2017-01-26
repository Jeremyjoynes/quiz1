let total = 0;
let score = 0;


document.getElementById('form1').addEventListener('click', function (e) {
    e.preventDefault();


    class Quiz {

        question: string;
        answer: string;
        choice: string;

        constructor(question: string, answer: string, choice: string) {
            this.question = question;
            this.answer = answer;
            this.choice = choice;
        }


        prompts() {

            let ans = window.prompt(`${this.question}  \n ${this.choice}`);
            if (ans == this.answer) {
                score++;
                total++;
                alert(`Correct! \n ${score} / ${total}`);
            }
            else {
                total++;
                alert(`Wrong! try again next time \n ${score} / ${total}`);
            }

        };
    }

    let arr: Quiz[] = [];

    let quiz1 = new Quiz(
        "How far can you walk into the woods? ",
        "half way",
        "Choices: half way, ear, why, 42, gravity"

    );
    arr.push(quiz1);


    let quiz2 = new Quiz(
        "What did vango cut off?",
        "ear",
        "Choices: half way, ear, why, 42, gravity"
    );
    arr.push(quiz2);


    let quiz3 = new Quiz(
        "who,what,where,when and _____?",
        "why",
        "Choices: half way, ear, why, 42, gravity"
    );
    arr.push(quiz3);


    let quiz4 = new Quiz(
        "What is the answer to the universe and everything",
        "42",
        "Choices: half way, ear, why, 42, gravity"
    );
    arr.push(quiz4);


    let quiz5 = new Quiz(
        "You kick a soccer ball. It goes 10 feet and comes back to you. How is this possible? ",
        "gravity",
        "Choices: half way, ear, why, 42, gravity"
    );
    arr.push(quiz5);
    //console.log(arr);


    for (let i = 0; i < arr.length; i++) {
        arr[i].prompts();
    }
    document.getElementById('totalscore').innerHTML = "you scored: " + score + " out of " + total;
    //reset score
    total = 0;
    score = 0;

    document.getElementById('btn').addEventListener('click', function (e) {
        e.preventDefault();
        function arrAdded() {
            let question = (<HTMLInputElement>document.getElementById('questionAdd')).value;
            let answers = (<HTMLInputElement>document.getElementById('ansAdd')).value;
            let choices = (<HTMLInputElement>document.getElementById('posAnsAdd')).value;
            let quizAdd = new Quiz(question, answers, choices);
            arr.push(quizAdd);
        }

        arrAdded();


        //localStorage['name'] = arr;
        //var data = localStorage.getItem('name');

        //Sconsole.log(localStorage.key(i));
        // arrAdded();

        localStorage.setItem("names", JSON.stringify(arr));
        var storedquiz = JSON.parse(localStorage.getItem("names"));


    });//end function
});//end event listner function



