/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import { state, quizSettings } from './constants';
import { renderAnswersBtns, renderAnswersPicturesBtns } from './utils';
import { modal } from './modal';

export function renderQuestionArtistsPage(numCategory) {
  state.elems.imgQuestion.src = `./assets/image-data/full/${numCategory}full.jpg`;
  renderAnswersBtns(state.elems.numCategory);
  quizSettings.callTimer();
}
export function renderQuestionPicturesPage(numCategory) {
  renderAnswersPicturesBtns(numCategory);
  quizSettings.callTimer();
}

export function showTrueAnswer(target) {
  state.elems.answers.push(true);
  state.elems.trueQuestionCounter += 1;
  modal.trueQuestionCounter(state.elems.trueQuestionCounter);
  trueAnswerSound();
  openAnswer(target, state.elems.numCategory, 'правильный ответ', 'green');
}
export function showWrongAnswer(target) {
  state.elems.answers.push(false);
  wrongAnswerSound();
  openAnswer(target, state.elems.numCategory, 'неправильный ответ', 'red');
}

function openAnswer(target, numCategory, answer, color) {
  modal.showAnswer(target, answer, color, numCategory);
  clearAnswersButtons(state.elems.typeGame, target, color);
}
function clearAnswersButtons(typeGame, target, color) {
  if (typeGame === 'artistsQuiz') {
    const btn = target;
    btn.style.background = color;
    state.elems.answersButtons.forEach((e) => {
      e.classList.remove('true-answer');
    });
  } else if (typeGame === 'picturesQuiz') {
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
export function finallySound() {
  state.elems.isSound = quizSettings.isSound;
  if (state.elems.isSound) {
    state.sounds.finallySound.volume = quizSettings.volume;
    state.sounds.finallySound.play();
  }
}
