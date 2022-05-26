import Game from '../../game';
import images from '../../../../assets/image-data/images';

export default class Artist extends Game {
  renderQuestion(id) {
    this.container.innerHTML = `
    <section class="question-artists-container" id="question-artists-container">
            <div class="question">Who is the author of this picture?</div>
            <div class="picture-name">&#8220${images[id].name}&#8221</div>
            <div class="img-question">
            <img src="../../../assets/image-data/full/${id}full.jpg" alt="foto">
            </div>
            <div class="timer-container-question" id="timer-container"></div>
            <div class="button-container" id="button-container">
              <div>
                <button class="answer-button" id="answer-button"></button>
                <button class="answer-button" id="answer-button"></button>
              </div>
              <div>
                <button class="answer-button" id="answer-button"></button>
                <button class="answer-button" id="answer-button"></button>
              </div>
            </div>
        </section>
    `;
    this.renderAnswers(id);
    if (this.settings.timer) {
      this.startTimer();
    } else {
      document.querySelector('.timer-container-question').style.display =
        'none';
    }
  }

  renderAnswers(id) {
    const btns = document.querySelectorAll('.answer-button');
    btns.forEach((item) => {
      item.innerHTML = `${images[this.getRandomInt(0, images.length)].author}`;
      item.onclick = () => this.answer(item, images[id]);
    });
    const random = this.getRandomInt(0, 3);
    btns[random].innerHTML = images[id].author;
    this.trueItem = btns[random];
  }
}
