import images from '../../../../assets/image-data/images';
import Game from '../../game';

export default class Picture extends Game {
  renderQuestion(id) {
    this.container.innerHTML = `
        <section class="question-artists-container" id="question-artists-container">
                <div class="question" id="question-artist">${images[id].author} &#8220;${images[id].name}&#8221;</div>
                <div class="picture-name">  </div>
                <div class="timer-container" id="timer-container"></div>
                <div class="button-container" id="button-container">
                  <div>
                    <button class="answer-button-picture"></button>
                    <button class="answer-button-picture"></button>
                  </div>
                  <div>
                    <button class="answer-button-picture"></button>
                    <button class="answer-button-picture"></button>
                  </div>
                </div>
            </section>
        `;
    this.renderAnswers(id);
  }

  renderAnswers(id) {
    const btns = document.querySelectorAll('.answer-button-picture');
    btns.forEach((item) => {
      item.style.backgroundImage = `url('../../../assets/image-data/full/${this.getRandomInt(
        0,
        images.length
      )}full.jpg')`;
      item.onclick = () => this.answer(item, images[id]);
    });
    const random = this.getRandomInt(0, 3);
    btns[
      random
    ].style.backgroundImage = `url('../../../assets/image-data/full/${id}full.jpg')`;
    this.trueItem = btns[random];
  }
}
