import Game from '../../game';
import images from '../../../../assets/image-data/images';

export default class Artist extends Game {
  renderQuestion(id) {
    this.container.innerHTML = `
    <section class="question-artists-container" id="question-artists-container">
            <div class="question" id="question-artist">Who is the author of this picture?</div>
            <div class="picture-name">${images[id].name}</div>
            <div class="img-question">
            <img src="../../../assets/image-data/full/${id}full.jpg" alt="foto">
            </div>
            <div class="timer-container" id="timer-container"></div>
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
  }

  renderAnswers(id) {
    const btns = document.querySelectorAll('.answer-button');
    btns.forEach((item) => {
      item.innerHTML = `${images[this.getRandomInt(0, images.length)].author}`;
      item.onclick = () => this.answer(item, images[id]);
    });
    const random = this.getRandomInt(0, 3);
    btns[random].innerHTML = `${images[id].author}`;
  }
}
