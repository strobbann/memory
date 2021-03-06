/* global document */
memory.ui = {};
memory.ui.createCard = (card, func) => {
  const cardFront = document.createElement('img');
  cardFront.classList.add('front');
  cardFront.src = card.frontImg;
  cardFront.style.display = 'block';

  const cardBack = document.createElement('img');
  cardBack.classList.add('back');
  cardBack.style.display = 'none';
  cardBack.src = 'img/card-1.png';

  const cardHolder = document.createElement('div');
  cardHolder.classList.add('card');
  cardHolder.appendChild(cardFront);
  cardHolder.appendChild(cardBack);
  document.body.appendChild(cardHolder);

  cardHolder.addEventListener('click', () => {
    cardFront.style.display = 'block';
    cardBack.style.display = 'none';
    console.log('u have clicked me');
    cardHolder.style.pointerEvents = 'none';
    func();
  });
  return cardHolder;
};

memory.ui.resetCards = () => {
  const frontImages = document.querySelectorAll('.front');
  const backImages = document.querySelectorAll('.back');
  frontImages.forEach((item) => {
    if (item.style.display === 'block' && item.style.opacity !== '0') {
      item.style.display = 'none';
    }
  });
  backImages.forEach((item) => {
    if (item.style.display === 'none' && item.style.opacity !== '0') {
      item.style.display = 'block';
      item.parentNode.style.pointerEvents = 'auto';
    }
  });
};

memory.ui.rightCard = () => {
  const frontImages = document.querySelectorAll('.front');
  const backImages = document.querySelectorAll('.back');
  frontImages.forEach((item) => {
    if (item.style.display === 'block') {
      item.style.opacity = '0';
      item.parentNode.style.pointerEvents = 'none';
      // item.parentNode.remove();
    }
  });
  backImages.forEach((item) => {
    if (item.style.display === 'none') {
      item.style.opacity = '0';
      item.parentNode.style.pointerEvents = 'none';
      // item.parentNode.remove();
    }
  });
};

memory.ui.clearBoard = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(item => item.remove());
};
