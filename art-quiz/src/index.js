import './css/style.css';
import {btnSettings} from './constants';
import {hideAndShowPages} from './settings'
import {btnArtistsQuiz, btnPicturesQuiz, createArtistsQuizPage, createPicturesQuizPage} from './artistsQuiz';

// вызвать настройки и обратно в главное меню
btnSettings.addEventListener("click", hideAndShowPages);
btnArtistsQuiz.addEventListener('click', createArtistsQuizPage);
btnPicturesQuiz.addEventListener('click', createPicturesQuizPage);
