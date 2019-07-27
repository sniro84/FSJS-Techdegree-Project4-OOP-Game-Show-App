/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game
{
    constructor()
    {
       this.missed = 0;
       this.phrases = this.createPhrases();
       this.activePhrase = null;
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
            new Phrase("You Cant Have Your Cake And Eat It Too"),
            new Phrase("Honesty is the best policy"),
            new Phrase("Laughter is the best medicine"),
            new Phrase("The grass is always greener on the other side"),
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
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.visibility = "hidden";
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
        const phraseLis = document.querySelectorAll('div#phrase > ul > li');
        for(let i=0; i<phraseLis.length; i++)
        {
            let charClass = phraseLis[i].className;
            if (charClass.slice(0,4) === "hide")
                return false;
        }
        return true;
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() 
    {
        const MAX_LIVES = 5;

        const heartImages = document.querySelectorAll('div#scoreboard > ol > li > img');
        heartImages[MAX_LIVES - 1 - this.missed].setAttribute('src' , "images/lostHeart.png" );

        this.missed++;

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





}