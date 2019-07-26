/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



// const phrase = new Phrase('Life Is Like A Box Of Chocolates');
// console.log(`The new phrase : ${phrase.phrase}`);



// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });


// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
