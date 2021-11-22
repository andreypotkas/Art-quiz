import { header, main, btnSettings, applicationContainer, btnArtistsQuiz, btnPicturesQuiz, questions, questionImgContainer,  artistsQuizContainer, buttonContainer, namesAuthors, getRandomInt, nextQuestionBtn, answerButton, answersButtons, imgQuestion, btnCategories, hideAndShow} from "./constants";
import images from './assets/image-data/images.js';

let questionCounter =0;
let trueQuestionCounter=0;

function createQuestionPage (numCategory) {
  imgQuestion.src = `../src/assets/image-data/full/${numCategory}full.jpg`;
  // добавить кнопку ответа, 1 правильная, 3 случайные
  randomAnswersBtns(numCategory);
  
  buttonContainer.onclick = function (event) {
  let target = event.target; 
  if (target.classList.contains('true-answer')){
      trueQuestionCounter++;
      openTrueAnswer(target,numCategory);
  } else if(!target.classList.contains('true-answer') && target.classList.contains('answer-button')) {
    openFalseAnswer(target, numCategory);
  }
};
}

function randomAnswersBtns(numCategory){
  let trueAnswer = namesAuthors[numCategory];
  let randomBtn= getRandomInt(0, 4);
  for(let i =0; i<4;i++){
    answersButtons[i].style.background='none';
    let randomAuthorName= namesAuthors[getRandomInt(0, namesAuthors.length)];
      if(randomBtn != i){
    answersButtons[i].innerHTML=randomAuthorName;
      }else{
    answersButtons[i].innerHTML=trueAnswer;
    answersButtons[i].classList.add('true-answer');
 }
}
}
//модальное окно ответ на вопрос
function createModal (target, answer, color, numCategory){
  questionCounter++;
  target.style.background =color;
  
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalContentDescription = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('hide');
  modalContent.classList.add('modal-content')
  modalContentDescription.classList.add('modal-content-description')
  const imgQuestionModal =  new Image(400, 200);
  imgQuestionModal.src = `../src/assets/image-data/full/${numCategory}full.jpg`;
  imgQuestionModal.classList.add('img-question');
  modalContentDescription.innerHTML=`
  <div>${answer}</div>
  <div>${images[numCategory].name}</div>
  <div>${images[numCategory].author}</div>
  <div>${images[numCategory].year}</div>
  `
//модалбное окно на страницу
header.append(modal);
modal.classList.remove('hide');
modal.style.display='block';
modal.classList.add('show');
modal.append(modalContent);
modalContent.append(imgQuestionModal);
modalContent.append(modalContentDescription);
//  кнопка next Question на страницу
nextQuestionBtn.classList.add('next-page-btn');
nextQuestionBtn.style.background=`${color}`;
if(questionCounter==10){
  nextQuestionBtn.innerHTML='Результат';
}else{
  nextQuestionBtn.innerHTML='Продолжить';
}

modalContentDescription.append(nextQuestionBtn);
// переход на следующий вопрос
nextQuestionBtn.onclick = function (event) {
  let target = event.target; 
  if (target.classList.contains('next-page-btn') && questionCounter==10){
    modal.remove();
    modalCongratulations();
    let currCategory=parseInt(numCategory/10);
    artistsQuizContainer.querySelectorAll('.text-card')[currCategory].textContent=`${trueQuestionCounter}`;
    artistsQuizContainer.querySelectorAll('.text-card')[currCategory].classList.remove('hide');
    artistsQuizContainer.querySelectorAll('.artists-quiz-card-container').forEach((e)=>{
      if(e.classList.contains(currCategory)){
        e.style.background=' rgb(255, 163, 163)';
        questionCounter =0;
        trueQuestionCounter=0;
      }
    })
  } else if (target.classList.contains('next-page-btn')){
    modal.remove();
    createQuestionPage(numCategory+1);
  }
};
}

// модальное окно результы
function modalCongratulations (){
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalContentDescription = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('hide');
  modalContent.classList.add('modal-content')
  modalContentDescription.classList.add('modal-content-description')
  //const imgQuestionModal =  new Image(400, 200);
  //imgQuestionModal.src = `../src/assets/image-data/full/${numCategory}full.jpg`;
  //imgQuestionModal.classList.add('img-question');
  modalContentDescription.innerHTML=
  `<div>congratulations</div>
  <div>${trueQuestionCounter} / 10 </div>
  <div class="result-picture"></div>`

  const homeBtn = document.createElement('button');
  const nextQuizBtn = document.createElement('button');

  homeBtn.classList.add('start-page');
  homeBtn.style.background='black';
  homeBtn.innerHTML='start-page';
  homeBtn.style.marginLeft='0px';

  nextQuizBtn.classList.add('start-page');
  nextQuizBtn.style.background='black';
  nextQuizBtn.innerHTML='next quiz';
  nextQuizBtn.style.marginLeft='20px';

 
//модалбное окно на страницу
header.append(modal);
modal.classList.remove('hide');
modal.style.display='block';
modal.classList.add('show');
modal.append(modalContent);
modalContent.append(modalContentDescription);

modalContent.append(homeBtn);
modalContent.append(nextQuizBtn);

homeBtn.addEventListener('click', ()=>{
  modal.remove();
  hideAndShow(questionImgContainer, applicationContainer);
});
nextQuizBtn.addEventListener('click', ()=>{
  modal.remove();
  hideAndShow(questionImgContainer, artistsQuizContainer);
});
}

function openTrueAnswer(target, numCategory) {
  createModal(target, 'правильный ответ', 'green', numCategory);
  answersButtons.forEach((e)=>{
    e.classList.remove('true-answer')
  });
}
function openFalseAnswer(target, numCategory){
  createModal(target, 'неправильный ответ','red', numCategory);
  answersButtons.forEach((e)=>{
    e.classList.remove('true-answer')
  });
}

export {createQuestionPage};