// array with nested arrays for each question and answer pair
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

// View Object
const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    }
};

const game = {
    start(quiz){
        view.hide(view.start);
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'You Got It!',{'class':'correct'});
        alert('You Got It!');
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`I'm sorry, the correct answer was ${answer}`,{'class':'wrong'});
        alert(`I'm sorry, the correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.show(view.start);
        view.render(view.info,`Game Over! \nYou scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);

view.start.addEventListener('click', () => game.start(quiz), false);