export default class Card {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  renderCard(id, count) {
    const card = this.renderCardContainer();
    card.append(this.renderCardTitle(id));
    card.append(this.renderCardPicture(id));
    card.dataset.id = id;
    if (count) {
      card.prepend(this.renderCardButton(count));
    }
    return card;
  }

  renderCardPicture(id) {
    const el = document.createElement('div');
    el.classList.add(`${this.name}-quiz-card-picture`);
    el.style.background = `url(./assets/image-data/img/${(id + 1) * 10}.jpg)`;
    el.style.backgroundSize = 'cover';
    return el;
  }

  renderCardContainer() {
    const el = document.createElement('div');
    el.classList.add(`${this.name}-quiz-card-container`);
    return el;
  }

  renderCardButton(count) {
    const el = document.createElement('div');
    const btn = document.createElement('button');
    btn.classList.add('result-page-btn');
    const text = document.createElement('p');
    for (let i = 0; i < count; i += 1) {
      text.innerHTML += '&#9733;';
    }
    for (let i = 0; i < 10 - count; i += 1) {
      text.innerHTML += '&#9734;';
    }
    el.classList.add(`${this.name}-result-button-card`);
    btn.innerText = 'Result page';
    el.append(text, btn);
    return el;
  }

  renderCardTitle(id) {
    const el = document.createElement('h3');
    el.classList.add(`${this.name}-quiz-card-title`);
    el.innerText = `Category ${id + 1}`;
    return el;
  }
}
