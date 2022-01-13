/* eslint-disable import/no-cycle */
import { state } from './constants';
import images from '../assets/image-data/images';

export function createElem(components) {
  const el = document.createElement(components.tag);
  components.classNames.forEach((e) => el.classList.add(e));
  if (components.style) {
    el.style.background = components.style.background;
    el.style.backgroundSize = components.style.backgroundSize;
  }
  if (components.text) {
    el.innerHTML = components.text;
  }
  return el;
}
export function hideAndShow(hide, show) {
  hide.classList.remove('show');
  hide.classList.add('hide');
  show.classList.remove('hide');
  show.classList.add('show');
}
export function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export function toggleBtnSettingsHome() {
  if (state.elems.btnSettings.classList.contains('start-page')) {
    state.elems.btnSettings.classList.add('btn-settings');
    state.elems.btnSettings.classList.remove('start-page');
    state.elems.btnSettings.innerHTML = '';
  } else if (state.elems.btnSettings.classList.contains('btn-settings')) {
    state.elems.btnSettings.classList.remove('btn-settings');
    state.elems.btnSettings.classList.add('start-page');
    state.elems.btnSettings.innerHTML = 'start page';
  } else if (
    state.controllers.artistsQuizContainer.classList.contains('show')
      || state.controllers.picturesQuizContainer.classList.contains('show')
  ) {
    state.elems.btnSettings.classList.add('btn-settings');
    state.elems.btnSettings.classList.remove('start-page');
    state.elems.btnSettings.innerHTML = '';
  } else if (state.controllers.resultPage.classList.contains('show')) {
    state.elems.btnSettings.classList.add('btn-settings');
    state.elems.btnSettings.classList.remove('start-page');
    state.elems.btnSettings.innerHTML = '';
  }
}
export function toggleBtnCategories() {
  if (!state.elems.btnCategories.classList.contains('hide')) {
    state.elems.btnCategories.classList.add('hide');
  } else {
    state.elems.btnCategories.classList.remove('hide');
  }
}
export function renderAnswersBtns(numCategory) {
  state.elems.questionArtist.innerHTML = `Кто нарисовал ${images[state.elems.numCategory].name}?`;
  state.elems.trueAnswer = state.elems.namesAuthors[numCategory];
  state.elems.randomBtn = getRandomInt(0, 4);
  for (let i = 0; i < 4; i += 1) {
    state.elems.answersButtons[i].style.background = 'none';
    const randomAuthorName = state.elems
      .namesAuthors[getRandomInt(0, state.elems.namesAuthors.length)];
    if (state.elems.randomBtn !== i) {
      state.elems.answersButtons[i].innerHTML = randomAuthorName;
    } else {
      state.elems.answersButtons[i].innerHTML = state.elems.trueAnswer;
      state.elems.answersButtons[i].classList.add('true-answer');
    }
  }
}
export function renderAnswersPicturesBtns(truePictureNum) {
  state.elems.questionPicture.innerHTML = `Какую из этих картин нарисова ${images[state.elems.numCategory].author}?`;
  state.elems.numCategory = truePictureNum;
  state.elems.randomBtn = getRandomInt(0, 4);
  for (let i = 0; i < 4; i += 1) {
    state.elems.pictureAnswersButtons[i].style.background = 'none';
    const randomPictureNum = getRandomInt(0, state.elems.namesAuthors.length);
    if (state.elems.randomBtn !== i) {
      state.elems.pictureAnswersButtons[i].style.backgroundImage = `url(./assets/image-data/img/${randomPictureNum}.jpg)`;
      state.elems.pictureAnswersButtons[i].style.backgroundSize = 'cover';
    } else {
      state.elems.pictureAnswersButtons[i].style.backgroundImage = `url(./assets/image-data/img/${truePictureNum}.jpg)`;
      state.elems.pictureAnswersButtons[i].style.backgroundSize = 'cover';
      state.elems.pictureAnswersButtons[i].classList.add('true-answer');
    }
  }
}
export function hideAndShowPages() {
  if (state.elems.settingsContainer.classList.contains('show')) {
    hideAndShow(state.elems.settingsContainer, state.elems.applicationContainer);
  } else if (state.elems.applicationContainer.classList.contains('show')) {
    hideAndShow(state.elems.applicationContainer, state.elems.settingsContainer);
  } else if (state.controllers.artistsQuizContainer.classList.contains('show')) {
    hideAndShow(state.controllers.artistsQuizContainer, state.elems.applicationContainer);
  } else if (state.elems.questionArtistsContainer.classList.contains('show')) {
    hideAndShow(state.elems.questionArtistsContainer, state.elems.applicationContainer);
  } else if (state.controllers.picturesQuizContainer.classList.contains('show')) {
    hideAndShow(state.controllers.picturesQuizContainer, state.elems.applicationContainer);
  } else if (state.controllers.resultPage.classList.contains('show')) {
    hideAndShow(state.controllers.resultPage, state.elems.applicationContainer);
  }
  toggleBtnSettingsHome();
}
export function showModal() {
  state.elems.modal.classList.remove('hide');
  state.elems.modal.classList.add('show');
}
export function hideModal() {
  state.elems.modal.classList.add('hide');
  state.elems.modal.classList.remove('show');
}
export function resetCounters() {
  state.elems.questionCounter = 0;
  state.elems.trueQuestionCounter = 0;
}
