import quiz from '../../index';
import Card from '../card/card';
import Modal from '../modal/modal';

export default class Game {
  constructor(name, container, start, settings) {
    this.name = name;
    this.start = start;
    this.container = container;
    this.card = new Card(`${this.name}`);
    this.modal = new Modal();
    this.settings = settings;
    this.state = {};
    this.correctAnswerCount = 0;
    this.incorrectAnswerCount = 0;
    this.currentId = 0;
    this.correctness = 'Correct';
    this.currentCategory = 0;
    this.currentCount = 0;
    this.colorAnswer = '';
    this.trueItem = '';
    this.startTimerValue = '';
    this.timer = null;
    this.audio = {
      correct: new Audio('../../../assets/true.mp3'),
      incorrect: new Audio('../../../assets/false.mp3'),
      result: new Audio('../../../assets/game-won.mp3'),
    };
  }

  renderCategoryPage() {
    this.container.innerHTML = '';
    this.container.style.alignItems = 'center';
    const el = document.createElement('section');
    el.classList.add(`${this.name}quiz-container`);
    for (let i = this.start; i < 12 + this.start; i += 1) {
      let card;
      const categoryKeys = Object.keys(this.state);
      if (categoryKeys.includes(String(i))) {
        let counter = 0;
        this.state[i].forEach((item) => {
          if (item) counter += 1;
        });
        card = this.card.renderCard(i, counter);
        card.style.backgroundColor = 'rgb(255, 163, 163)';
      } else {
        card = this.card.renderCard(i, false);
      }
      card.onclick = () => this.startGame(card.dataset.id);
      el.append(card);
    }

    this.container.append(el);
    if (document.querySelector('.result-page-btn')) {
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
    this.state[id] = [];
    this.currentId = id * 10;
    this.renderQuestion(this.currentId);
  }

  startTimer() {
    this.startTimerValue = this.settings.timerValue;
    document.getElementById('timer-container').innerHTML = this.startTimerValue;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.startTimerValue -= 1;
      document.getElementById('timer-container').innerHTML =
        this.startTimerValue;
      if (this.startTimerValue === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
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
    clearInterval(this.timer);
    item === this.trueItem && this.startTimerValue !== 0
      ? this.correctAnswer()
      : this.incorrectAnswer(this.startTimerValue);
    item.style.backgroundColor = this.colorAnswer;
    this.currentId += 1;
    this.currentCount += 1;
    if (this.currentCount === 3) {
      this.container.append(
        this.modal.callResultModal(
          this.correctAnswerCount,
          this.incorrectAnswerCount
        )
      );
      this.modal.renderResultCards(this.state[this.currentCategory]);
      this.initResultBtns();
      if (this.settings.volume) {
        this.audio.result.volume = this.settings.volumeValue / 100;
        this.audio.result.play();
      }
    } else {
      this.container.append(this.modal.callModal(image, this.correctness));
      const nextPageBtn = document.querySelector('.next-page-btn');
      nextPageBtn.style.backgroundColor = this.colorAnswer;
      nextPageBtn.onclick = () => {
        this.renderQuestion(this.currentId);
      };
    }
  }

  correctAnswer() {
    this.correctAnswerCount += 1;
    this.colorAnswer = 'green';
    this.correctness = 'Correct';
    if (this.settings.volume) {
      this.audio.correct.volume = this.settings.volumeValue / 100;
      this.audio.correct.play();
    }
    this.state[this.currentCategory].push(true);
  }

  incorrectAnswer(timer) {
    this.incorrectAnswerCount += 1;
    this.colorAnswer = 'red';
    if (timer === 0) {
      this.correctness = 'Time is up';
    } else {
      this.correctness = 'Incorrect';
    }

    if (this.settings.volume) {
      this.audio.incorrect.volume = this.settings.volumeValue / 100;
      this.audio.incorrect.play();
    }

    this.state[this.currentCategory].push(false);
  }

  initResultBtns() {
    document.querySelector('.modal-start-page-btn').onclick = () =>
      quiz.initRender();
    document.querySelector('.modal-next-quiz-btn').onclick = () =>
      this.renderCategoryPage();
  }

  initResultPageBtns() {
    document.querySelector('.result-start-quiz').onclick = () => {
      quiz.initRender();
    };
    document.querySelector('.result-next-quiz').onclick = () => {
      this.renderCategoryPage();
    };
  }

  renderResultPage() {
    const el = document.createElement('section');
    el.classList.add(`${this.name}quiz-container`);
    el.classList.add('resultpage');

    el.innerHTML = `
        <h2 class="result-page-title">Result page</h2>
        <div class="resultpage-cards-container">

        </div>
            <div class="result-page-description">
                <p>Correct answers: ${this.correctAnswerCount}</p>
                <p>Incorrect answers: ${this.incorrectAnswerCount}</p>
            </div>
            <div class="congratulations-buttons">
                <button class="result-page-btn result-start-quiz">start page</button>
                <button class="result-page-btn result-next-quiz">next quiz</button>
            </div>
    `;
    this.container.innerHTML = '';
    this.container.append(el);
    this.renderResultCards(this.state[this.currentCategory]);
    this.initResultPageBtns();
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
}
