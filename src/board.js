'use strict';

// createElement takes a html string of elements and returns the DOM node objects
function createElement(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
  	
  	// console.log(div.children);
    return div.children[0];
};


function shuffleCards (arrayToShuffle) {
  let shuffledCards = [];
  
  for ( ; arrayToShuffle.length > 0; ) {
    let randomNumber = Math.floor(Math.random() * arrayToShuffle.length);
    let randomCard = arrayToShuffle.splice(randomNumber, 1); 
    shuffledCards.push(randomCard[0]);
  }
  return shuffledCards;
}

let board = document.getElementById("board");
let cardsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'one', 'two', 'three', 'four', 'five', 'six'];


cardsArray = shuffleCards(cardsArray);


cardsArray.forEach( function (name) {
  let newCard = createElement(`
    <div class="card" data-cardname="${name}">
      <img class="front" src="img/${name}.svg">
      <img class="back" src="img/front.svg">
    </div>
  `);

  board.appendChild(newCard);
});



