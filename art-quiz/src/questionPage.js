import { header, main, btnSettings, applicationContainer, btnArtistsQuiz, btnPicturesQuiz, questions, questionImgContainer,  artistsQuizContainer, buttonContainer, namesAuthors, getRandomInt, nextQuestionBtn, answerButton, answersButtons, imgQuestion, btnCategories, hideAndShow} from "./constants";
import images from './assets/image-data/images.js';


let questionCounter =0;
let trueQuestionCounter=0;



function createQuestionPage (numCategory) {
 
  imgQuestion.src = `../src/assets/image-data/full/${numCategory}full.jpg`;
  const trueAnswer = namesAuthors[numCategory];
  let randomBtn= getRandomInt(0, 4);
  // добавить кнопку ответа, 1 правильная, 3 случайные
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
buttonContainer.onclick = function (event) {
  let target = event.target; 

  function createModal (answer, color){
    
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
  if(questionCounter==3){
    nextQuestionBtn.innerHTML='Результат';
  }else{
    nextQuestionBtn.innerHTML='Next';
  }
  
  modalContentDescription.append(nextQuestionBtn);
  
  nextQuestionBtn.onclick = function (event) {
        
   
    let target = event.target; 

    if (target.classList.contains('next-page-btn') && questionCounter==3){
      
      modal.remove();
      modalCongratulations();
    } else if (target.classList.contains('next-page-btn')){
      modal.remove();
      createQuestionPage(numCategory+1);
    }
  };
  }
  function openTrueAnswer() {
    createModal('правильный ответ', 'green');
  }
  function openFalseAnswer(){
    createModal('неправильный ответ','red');
  }
  if (target.classList.contains('true-answer')){
    trueQuestionCounter++;
      openTrueAnswer();
  } else if(!target.classList.contains('true-answer') && target.classList.contains('answer-button')) {
    openFalseAnswer();
  }
};
}


export {createQuestionPage};

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