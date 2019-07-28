/******************************************
Treehouse FSJS Techdegree:
Project 4 - OOP Game App
Name: Snir Holland
Date: 29/07/2019

File:  Game.js
******************************************/

class Game
{
    /**
     * Constructs a game and initializes its properties with default values
     */
    constructor()
    {
       this.missed = 0;                       // wrong user guesses
       this.phrases = this.createPhrases();   // collection of phrases
       this.activePhrase = null;              // phrase that the user need to guess
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases()
    {
        const phrases = [
            new Phrase("Curiosity Killed The Cat"),
            new Phrase("Beauty Is In The Eye Of The Beholder"),
            new Phrase("Honesty is the best policy"),
            new Phrase("Laughter is the best medicine"),
            new Phrase("Two wrongs dont make a right")
        ]
        
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() 
    {
        const randomIndex = Math.floor((Math.random() * this.phrases.length));
        return this.phrases[randomIndex];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame()
    {
        // resets gameboard display (changes will be noticeable only if a previous game ended)
        this.resetGameboard();

        // hide overlay display 
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.visibility = "hidden";

        // choose random phrase from collection and add it to display
        const phrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase; 
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() 
    {
        // select all list items that contains the letters in the phrase
        const phraseLis = document.querySelectorAll('div#phrase > ul > li');

        // search for a letter that is still hidden
        for(let i=0; i<phraseLis.length; i++)
        {
            let charClass = phraseLis[i].className;
            if (charClass.slice(0,4) === "hide")  // a hidden letter has been found
                return false;
        }

        // a hidden letter hasn't been found --> user won.
        this.gameOver(true);
        return true;
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() 
    {
        // select heart images
        const heartImages = document.querySelectorAll('div#scoreboard > ol > li > img');
        const MAX_LIVES = heartImages.length;
        
        // update an image lost heart display (from the right side) 
        heartImages[MAX_LIVES - 1 - this.missed].setAttribute('src' , "images/lostHeart.png" );

        // update wrong user guesses
        this.missed++;

        // check if the user lost the game
        if (this.missed === MAX_LIVES)
            this.gameOver(false);
            
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon)
    {
        const message = (gameWon) ? "Congratulations, You Win!" : "You lost, better luck next time!";
        const gameOverH1 = document.querySelector('h1#game-over-message');
        gameOverH1.textContent = message; 

        const updatedClassName = (gameWon) ? 'win' : 'lose';
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.setAttribute('class', updatedClassName);
        overlayDiv.style.visibility = "";
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) 
    {
        const letter = button.textContent;
        
        if (!(this.isAlreadyClicked(button)))
        {
            if (!this.activePhrase.checkLetter(letter))
            {
                button.classList.add("wrong");
                this.removeLife(); 
            }
            else
            {
                button.classList.add("chosen");
                this.activePhrase.showMatchedLetter(letter);
                if (this.checkForWin())
                    this.gameOver(true);
            }
        }
  
    }

    isAlreadyClicked(button)
    {
        const btnClass = button.classList[1]; 
        return (btnClass === "chosen" || btnClass === "wrong"); 
    }

    resetGameboard()
    {
        // clear phrase letters from display
        const phraseDiv = document.querySelector('#phrase');
        const currUl = document.querySelector('#phrase > ul');
        const emptyUl = document.createElement('ul');
        phraseDiv.replaceChild(emptyUl,currUl);

        // enable onscreen keyboard buttons
        const letterButtons = document.querySelectorAll('div#qwerty > div.keyrow > button.key');
        letterButtons.forEach( function(letterButton) {
                letterButton.classList.remove("chosen");
                letterButton.classList.remove("wrong");
                const btnClass = letterButton.classList; 
        });

        // reset heart images
        const heartImages = document.querySelectorAll('div#scoreboard > ol > li > img');
        heartImages.forEach( function(image) {
            image.setAttribute('src' , "images/liveHeart.png" );
        });
    }

}