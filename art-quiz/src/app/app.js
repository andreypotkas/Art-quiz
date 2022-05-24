import Settings from '../components/settings/settings';
import Artist from '../components/game/games/artist/artist';
import Picture from '../components/game/games/picture/picture';

export default class App {
  constructor() {
    this.container = document.getElementById('container');
    this.artistsQuiz = new Artist('artists', this.container, 0);
    this.picturesQuiz = new Picture('pictures', this.container, 12);
    this.settungs = new Settings();
    this.state = {
      artists: {},
      pictures: {},
      settungs: {},
      header: {
        startPageBtn: document.getElementById('btn-start-page'),
        categoriesBtn: document.getElementById('btn-categories'),
        settings: document.getElementById('btn-settings'),
      },
    };
    this.initBtns();
  }

  initRender() {
    this.container.innerHTML = `
        <div class="content-container">
          <div>
              <button id="artists-quiz">artists-quiz</button>
              <div class="artists-quiz"></div>
          </div>
          <div>
            <button id="pictures-quiz">pictures-quiz</button>
            <div class="pictures-quiz"></div>
          </div>
        </div>
    `;
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
    this.state.header.startPageBtn.classList.remove('hide');
  }

  initBtns() {
    this.state.header.startPageBtn.addEventListener('click', () => {
      this.initRender();
      this.state.header.startPageBtn.classList.add('hide');
    });
  }
}
