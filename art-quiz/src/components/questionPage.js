/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import { state, quizSettings } from './constants';
import { renderAnswersBtns, renderAnswersPicturesBtns, showModal } from './utils';
import createModal from './modal';

export function renderQuestionArtistsPage(numCategory) {
  state.elems.imgQuestion.src = `./assets/image-data/full/${numCategory}full.jpg`;
  renderAnswersBtns(state.elems.numCategory);
  quizSettings.callTimer();
}
export function renderQuestionPicturesPage(numCategory) {
  renderAnswersPicturesBtns(numCategory);
  quizSettings.callTimer();
}

function renderModalCongratDescr() {
  state.elems.imgQuestionModal.src = './assets/img/resultbg.png';
  state.elems.modalContentDescription.innerHTML = `
  <div>congratulations</div>
  <div>${state.elems.trueQuestionCounter} / 10 </div>
  <div class="result-picture"></div>
`;
  state.elems.congratulationsButtons.classList.remove('hide');
}
export function modalCongratulations() {
  renderModalCongratDescr();
  showModal();
  finallySound();
}
export function showTrueAnswer(target) {
  state.elems.answers.push(true);
  trueAnswerSound();
  state.elems.trueQuestionCounter += 1;
  openAnswer(target, state.elems.numCategory, 'правильный ответ', 'green');
}
export function showWrongAnswer(target) {
  state.elems.answers.push(false);
  wrongAnswerSound();
  openAnswer(target, state.elems.numCategory, 'неправильный ответ', 'red');
}

function openAnswer(target, numCategory, answer, color) {
  createModal(target, answer, color, numCategory);
  if (state.elems.typeGame === 'artistsQuiz') {
    state.elems.answersButtons.forEach((e) => {
      e.classList.remove('true-answer');
    });
  } else if (state.elems.typeGame === 'picturesQuiz') {
    state.elems.pictureAnswersButtons.forEach((e) => {
      e.classList.remove('true-answer');
    });
  }
}

function trueAnswerSound() {
  state.elems.isSound = quizSettings.isSound;
  if (state.elems.isSound) {
    state.sounds.trueAnswerSound.volume = quizSettings.volume;
    state.sounds.trueAnswerSound.play();
  }
}
function wrongAnswerSound() {
  state.elems.isSound = quizSettings.isSound;
  if (state.elems.isSound) {
    state.sounds.wrongAnswerSound.volume = quizSettings.volume;
    state.sounds.wrongAnswerSound.play();
  }
}
function finallySound() {
  state.elems.isSound = quizSettings.isSound;
  if (state.elems.isSound) {
    state.sounds.finallySound.volume = quizSettings.volume;
    state.sounds.finallySound.play();
  }
}
