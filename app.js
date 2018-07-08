function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();    
    }
};

function showProgres() {
    var currentQuestionNumber = quiz.getQuestionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores () {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your scores:" + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
};

var questions = [
    new question("Which one is not an object oriented programming language?", ["Java", "C#","C++","C"],"C"),
    new question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new question("There are ____ main components of object oriented programming.", ["1","6","2","4"], "4"),
    new question("Which language is used for web apps?", ["French", "Natice-Canadian", "Javascript", "webLingo"], "Javascript"),
    new question("What does html stand for?", ["Hypertext Markup Language", "Hot tomatoes Makeup luggage", "Hypersensitive tellecommuncations language", "None"], "Hypertext Markup Language"),
];

var quiz = new quiz(questions);

populate();
