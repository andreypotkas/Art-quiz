/* eslint-disable import/no-cycle */
import { createElem, hideAndShow, toggleBtnCategories } from './utils';
import { state } from './constants';
import { renderQuestionPicturesPage, renderQuestionArtistsPage } from './questionPage';

export function createArtistsQuizCard(id) {
  state.controllers.artistsQuizCardContainer = createElem({
    tag: 'div',
    classNames: ['artists-quiz-card-container'],
  });
  state.controllers.artistsQuizCard = createElem({
    tag: 'div',
    classNames: ['artists-quiz-card'],
    style: {
      background: `url(./assets/image-data/img/${(id + 1) * 10}.jpg)`,
      backgroundSize: 'cover',
    },
  });
  state.controllers.scoreOnCard = createElem({
    tag: 'button',
    classNames: ['result-button-card', 'hide', `class${id}`],
    text: 'score',
  });
  state.controllers.artistsQuizCardTitle = createElem({
    tag: 'h3',
    classNames: ['artists-quiz-card-title'],
    text: `Category ${id + 1}`,
  });
  state.controllers.cardText = createElem({
    tag: 'div',
    classNames: ['text-card', 'hide', `class${id}`],
  });
}
export function renderArtistsQuizCard(id) {
  createArtistsQuizCard(id);
  state.controllers.artistsQuizContainer.append(state.controllers.artistsQuizCardContainer);
  state.controllers.artistsQuizCardContainer.append(state.controllers.artistsQuizCardTitle);
  state.controllers.artistsQuizCardContainer.append(state.controllers.artistsQuizCard);
  state.controllers.artistsQuizCard.append(state.controllers.cardText);
  state.controllers.artistsQuizCard.append(state.controllers.scoreOnCard);
}

export function createPicturesQuizCard(id) {
  state.controllers.picturesQuizCardContainer = createElem({
    tag: 'div',
    classNames: ['pictures-quiz-card-container'],
  });
  state.controllers.picturesQuizCard = createElem({
    tag: 'div',
    classNames: ['pictures-quiz-card'],
    style: {
      background: `url(./assets/image-data/img/${(id + 1) * 10}.jpg)`,
      backgroundSize: 'cover',
    },
  });
  state.controllers.scoreOnCard = createElem({
    tag: 'button',
    classNames: ['result-button-card', 'hide', `class${id - 12}`],
    text: 'score',
  });
  state.controllers.picturesQuizCardTitle = createElem({
    tag: 'h3',
    classNames: ['pictures-quiz-card-title'],
    text: `Category ${id - 11}`,
  });
  state.controllers.cardText = createElem({
    tag: 'div',
    classNames: ['text-card', 'hide', `class${id - 12}`],
  });
}
export function renderPicturesQuizCard(id) {
  createPicturesQuizCard(id);
  state.controllers.picturesQuizContainer.append(state.controllers.picturesQuizCardContainer);
  state.controllers.picturesQuizCardContainer.append(state.controllers.picturesQuizCardTitle);
  state.controllers.picturesQuizCardContainer.append(state.controllers.picturesQuizCard);
  state.controllers.picturesQuizCard.append(state.controllers.cardText);
  state.controllers.picturesQuizCard.append(state.controllers.scoreOnCard);
}

export function renderQuestionPage(target, type) {
  state.elems.targetBg = target.style.backgroundImage;
  state.elems.numCategory = parseInt(state.elems.targetBg.replace(state.elems.regExpFindNumber, ''), 10);
  if (type === 'artists') {
    renderQuestionArtistsPage(state.elems.numCategory);
    hideAndShow(state.controllers.artistsQuizContainer, state.elems.questionArtistsContainer);
  } else if (type === 'pictures') {
    renderQuestionPicturesPage(state.elems.numCategory);
    hideAndShow(state.controllers.picturesQuizContainer, state.elems.questionPicturesContainer);
  }
}
