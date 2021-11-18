import './css/style.css';
import {btnSettings} from './constants';
import {btnSettingsToggle} from './settings'

// вызвать настройки и обратно в главное меню
btnSettings.addEventListener("click", btnSettingsToggle);
