/******************************************
Treehouse FSJS Techdegree:
Project 4 - OOP Game App
Name: Snir Holland
Date: 29/07/2019

File:  Phrase.js
******************************************/

class Phrase
{
    
    /**
     * Constructs a Phrase and turns it to lower-case
     * @param (string) phrase - the phrase to be displayed
     */
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
            const currLi = document.createElement('li'); // creats a list item to hold the character.
            const phraseChar = this.phrase.charAt(i);  // current character of phrase

            // add a new class with respect to the current character's content.
            if (phraseChar === ' ')
                currLi.setAttribute('class',"space");
            else
                currLi.setAttribute('class',`hide letter ${phraseChar}`);

            // add the character to the unordered list.    
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
        // boolean flag that indicates whether or not a letter is included in the phrase
        let foundMatch = false;

        // search the phrase for matching letter
        for(let i=0; i<this.phrase.length; i++)
        {
            const phraseChar = this.phrase.charAt(i);   
            if (phraseChar === letter)  // found a match 
            {
                foundMatch = true;  
                break;  // terminate the search 
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
        // select list items which contains the letter in their text content
        const letterClass = `${letter}`;
        const matchedLis = document.getElementsByClassName(letterClass);

        // turn off "hide" class and turn on "show" class for every list item in that list.
        for(let i=0; i<matchedLis.length; i++)
        {
            matchedLis[i].classList.toggle("hide");
            matchedLis[i].classList.toggle("show");
        }         
    }

}