import { header, namesAuthors, btnSettings, applicationContainer, btnArtistsQuiz, btnPicturesQuiz, btnCategories, questions,  artistsQuizContainer,picturesQuizContainer, hideAndShow, toggleBtnSettingsHome, toggleBtnCategories, questionImgContainer, buttonContainer, main} from "./constants";
let isArtistQuizPage=false;
let isPicturesQuizPage=false;
import {createQuestionPage} from './questionPage';
import { callTimer } from "./settings";
export let resultPage = createElem('section', 'result-page'); 





function createElem (teg, className,text){
   let el = document.createElement(teg);
   el.classList.add(className);
   el.innerHTML=text;
   return el;
}





function createResultQuestionCard (numResult, appendItem){
    let resultQuestionCard = createElem('div', 'result-question-card');
    resultQuestionCard.style.background=`url(./assets/image-data/img/${numResult*10}.jpg)`;
    appendItem.append(resultQuestionCard);
} 

function openResultPage (numResult){
    if(resultPage.classList.contains('hide')){
        hideAndShow(artistsQuizContainer, resultPage);
    } else {
        main.append(resultPage);
    for(let i = 0; i<10;i++){
        createResultQuestionCard(numResult+i,resultPage);
    }
        hideAndShow(artistsQuizContainer, resultPage);
    }
    
} 

// создание категории
function createArtistsQuizCard(id){    
    const artistsQuizCardContainer= document.createElement('div');
    const resultButtonCard = document.createElement('button');
    resultButtonCard.classList.add('result-button-card');
    resultButtonCard.innerHTML='score'
    
    resultButtonCard.classList.add(`${id}`);
    

    const cardText = document.createElement('div');
    cardText.classList.add('text-card');
    cardText.classList.add('hide');
    resultButtonCard.classList.add('hide');
    
    artistsQuizCardContainer.classList.add('artists-quiz-card-container', `${id}`);
    artistsQuizContainer.append(artistsQuizCardContainer);

    const artistsQuizCardTitle= document.createElement('h3');
    artistsQuizCardTitle.innerHTML=`Category ${id+1}`;
    artistsQuizCardContainer.append(artistsQuizCardTitle);
    
    const artistsQuizCard= document.createElement('div');
    artistsQuizCard.style.background=`url(./assets/image-data/img/${(id+1)*10}.jpg)`;
    artistsQuizCard.style.backgroundSize='cover';
    artistsQuizCard.classList.add('artists-quiz-card');
    artistsQuizCardContainer.append(artistsQuizCard);
    artistsQuizCard.append(cardText);
    artistsQuizCard.append(resultButtonCard);
}
function createPicturesQuizCard(id){    
    const picturesQuizCardContainer= document.createElement('div');
    picturesQuizCardContainer.classList.add('artists-quiz-card-container', `${id}`);
    picturesQuizContainer.append(picturesQuizCardContainer);

    const picturesQuizCardTitle= document.createElement('h3');
    picturesQuizCardTitle.innerHTML=`Category ${id-9}`;
    picturesQuizCardContainer.append(picturesQuizCardTitle);
    
    const picturesQuizCard= document.createElement('div');
    picturesQuizCard.style.background=`url(./assets/image-data/img/${(id+1)*10}.jpg)`;
    picturesQuizCard.style.backgroundSize='cover';
    picturesQuizCard.classList.add('artists-quiz-card');
    picturesQuizCardContainer.append(picturesQuizCard);
}
// страница категорий
function createArtistsQuizPage (){
    if(isArtistQuizPage==false){
        artistsQuizContainer.classList.add('artistsquiz-container');
        main.append(artistsQuizContainer);
        for (let i =0; i<12;i++){
            createArtistsQuizCard(i);
        }
        isArtistQuizPage=true;
    }
    
    hideAndShow(applicationContainer, artistsQuizContainer);
    toggleBtnSettingsHome();
}
function createPicturesQuizPage (){
    if(isPicturesQuizPage==false){
        picturesQuizContainer.classList.add('picturequiz-container');
        main.append(picturesQuizContainer);
        for (let i =12; i<24;i++){
            createPicturesQuizCard(i);
        }
        isPicturesQuizPage=true;
    }
    hideAndShow(applicationContainer, picturesQuizContainer);
    toggleBtnSettingsHome();
}
// Функция перехода от категории к вопросу, делегирование
artistsQuizContainer.onclick = function (event) {
    let target = event.target; 
    if (target.classList.contains('artists-quiz-card')){
        openQuestion(target);
        //callTimer();
    } else if (target.classList.contains('result-button-card')){
        let numResult =10*parseInt(target.className.replace(/[^\d]/g, ''));
        openResultPage (numResult);
        toggleBtnCategories();
        
    }
};
function openQuestion(target){
    toggleBtnCategories();
    let numCategory =10*parseInt(target.parentElement.className.replace(/[^\d]/g, ''));
    createQuestionPage(numCategory);
    hideAndShow(artistsQuizContainer, questionImgContainer);
}
btnCategories.addEventListener('click', ()=>{
      hideAndShow(questionImgContainer, artistsQuizContainer);
      if (btnCategories) btnCategories.classList.add('hide');
      questionImgContainer.innerHTML='';
      buttonContainer.querySelectorAll('.answer-button').forEach((e)=>{
          e.remove();
      })
});
  
export {btnArtistsQuiz, btnPicturesQuiz, createArtistsQuizPage, createPicturesQuizPage};

