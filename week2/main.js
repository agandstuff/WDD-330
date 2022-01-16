// array with nested arrays for each question and answer pair
const quiz = [
    ["What is Superman's real name?", 'Clark Kent'],
    ["What is Wonder Woman's real name?", 'Diana Prince'],
    ["What is Batman's real name?", 'Bruce Wayne']
]

function start(quiz) {
    // initial variable used to keep score
    let score = 0;

    // main game loop
    // loops through every question and answer pair in quiz array
    for(const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    //end of main game loop

    gameOver();

    function ask(question) {
        return prompt(question);
    }
    
    function check (response, answer) {
        // validates if the input from the user matches the answer, if so, increases the variable score, if not, displays correct answer to user
        if (response === answer) {
            alert('You were correct!');
            score++
        } else {
            alert(`Sorry....correct answer was ${answer}.`);
        };
    }

    function gameOver() {
        // displays end result to user, checking for plurality of points
        alert(`Game Over! You scored ${score} point${score != 1 ? 's' : ''}.`);
    }

}
start(quiz);