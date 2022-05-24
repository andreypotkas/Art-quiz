import quiz from '../../index';
import Card from '../card/card';
import Modal from '../modal/modal';

export default class Game {
  constructor(name, container, start) {
    this.name = name;
    this.correctAnswerCount = 0;
    this.incorrectAnswerCount = 0;
    this.container = container;
    this.start = start;
    this.card = new Card(`${this.name}`);
    this.modal = new Modal();
    this.currentId = 0;
    this.correctness = 'Correct';
    this.currentCategory = 0;
    this.currentCount = 0;
    this.categoryAnswers = {};
    this.colorAnswer = '';
    this.isLastQuestion = false;
    this.audio = {
      correct: new Audio('../../../assets/true.mp3'),
      incorrect: new Audio('../../../assets/false.mp3'),
    };
  }

  renderCategoryPage() {
    this.container.innerHTML = '';
    const el = document.createElement('section');
    el.classList.add(`${this.name}quiz-container`);
    for (let i = this.start; i < 12 + this.start; i += 1) {
      let card;
      const categoryKeys = Object.keys(this.categoryAnswers);
      if (categoryKeys.includes(String(i))) {
        let counter = 0;
        this.categoryAnswers[i].forEach((item) => {
          if (item) counter += 1;
        });
        card = this.card.renderCard(i, counter);
        card.style.backgroundColor = 'rgb(223, 103, 223)';
      } else {
        card = this.card.renderCard(i, false);
      }
      card.onclick = () => this.startGame(card.dataset.id);
      el.append(card);
    }

    this.container.append(el);
    if (document.querySelector('.result-page-btn')) {
      console.log('1');
      document.querySelector('.result-page-btn').onclick = (event) => {
        this.renderResultPage();
        event.stopImmediatePropagation();
      };
    }
  }

  startGame(id) {
    this.correctAnswerCount = 0;
    this.incorrectAnswerCount = 0;
    this.currentCount = 0;
    this.currentCategory = id;
    this.categoryAnswers[id] = [];
    this.currentId = id * 10;
    this.renderQuestion(this.currentId);
  }

  getRandomInt(min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  }

  renderQuestion(id) {
    return '';
  }

  answer(item, image) {
    item.textContent === image.author
      ? this.correctAnswer()
      : this.incorrectAnswer();
    item.style.backgroundColor = this.colorAnswer;
    this.currentId += 1;
    this.currentCount += 1;
    if (this.currentCount === 2) {
      this.container.append(
        this.modal.callResultModal(
          this.correctAnswerCount,
          this.incorrectAnswerCount
        )
      );
      this.modal.renderResultCards(this.categoryAnswers[this.currentCategory]);
      this.initResultBtns();
    } else {
      this.container.append(this.modal.callModal(image, this.correctness));
      const nextPageBtn = document.querySelector('.next-page-btn');
      nextPageBtn.style.backgroundColor = this.colorAnswer;
      nextPageBtn.onclick = () => this.renderQuestion(this.currentId);
    }
  }

  correctAnswer() {
    this.correctAnswerCount += 1;
    this.colorAnswer = 'green';
    this.correctness = 'Correct';
    this.audio.correct.play();
    this.categoryAnswers[this.currentCategory].push(true);
  }

  incorrectAnswer() {
    this.incorrectAnswerCount += 1;
    this.colorAnswer = 'red';
    this.correctness = 'Incorrect';
    this.audio.incorrect.play();
    this.categoryAnswers[this.currentCategory].push(false);
  }

  initResultBtns() {
    document.querySelector('.modal-start-page-btn').onclick = () =>
      quiz.initRender();
    document.querySelector('.modal-next-quiz-btn').onclick = () =>
      this.renderCategoryPage();
  }

  renderResultPage() {
    const el = document.createElement('section');
    el.classList.add(`${this.name}quiz-container`);
    el.classList.add('resultpage');

    el.innerHTML = `
        <h2 class="result-page-title">Result page</h2>
        <div class="resultpage-cards-container">

        </div>
            <div class="modal-content-description">
                <p>Correct answers: ${this.correctAnswerCount}</p>
                <p>Incorrect answers: ${this.incorrectAnswerCount}</p>
            </div>
            <div class="congratulations-buttons">
                <button class="start-page modal-start-page-btn" >start page</button>
                <button class="start-page modal-next-quiz-btn">next quiz</button>
            </div>
    `;
    this.container.innerHTML = '';
    console.log(this.container);
    this.container.append(el);
    this.renderResultCards(this.categoryAnswers[this.currentCategory]);
  }

  renderResultCards(answers) {
    const container = document.querySelector('.resultpage-cards-container');
    for (let i = 0; i < 10; i += 1) {
      const el = document.createElement('div');
      el.classList.add('resultpage-quiz-card-picture');
      el.style.background = `url(./assets/image-data/img/${(i + 1) * 10}.jpg)`;
      el.style.backgroundSize = 'cover';
      el.style.boxShadow = answers[i]
        ? '2px 2px 2px 2px green'
        : '2px 2px 2px 2px red';
      container.append(el);
    }
  }

  saveResult() {}
}
