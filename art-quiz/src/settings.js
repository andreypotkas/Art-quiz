import { header,  questionImgContainer, btnSettings, applicationContainer, settingsContainer, main, hideAndShow, toggleBtnSettingsHome, artistsQuizContainer} from "./constants";

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener(
  "click",
  (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    document.querySelector(".volume-percentage").style.width =
      newVolume * 100 + "%";
  },
  false
);

 function hideAndShowPages () {
  if (settingsContainer.classList.contains("show")) {
    hideAndShow(settingsContainer, applicationContainer);
    toggleBtnSettingsHome();
  } else if (applicationContainer.classList.contains("show")) {
    hideAndShow(applicationContainer, settingsContainer);
    toggleBtnSettingsHome();
  } else if(artistsQuizContainer.classList.contains("show")){
    hideAndShow(artistsQuizContainer, applicationContainer);
    toggleBtnSettingsHome();
  } else if (questionImgContainer.classList.contains("show")){
    hideAndShow(questionImgContainer, applicationContainer);
    toggleBtnSettingsHome();
  }
};

  export {hideAndShowPages};

  