/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click' , function() {
    game = new Game();
    game.startGame();
});  

const letterButtons = document.querySelectorAll('div#qwerty > div.keyrow > button.key');
letterButtons.forEach( function(letterButton) {
    letterButton.addEventListener('click', function () {
        game.handleInteraction(this);
     });
});


document.addEventListener('keyup', function(event) {
    const key = event.key;
    if (key >= 'a' && key <= 'z') 
    {
        letterButtons.forEach( function(letterButton) {
            if (letterButton.textContent === key)
                game.handleInteraction(letterButton);
        });            
    }    
});    
    

