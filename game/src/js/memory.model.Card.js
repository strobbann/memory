memory.model.Card = class {
  constructor(id, frontImg, backImg) {
    this.id = id;
    this.frontImg = frontImg;
    this.backImg = backImg;
  }
  isSameCard(id) {
    return this.id === id;
  }
};
