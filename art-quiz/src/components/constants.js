/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import images from '../assets/image-data/images';
import {
  createElem, hideAndShow, hideAndShowPages, toggleBtnCategories, hideModal, resetCounters,
} from './utils';
import { renderQuestionPage } from './categoryPage';
import { renderArtistsQuizPage, renderPicturesQuizPage } from './startPage';
import {
  showTrueAnswer,
  showWrongAnswer, renderQuestionArtistsPage, renderQuestionPicturesPage, modalCongratulations,
} from './questionPage';
import { renderResultPage } from './resultPage';
import Settings from './settingsPage';

export const quizSettings = new Settings();

export const state = {
  controllers: {},
  elems: {},
  sounds: {},
};
export function init() {
  createLayout();
  initElems();
  initHandlers();
  initSounds();
  quizSettings.init();
}

function initSounds() {
  state.sounds.trueAnswerSound = new Audio('./assets/trueAnswer.mp3');
  state.sounds.wrongAnswerSound = new Audio('./assets/falseAnswer.mp3');
  state.sounds.finallySound = new Audio('./assets/result.mp3');
}
function initElems() {
  state.elems.main = document.getElementById('main');
  state.elems.btnSettings = document.getElementById('btn-settings');
  state.elems.applicationContainer = document.getElementById('application-container');
  state.elems.settingsContainer = document.getElementById('settings-container');
  state.elems.questionArtistsContainer = document.getElementById('question-artists-container');
  state.elems.questionPicturesContainer = document.getElementById('question-pictures-container');
  state.elems.answersButtons = document.querySelectorAll('.answer-button');
  state.elems.pictureAnswersButtons = document.querySelectorAll('.pictures-answer-button');
  state.elems.imgQuestion = document.getElementById('question-img');
  state.elems.questionArtist = document.getElementById('question-artist');
  state.elems.questionPicture = document.getElementById('question-picture');
  state.elems.modal = document.getElementById('modal');
  state.elems.modalContent = document.getElementById('modal-content');
  state.elems.modalContentDescription = document.getElementById('modal-content-description');
  state.elems.imgQuestionModal = document.getElementById('img-question-modal');
  state.elems.congratulationsButtons = document.getElementById('congratulations-buttons');
  state.elems.btnCategories = document.getElementById('btn-categories');
  state.elems.answers = [];
  state.elems.namesAuthors = [];
  state.elems.regExpFindNumber = (/[^\d]/g);
  state.elems.questionCounter = 0;
  state.elems.trueQuestionCounter = 0;
  initNamesAuthors();
}
function initHandlers() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('artists-quiz-card')) {
      renderQuestionPage(target, 'artists');
    }

    if (target.classList.contains('pictures-quiz-card')) {
      renderQuestionPage(target, 'pictures');
    }

    if (target.classList.contains('result-button-card')) {
      renderResultPage(target);
    }

    if (target.classList.contains('true-answer')) {
      showTrueAnswer(target);
    } else if (!target.classList.contains('true-answer')
    && (target.classList.contains('answer-button')
    || target.classList.contains('pictures-answer-button'))) {
      showWrongAnswer(target);
    }

    if (target.classList.contains('next-page-btn') && state.elems.questionCounter === 1) {
      state.elems.answers = [];
      if (state.elems.typeGame === 'artistsQuiz') {
        showResultGame(state.controllers.artistsQuizContainer);
      } else if (state.elems.typeGame === 'picturesQuiz') {
        showResultGame(state.controllers.picturesQuizContainer);
      }

      // next question
    } else if (target.classList.contains('next-page-btn')) {
      quizSettings.clearCounter();
      state.elems.questionCounter += 1;
      renderNextQuestion();
    }

    if (target.id === 'btn-categories' && state.elems.typeGame === 'artistsQuiz') {
      hideAndShow(state.controllers.resultPage, state.controllers.artistsQuizContainer);
      toggleBtnCategories();
    }

    if (target.id === 'btn-categories' && state.elems.typeGame === 'picturesQuiz') {
      hideAndShow(state.controllers.resultPage, state.controllers.picturesQuizContainer);
      toggleBtnCategories();
    }

    if (state.elems.typeGame === 'artistsQuiz' && target.id === 'home-btn') {
      hideModal();
      hideAndShow(state.elems.questionArtistsContainer, state.elems.applicationContainer);
      state.elems.congratulationsButtons.classList.add('hide');
    }

    if (state.elems.typeGame === 'picturesQuiz' && target.id === 'home-btn') {
      hideModal();
      hideAndShow(state.elems.questionPicturesContainer, state.elems.applicationContainer);
      state.elems.congratulationsButtons.classList.add('hide');
    }

    if (state.elems.typeGame === 'artistsQuiz' && target.id === 'next-quiz-btn') {
      hideModal();
      clearQuestionPage(state.elems.questionArtistsContainer, state.elems.answersButtons);
      hideAndShow(state.elems.questionArtistsContainer, state.controllers.artistsQuizContainer);
    }

    if (state.elems.typeGame === 'picturesQuiz' && target.id === 'next-quiz-btn') {
      hideModal();
      clearQuestionPage(state.elems.questionPicturesContainer, state.elems.pictureAnswersButtons);
      hideAndShow(state.elems.questionPicturesContainer, state.controllers.picturesQuizContainer);
    }

    if (target.id === 'artists-quiz') {
      renderArtistsQuizPage();
    }

    if (target.id === 'pictures-quiz') {
      renderPicturesQuizPage();
    }

    if (target.id === 'btn-settings') {
      hideAndShowPages();
    }
  });
}
function createLayout() {
  state.controllers.resultPage = createElem({
    tag: 'div',
    classNames: ['result-page'],
  });
  state.controllers.nextQuestionBtn = createElem({
    tag: 'button',
    classNames: ['next-page-btn'],
  });
  state.controllers.artistsQuizContainer = createElem({
    tag: 'section',
    classNames: ['artistsquiz-container'],
  });
  state.controllers.picturesQuizContainer = createElem({
    tag: 'section',
    classNames: ['picturesquiz-container'],
  });
}
function renderResultOnCategoryCard(param) {
  const quiz = param;
  if (state.elems.typeGame === 'artistsQuiz') {
    state.elems.currCategory = parseInt(state.elems.numCategory / 10, 10);
    quiz.childNodes[state.elems.currCategory - 1]
      .style.background = ' rgb(255, 163, 163)';
  } else if (state.elems.typeGame === 'picturesQuiz') {
    state.elems.currCategory = parseInt(state.elems.numCategory / 10, 10) - 12;
    quiz.childNodes[state.elems.currCategory - 1]
      .style.background = ' rgb(255, 163, 163)';
  }
  quiz.querySelector(`.result-button-card.class${state.elems.currCategory - 1}`).classList.remove('hide');
  quiz.querySelector(`.text-card.class${state.elems.currCategory - 1}`).classList.remove('hide');
  quiz.querySelector(`.text-card.class${state.elems.currCategory - 1}`).textContent = `${state.elems.trueQuestionCounter}`;
}
function initNamesAuthors() {
  images.forEach((e) => {
    state.elems.namesAuthors.push(e.author);
  });
}
function showResultGame(type) {
  hideModal();
  modalCongratulations();
  renderResultOnCategoryCard(type);
  resetCounters();
}
function renderNextQuestion() {
  hideModal();
  state.elems.numCategory += 1;
  if (state.elems.typeGame === 'artistsQuiz') {
    renderQuestionArtistsPage(state.elems.numCategory);
  } else if (state.elems.typeGame === 'picturesQuiz') {
    renderQuestionPicturesPage(state.elems.numCategory);
  }
}

function clearQuestionPage(page, buttons) {
  page.innerHTML = '';
  buttons.forEach((e) => {
    e.remove();
  });
}
