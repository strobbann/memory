memory.game = function newGame() {
  memory.repository.cards.sort(() => 0.5 - Math.random());
  // eslint-disable-next-line
  const score = 0;
  let cardsClicked = [];
  let cardsLeft = memory.repository.cards.length;
  console.log('new game');
  memory.repository.cards.forEach(item => memory.ui.createCard(item, () => {
    if (cardsClicked.length < 2) {
      cardsClicked.push(item);
      if (cardsClicked.length === 2) {
        const card = cardsClicked.pop();
        const card2 = cardsClicked.pop();
        if (card.isSameType(card2)) {
          cardsLeft -= 2;
          console.log(cardsLeft);
          setTimeout(() => {
            memory.ui.rightCard();
          }, 1000);
        } else {
          console.log('ulose');
          setTimeout(() => {
            memory.ui.resetCards();
            cardsClicked = cardsClicked.splice();
          }, 1000);
        }
        if (cardsLeft === 0) {
          setTimeout(() => {
            console.log('u have won');
            memory.game();
          }, 2500);
        }
      }
    }
  }));
  setTimeout(() => {
    memory.ui.resetCards();
  }, 5000);
};
