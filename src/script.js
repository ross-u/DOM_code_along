const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {

  debugger;
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (hasFlippedCard === false) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
  //isMatch ? disableCards() : unflipCards();
  if (isMatch) {
    disableCards();
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

cards.forEach( function (card) {
   card.addEventListener('click', flipCard)  
});
