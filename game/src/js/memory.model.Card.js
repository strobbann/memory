memory.model.Card = class {
  constructor(id, frontImg, type) {
    this.id = id;
    this.frontImg = frontImg;
    this.type = type;
  }
  isSameCard(type) {
    return this.type === type;
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
