
import images from "./assets/image-data/images";
import category from "./category";

export const artistsQuizContainer = document.createElement("section");
export const btnSettings = document.getElementById("btn-settings");
export const header = document.getElementById("header");
export const applicationContainer = document.getElementById(
  "application-container"
);
export const settingsContainer = document.getElementById("settings-container");
export const main = document.getElementById("main");
export const btnArtistsQuiz = document.getElementById("artists-quiz");
export const btnPicturesQuiz = document.getElementById("pictures-quiz");
export const questions = category.render();

export const picturesQuizContainer = document.createElement("section");
export const namesAuthors = [];
export const questionImgContainer = document.getElementById(
  "question-img-container"
);
export const btnCategories = document.createElement("button");
export const buttonContainer = document.getElementById("button-container");
export const nextQuestionBtn = document.createElement("button");
export const answerButton = document.getElementById("answer-button");
export const answersButtons = buttonContainer.querySelectorAll(".answer-button");
export const imgQuestion = document.getElementById("question-img");
export let isSound=true;
export let timer = document.getElementById('tentacles');






images.forEach((e) => {
  namesAuthors.push(e.author);
});
function hideAndShow(hide, show) {
  hide.classList.add("hide");
  hide.classList.remove("show");
  show.classList.remove("hide");
  show.classList.add("show");
}
export { hideAndShow };

function toggleBtnSettingsHome() {
  if (btnSettings.classList.contains("start-page")) {
    btnSettings.classList.add("btn-settings");
    btnSettings.classList.remove("start-page");
    btnSettings.innerHTML = "";
  } else if (btnSettings.classList.contains("btn-settings")) {
    btnSettings.classList.remove("btn-settings");
    btnSettings.classList.add("start-page");
    btnSettings.innerHTML = "start page";
  } else if (
    artistsQuizContainer.classList.contains("show") ||
    picturesQuizContainer.classList.contains("show")
  ) {
    btnSettings.classList.add("btn-settings");
    btnSettings.classList.remove("start-page");
    btnSettings.innerHTML = "";
  } else if (resultPage.classList.contains("show")) {
    btnSettings.classList.add("btn-settings");
    btnSettings.classList.remove("start-page");
    btnSettings.innerHTML = "";
  }
}
export { toggleBtnSettingsHome };

function toggleBtnCategories() {
  if (!btnCategories.classList.contains("hide")) {
    btnCategories.classList.add("start-page");
    btnCategories.innerHTML = "categories";
    header.prepend(btnCategories);
  }
  btnCategories.classList.remove("hide");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
export { getRandomInt };
export { toggleBtnCategories };
