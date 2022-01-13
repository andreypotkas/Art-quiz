/* eslint-disable import/no-cycle */
import { state } from './constants';
import images from '../assets/image-data/images';
import { showModal } from './utils';

function renderImgQuestionModal(numCategory) {
  state.elems.imgQuestionModal.src = `./assets/image-data/full/${numCategory}full.jpg`;
}
function renderModalDescription(answer, numCategory) {
  state.elems.modalContentDescription.innerHTML = `
      <div>${answer}</div>
      <div>${images[numCategory].name}</div>
      <div>${images[numCategory].author}</div>
      <div>${images[numCategory].year}</div>
      `;
}
function renderBtnNextQuestion(color, param) {
  const btn = param;
  btn.style.background = `${color}`;
  if (state.elems.questionCounter === 10) {
    btn.innerHTML = 'Результат';
  } else {
    btn.innerHTML = 'Продолжить';
  }
  state.elems.modalContentDescription.append(btn);
}
function createModal(click, answer, color, numCategory) {
  if (click.classList.contains('answer-button')) {
    const target = click;
    target.style.background = color;
  }
  renderImgQuestionModal(numCategory);
  renderModalDescription(answer, numCategory);
  renderBtnNextQuestion(color, state.controllers.nextQuestionBtn);
  showModal();
}
export default createModal;
