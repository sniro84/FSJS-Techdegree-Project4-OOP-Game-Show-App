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
        // replace existing unordered list with a new empty one.
        const phraseDiv = document.querySelector('#phrase');
        const currUl = document.querySelector('#phrase > ul');
        const newPharseUl = document.createElement('ul');
        phraseDiv.replaceChild(newPharseUl,currUl);
        
        // append characters of new phrase to unordered list
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


    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) 
    {
        let foundMatch = false;
        for(let i=0; i<this.phrase.length; i++)
        {
            const phraseChar = this.phrase.charAt(i);
            if (phraseChar === letter)
            {
                foundMatch = true;
                break;
            }    
        }

        return (foundMatch) ? true : false;    
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) 
    {
        const letterClass = `${letter}`;
        const matchedLis = document.getElementsByClassName(letterClass);
        for(let i=0; i<matchedLis.length; i++)
            if (matchedLis[i].classList[0] === "hide")
            {
                matchedLis[i].classList.toggle("hide");
                matchedLis[i].classList.toggle("show");
            }         
    }

}