import category from "./category";

export const btnSettings = document.getElementById("btn-settings");
export const header = document.getElementById("header");
export const applicationContainer = document.getElementById("application-container");
export const settingsContainer = document.getElementById("settings-container");
export const main = document.getElementById("main");
export const btnArtistsQuiz = document.getElementById('artists-quiz');
export const btnPicturesQuiz = document.getElementById('pictures-quiz');
export const questions = category.render();
export const artistsQuizContainer= document.createElement('section');
export const namesAuthors = [];
export const questionImgContainer = document.createElement('div');
export const btnCategories = document.createElement('button');
export const buttonContainer = document.createElement('div');      

function hideAndShow (hide, show){
    hide.classList.add('hide');
    hide.classList.remove('show');
    show.classList.remove('hide');
    show.classList.add('show');
}
export {hideAndShow};

function toggleBtnSettingsHome(){
    if (btnSettings.classList.contains("start-page")){
      btnSettings.classList.add("btn-settings");
      btnSettings.classList.remove("start-page");
      btnSettings.innerHTML = "";
    } else if (btnSettings.classList.contains("btn-settings")) {
      btnSettings.classList.remove("btn-settings");
      btnSettings.classList.add("start-page");
      btnSettings.innerHTML = "start page";
    } else if(artistsQuizContainer.classList.contains('show')){
      btnSettings.classList.add("btn-settings");
      btnSettings.classList.remove("start-page");
      btnSettings.innerHTML = "";
    } else if(questionImgContainer.classList.contains('show')){

    }
  }
export {toggleBtnSettingsHome};

questions.categoryQuestionsByAuthor.forEach((e)=>{
  e.forEach((e)=>{
   namesAuthors.push(e.author);
   
  })
});
questions.categoryQuestionsByName.forEach((e)=>{
e.forEach((e)=>{
 namesAuthors.push(e.author);
 
})
});

function toggleBtnCategories() {
  if (!btnCategories.classList.contains('hide')){
      btnCategories.classList.add('start-page');
      btnCategories.innerHTML='categories';
      header.prepend(btnCategories);
  }
  btnCategories.classList.remove('hide');
}
export {toggleBtnCategories};


function createQuestionPage (numCategory) {
  questionImgContainer.classList.add('question-img-container');
  questionImgContainer.classList.add('hide');
  main.append(questionImgContainer);
  const imgQuestion =  new Image(800, 500);
  imgQuestion.src = `../src/assets/image-data/full/${numCategory}full.jpg`;
  imgQuestion.classList.add('img-question');
  questionImgContainer.append(imgQuestion);

  buttonContainer.classList.add('button-container');
  questionImgContainer.append(buttonContainer);

  for(let i =0; i<4;i++){
      const answerButton = document.createElement('button');
      answerButton.classList.add('answer-button');
      buttonContainer.append(answerButton);
      let randomAuthorName= namesAuthors[Math.floor(Math.random()*namesAuthors.length)];
      answerButton.innerHTML=randomAuthorName;
  }
}
export {createQuestionPage};
