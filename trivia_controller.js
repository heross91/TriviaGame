function quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0
}

quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

quiz.prototype.isEnded = function() {
    return this.questions.length === this.questions.Index;
}

quiz.prototype.guess = function () {
    

    if(this.getQuestionIndex().correctAnswer(Answer)) {
        this.score++;
    }
    this.questionIndex++;
}
