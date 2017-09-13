memory.ui = {};
memory.ui.createCard = (card, func) => {
  const cardFront = document.createElement('img');
  cardFront.src = card.frontImg;
  cardFront.style.display = 'none';

  const cardBack = document.createElement('img');
  cardBack.src = 'img/card-1.png';

  const cardHolder = document.createElement('div');
  cardHolder.classList.add('card');
  cardHolder.appendChild(cardFront);
  cardHolder.appendChild(cardBack);
  document.body.appendChild(cardHolder);

  cardHolder.addEventListener('click', () => {
    cardFront.style.display = 'block';
    cardFront.style.transition = '0.7s';
    cardBack.style.display = 'none';
    func();
  })

  return cardHolder;
};
