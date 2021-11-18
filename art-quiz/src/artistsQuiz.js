import { header, btnSettings, applicationContainer, btnArtistsQuiz, btnPicturesQuiz, questions,  artistsQuizContainer} from "./constants";



const startPage = document.createElement('button');

artistsQuizContainer.classList.add('artistsquiz-container');
let isArtistQuizPage=false;


startPage.classList.add('home');
startPage.innerHTML='start page';

startPage.addEventListener('click', function(){
artistsQuizContainer.classList.add('hide');
artistsQuizContainer.classList.remove('show');
applicationContainer.classList.remove('hide');
applicationContainer.classList.add('show');
btnSettings.classList.remove('hide');
startPage.classList.add('hide');
});


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

function createArtistsQuizPage (){
    if(isArtistQuizPage==false){
        header.append(startPage);
        
        
        main.append(artistsQuizContainer);
        for (let i =0; i<12;i++){
            createArtistsQuizCard(i);
        }
        isArtistQuizPage=true;
    }
    artistsQuizContainer.classList.remove('hide');
    artistsQuizContainer.classList.add('show');
    startPage.classList.remove('hide');
    btnSettings.classList.add('hide');
    applicationContainer.classList.add('hide');
    applicationContainer.classList.remove('show');
   
}

btnArtistsQuiz.addEventListener('click', createArtistsQuizPage);
btnPicturesQuiz.addEventListener('click', createArtistsQuizPage);
artistsQuizContainer.onclick = function (event) {
    let target = event.target; 
    function highlight() {
        const questionImgContainer = document.createElement('div');
        questionImgContainer.classList.add('question-img-container');
        questionImgContainer.classList.add('hide');
        artistsQuizContainer.classList.remove('show');
        artistsQuizContainer.classList.add('hide');
        main.append(questionImgContainer);
        questionImgContainer.classList.remove('hide');
        questionImgContainer.classList.add('show');
        let numCategory =10*parseInt(target.parentElement.className.replace(/[^\d]/g, ''));
        const imgQuestion =  new Image(800, 500);
        imgQuestion.src = `../src/assets/image-data/full/${numCategory}full.jpg`;
        imgQuestion.classList.add('img-question');
        questionImgContainer.append(imgQuestion);
        for(let i =0; i<4;i++){
            const answerButton = document.createElement('button');
            answerButton.classList.add('answer-button');
            imgQuestion.after(answerButton);
        }

        artistsQuizContainer.classList.add('hide');
        
        
        console.log(questions.categoryQuestionsByAuthor[0]);
    }
    if (target.tagName == 'DIV'){
        highlight();
    } 
  };