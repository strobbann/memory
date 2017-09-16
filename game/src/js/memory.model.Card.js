memory.model.Card = class {
  constructor(id, frontImg, type) {
    this.id = id;
    this.frontImg = frontImg;
    this.type = type;
  }
  isSameType(card) {
    return this.type === card.type;
  }
};
memory.model.Card.Type = {
  BEAR: 'Bear',
  BUNNY: 'Bunny',
  CHICKEN: 'Chicken',
  DOG: 'Dog',
  DUCK: 'Duck',
  ELEPHANT: 'Elephant',
  PANDA: 'Panda',
  PIG: 'Pig',
  TIGER: 'Tiger',
};
