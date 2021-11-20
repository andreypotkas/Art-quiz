import { header, namesAuthors, btnSettings, applicationContainer, btnArtistsQuiz, btnPicturesQuiz, btnCategories, questions,  artistsQuizContainer, hideAndShow, toggleBtnSettingsHome, toggleBtnCategories, questionImgContainer, buttonContainer} from "./constants";
let isArtistQuizPage=false;
import {createQuestionPage} from './questionPage';


// создание категории
function createArtistsQuizCard(id){    
    const artistsQuizCardContainer= document.createElement('div');
    artistsQuizCardContainer.classList.add('artists-quiz-card-container', `${id}`);
    artistsQuizContainer.append(artistsQuizCardContainer);

    const artistsQuizCardTitle= document.createElement('h3');
    artistsQuizCardTitle.innerHTML=`Category ${id+1}`;
    artistsQuizCardContainer.append(artistsQuizCardTitle);
    
    const artistsQuizCard= document.createElement('div');
    artistsQuizCard.style.background=`url(../src/assets/image-data/img/${(id+1)*10}.jpg)`;
    artistsQuizCard.style.backgroundSize='cover';
    artistsQuizCard.classList.add('artists-quiz-card');
    artistsQuizCardContainer.append(artistsQuizCard);
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
// Функция перехода от категории к вопросу, делегирование
artistsQuizContainer.onclick = function (event) {
    let target = event.target; 
    function openQuestion() {
        // кнопка категории
        toggleBtnCategories();
        let numCategory =10*parseInt(target.parentElement.className.replace(/[^\d]/g, ''));
        //if(numCategory===0)numCategory=1;
        
        //img question
        createQuestionPage(numCategory);
        hideAndShow(artistsQuizContainer, questionImgContainer);
      
    }
    if (target.classList.contains('artists-quiz-card')){
        openQuestion();
    } 
  };

  btnCategories.addEventListener('click', ()=>{
      hideAndShow(questionImgContainer, artistsQuizContainer);
      if (btnCategories) btnCategories.classList.add('hide');
      questionImgContainer.innerHTML='';
      buttonContainer.querySelectorAll('.answer-button').forEach((e)=>{
          e.remove();
      })
  });
  
  export {btnArtistsQuiz, btnPicturesQuiz, createArtistsQuizPage};

