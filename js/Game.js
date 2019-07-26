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

}