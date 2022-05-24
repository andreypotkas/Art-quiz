export default class Modal {
  callModal(image, correctness) {
    const modal = document.createElement('div');
    modal.innerHTML = `
    <div class="modal">
        <div class="modal-content">
        <h2>${correctness} answer!</h2>
            <figure>
              <img src="./assets/image-data/img/${image.imageNum}.jpg" alt="foto">
            </figure>
            <div class="modal-content-description">
                <p>Picture: ${image.name}</p>
                <p>Author: ${image.author}</p>
            </div>
            <button class="next-page-btn">Next question</button>
        </div>
    </div>
    `;
    return modal;
  }

  callResultModal(correct, incorrect) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content result">
        <div class="result-cards-container">

        </div>
            <div class="modal-content-description">
                <p>Correct answers: ${correct}</p>
                <p>Incorrect answers: ${incorrect}</p>
            </div>
            <div class="congratulations-buttons">
                <button class="start-page modal-start-page-btn" >start page</button>
                <button class="start-page modal-next-quiz-btn">next quiz</button>
            </div>
        </div>
    `;
    return modal;
  }

  renderResultCards(answers) {
    const container = document.querySelector('.result-cards-container');
    for (let i = 0; i < 10; i += 1) {
      const el = document.createElement('div');
      el.classList.add('result-quiz-card-picture');
      el.style.background = `url(./assets/image-data/img/${(i + 1) * 10}.jpg)`;
      el.style.backgroundSize = 'cover';
      el.style.boxShadow = answers[i]
        ? '2px 2px 2px 2px green'
        : '2px 2px 2px 2px red';
      container.append(el);
    }
  }
}
