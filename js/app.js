/******************************************
Treehouse FSJS Techdegree:
Project 4 - OOP Game App
Name: Snir Holland
Date: 29/07/2019

File:  app.js
******************************************/

// varaible to store the game object. 
let game; 

// selecting the start button.
const startButton = document.querySelector('#btn__reset');

// event listener to start button.
startButton.addEventListener('click' , function() {
    
    // start new game.
    game = new Game();
    game.startGame();
    
    // selecting array of letter buttons.
    const letterButtons = document.querySelectorAll('div#qwerty > div.keyrow > button.key');

    // mouse click handlers for onscreen buttons
    letterButtons.forEach( function(letterButton) {
        letterButton.addEventListener('click', function () {
            game.handleInteraction(this);
        });
    });

    // keyup handlers for onscreen buttons
    document.addEventListener('keyup', function(event) {
    
        // helper variables
        const key = event.key;
        const MAX_LIVES = game.phrases.length;
        
        // if the pressed key is a letter AND the game isn't over --> add keyup event.
        if ( (key >= 'a' && key <= 'z') && (game.missed !== MAX_LIVES && !game.checkForWin()) ) 
        {   
            letterButtons.forEach( function(letterButton) {
                if (letterButton.textContent === key)
                    game.handleInteraction(letterButton);
            });            
        }    
    });

});  




   
   

