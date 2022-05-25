import Settings from '../components/settings/settings';
import Artist from '../components/game/games/artist/artist';
import Picture from '../components/game/games/picture/picture';

export default class App {
  constructor() {
    this.container = document.getElementById('container');
    this.artistsQuiz = new Artist('artists', this.container, 0);
    this.picturesQuiz = new Picture('pictures', this.container, 12);
    this.settings = new Settings();
    this.header = {
      startPageBtn: document.getElementById('btn-start-page'),
      categoriesBtn: document.getElementById('btn-categories'),
      settingsBtn: document.getElementById('btn-settings'),
    };
    this.initRender();
    this.initBtns();
  }

  initRender() {
    this.container.innerHTML = `
        <div class="games-container">
          <button id="artists-quiz">artists quiz</button>
          <button id="pictures-quiz">pictures quiz</button>
        </div>
        
    `;
    this.container.style.alignItems = 'flex-end';
    this.initHandlers();
  }

  initHandlers() {
    document.getElementById('artists-quiz').addEventListener('click', () => {
      this.artistsQuiz.renderCategoryPage();
      this.showStartPageBtn();
    });
    document.getElementById('pictures-quiz').addEventListener('click', () => {
      this.picturesQuiz.renderCategoryPage();
      this.showStartPageBtn();
    });
  }

  showStartPageBtn() {
    this.header.startPageBtn.classList.remove('hide');
  }

  initBtns() {
    this.header.startPageBtn.addEventListener('click', () => {
      this.initRender();
      this.header.startPageBtn.classList.add('hide');
    });
  }
}
