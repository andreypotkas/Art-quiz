/* eslint-disable import/no-cycle */
import { state } from './constants';
import { hideAndShow, toggleBtnCategories, createElem } from './utils';

export function renderResultQuestionCard(numResult, appendItem, isTrue) {
  state.controllers.resultQuestionCard = createElem({
    tag: 'div',
    classNames: ['result-question-card'],
    style: {
      background: `url(./assets/image-data/img/${numResult}.jpg)`,
      backgroundSize: 'cover',
    },
  });
  if (!isTrue) {
    state.controllers.resultQuestionCard.style.filter = 'grayscale(100%)';
  }
  appendItem.append(state.controllers.resultQuestionCard);
}

export function addCardsOnResultPage(numResult) {
  for (let i = 0; i < 10; i += 1) {
    renderResultQuestionCard(numResult + i, state.controllers.resultPage, state.elems.answers[i]);
  }
  if (state.elems.typeGame === 'artistsQuiz') {
    hideAndShow(state.controllers.artistsQuizContainer, state.controllers.resultPage);
  } else if (state.elems.typeGame === 'picturesQuiz') {
    hideAndShow(state.controllers.picturesQuizContainer, state.controllers.resultPage);
  }
}
export function renderResultPage(target) {
  state.elems.main.append(state.controllers.resultPage);
  state.elems.targetParentBg = target.parentNode.style.backgroundImage;
  state.elems.numResult = parseInt(state.elems.targetParentBg.replace(state.elems.regExpFindNumber, ''), 10);
  addCardsOnResultPage(state.elems.numResult);
  toggleBtnCategories();
}
