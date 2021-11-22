import { resultPage } from "./artistsQuiz";
import { timer, wrongAns, trueAns, finallySound, openFalseAnswer } from "./questionPage";
import {
  header,
  isSound,
  questionImgContainer,
  btnSettings,
  applicationContainer,
  settingsContainer,
  main,
  hideAndShow,
  toggleBtnSettingsHome,
  artistsQuizContainer,
  picturesQuizContainer,
  
} from "./constants";

document
  .getElementById("volume-on-off")
  .addEventListener("click", function (isSound) {
    var checked = this.checked;
    if (!checked) {
      function volumeOff(elem) {
        elem.muted = true;
      }
      volumeOff(trueAns);
      volumeOff(wrongAns);
      volumeOff(finallySound);
      isSound = false;
    } else {
      function volumeOn(elem) {
        elem.muted = false;
      }
      volumeOn(trueAns);
      volumeOn(wrongAns);
      volumeOn(finallySound);
      isSound = true;
    }
  });
document.getElementById("timer-on-off").addEventListener("click", function () {
  var checked = this.checked;
  if (!checked) {
    timer.style.display = "none";
  } else {
    timer.style.display = "block";
  }
});

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener(
  "click",
  (e) => {
    if (isSound == false) {
      volumeSlider.style.opacity = "0.5";
    } else {
      volumeSlider.style.opacity = "1.0";
      const sliderWidth = window.getComputedStyle(volumeSlider).width;

      const newVolume = e.offsetX / parseInt(sliderWidth);
      wrongAns.volume = newVolume;
      trueAns.volume = newVolume;
      finallySound.volume = newVolume;
      document.querySelector(".volume-percentage").style.width =
        newVolume * 100 + "%";
    }
  },
  false
);

function hideAndShowPages() {
  if (settingsContainer.classList.contains("show")) {
    hideAndShow(settingsContainer, applicationContainer);
    toggleBtnSettingsHome();
  } else if (applicationContainer.classList.contains("show")) {
    hideAndShow(applicationContainer, settingsContainer);
    toggleBtnSettingsHome();
  } else if (artistsQuizContainer.classList.contains("show")) {
    hideAndShow(artistsQuizContainer, applicationContainer);
    toggleBtnSettingsHome();
  } else if (questionImgContainer.classList.contains("show")) {
    hideAndShow(questionImgContainer, applicationContainer);
    toggleBtnSettingsHome();
  } else if (picturesQuizContainer.classList.contains("show")) {
    hideAndShow(picturesQuizContainer, applicationContainer);
    toggleBtnSettingsHome();
  } else if (resultPage.classList.contains("show")) {
    hideAndShow(resultPage, applicationContainer);
    toggleBtnSettingsHome();
  }
}

export { hideAndShowPages };
