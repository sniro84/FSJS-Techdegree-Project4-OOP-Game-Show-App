/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase
{
    constructor(phrase)
    {
      this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() 
    {
        const phraseDiv = document.querySelector('#phrase');
        const currUl = document.querySelector('#phrase > ul');
        const newPharseUl = document.createElement('ul');
        phraseDiv.replaceChild(newPharseUl,currUl);
        
        for(let i=0; i<this.phrase.length; i++)
        {
            const currLi = document.createElement('li');
            const phraseChar = this.phrase.charAt(i);

            if (phraseChar === ' ')
                currLi.setAttribute('class',"space");
            else
                currLi.setAttribute('class',`hide letter ${phraseChar}`);

            currLi.textContent = `${phraseChar}`;
            newPharseUl.appendChild(currLi);
        }  
    }
}