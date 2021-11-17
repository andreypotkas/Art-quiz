import category from "./category";
const header = document.getElementById('header');
const artistsQuizContainer= document.createElement('div');
const btnArtistsQuiz = document.getElementById('artists-quiz');
const btnPicturesQuiz = document.getElementById('pictures-quiz');
const applicationContainer = document.getElementById('application-container');
const btnSettings = document.getElementById('btn-settings');
const startPage = document.createElement('button');
startPage.classList.add('home');
startPage.innerHTML='start page';


const questions = category.render();


   function createArtistsQuizCard(id){    
    const artistsQuizCard= document.createElement('div');
    const artistsQuizCardContainer= document.createElement('div');

    const artistsQuizCardTitle= document.createElement('h3');
    artistsQuizCardTitle.innerHTML=`Category ${id}`;

    artistsQuizCardContainer.classList.add('artists-quiz-card-container');

    artistsQuizCard.style.background=`url(../src/assets/image-data/img/${id}.jpg)`;
    artistsQuizCard.style.backgroundSize='cover';
    artistsQuizCard.classList.add('artists-quiz-card');

    

    artistsQuizContainer.append(artistsQuizCardContainer);
    artistsQuizCardContainer.append(artistsQuizCardTitle);
    artistsQuizCardContainer.append(artistsQuizCard);
}


function createArtistsQuizPage (){
    header.append(startPage);
    artistsQuizContainer.classList.add('artistsquiz-container');
    header.after(artistsQuizContainer);
    applicationContainer.remove();
    for (let i =0; i<12;i++){
        createArtistsQuizCard(i);
    }
    
}



btnArtistsQuiz.addEventListener('click', createArtistsQuizPage);
btnPicturesQuiz.addEventListener('click', createArtistsQuizPage);