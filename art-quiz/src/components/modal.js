/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */

import images from '../assets/image-data/images';

class Modal {
  constructor(state = {
    elems: {},
  }) {
    this.state = state;
  }

  initElems() {
    this.state.elems.modal = document.getElementById('modal');
    this.state.elems.modalContent = document.getElementById('modal-content');
    this.state.elems.modalContentDescription = document.getElementById('modal-content-description');
    this.state.elems.imgQuestionModal = document.getElementById('img-question-modal');
    this.state.elems.congratulationsButtons = document.getElementById('congratulations-buttons');
    this.state.elems.nextQuestionBtn = document.getElementById('next-page-btn');
    this.state.elems.trueQuestionCounter = 0;
  }

  trueQuestionCounter(count) {
    this.state.elems.trueQuestionCounter = count;
  }

  showAnswer(target, answer, color, numCategory) {
    this.show();
    this.renderAnswerImg(numCategory);
    this.renderAnswerDescription(answer, numCategory);
    this.renderBtnNextQuestion(color);
  }

  showResultQuiz() {
    this.show();
    this.renderResultDescription();
    this.state.elems.congratulationsButtons.classList.remove('hide');
    this.state.elems.nextQuestionBtn.classList.add('hide');
  }

  renderBtnNextQuestion(color) {
    this.state.elems.nextQuestionBtn.style.background = color;
    this.state.elems.nextQuestionBtn.classList.remove('hide');
    this.state.elems.congratulationsButtons.classList.add('hide');
  }

  renderAnswerImg(numCategory) {
    this.state.elems.imgQuestionModal.src = `./assets/image-data/full/${numCategory}full.jpg`;
  }

  renderAnswerDescription(answer, numCategory) {
    this.state.elems.modalContentDescription.innerHTML = `
        <div>${answer}</div>
        <div>${images[numCategory].name}</div>
        <div>${images[numCategory].author}</div>
        <div>${images[numCategory].year}</div>
        `;
  }

  renderResultDescription() {
    this.state.elems.imgQuestionModal.src = './assets/img/resultbg.png';
    this.state.elems.modalContentDescription.innerHTML = `
    <div>congratulations</div>
    <div>${this.state.elems.trueQuestionCounter} / 10 </div>
  `;
    this.state.elems.congratulationsButtons.classList.remove('hide');
  }

  show() {
    this.state.elems.modal.classList.remove('hide');
    this.state.elems.modal.classList.add('show');
  }

  hide() {
    this.state.elems.modal.classList.add('hide');
    this.state.elems.modal.classList.remove('show');
  }
}

export const modal = new Modal();

export default modal;
