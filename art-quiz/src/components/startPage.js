/* eslint-disable import/no-cycle */
import { state } from './constants';
import { renderArtistsQuizCard, renderPicturesQuizCard } from './categoryPage';
import { hideAndShow, toggleBtnSettingsHome } from './utils';

export function renderArtistsQuizPage() {
  state.elems.typeGame = 'artistsQuiz';
  if (state.controllers.artistsQuizContainer.children.length === 0) {
    state.elems.main.append(state.controllers.artistsQuizContainer);
    for (let i = 0; i < 12; i += 1) {
      renderArtistsQuizCard(i);
    }
  }
  hideAndShow(state.elems.applicationContainer, state.controllers.artistsQuizContainer);
  toggleBtnSettingsHome();
}
export function renderPicturesQuizPage() {
  state.elems.typeGame = 'picturesQuiz';
  if (state.controllers.picturesQuizContainer.children.length === 0) {
    state.elems.main.append(state.controllers.picturesQuizContainer);
    for (let i = 12; i < 24; i += 1) {
      renderPicturesQuizCard(i);
    }
  }
  hideAndShow(state.elems.applicationContainer, state.controllers.picturesQuizContainer);
  toggleBtnSettingsHome();
}
