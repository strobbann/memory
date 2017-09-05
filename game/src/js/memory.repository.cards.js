const images = getCards();
memory.repository.cards = [];
for (let i = 0; i < images.length; i += 1 ) {
  memory.repository.cards.push(new memory.model.Card(i, images[i], images[2]));
}
