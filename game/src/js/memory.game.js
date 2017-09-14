memory.game = () => {
  let score = 0;
  let cardsClicked = [];
  memory.repository.cards.forEach(item => memory.ui.createCard(item, () => {
    if (cardsClicked.length < 2) {
      cardsClicked.push(item);
      if (cardsClicked.length === 2) {
        const card = cardsClicked.pop();
        const card2 = cardsClicked.pop();
        if (card.isSameType(card2.type)) {
          console.log('uwin');
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
      }
    }
    console.log(cardsClicked);
  }));
};
