import { header, btnSettings, applicationContainer, settingsContainer, main} from "./constants";

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


 function addSettingsOnPage() {
  applicationContainer.classList.remove("show");
  applicationContainer.classList.add("hide");
  settingsContainer.classList.remove("hide");
  settingsContainer.classList.add("show");
}

 function callStartPage() {
  applicationContainer.classList.remove("hide");
  settingsContainer.classList.remove("show");
  settingsContainer.classList.add("hide");
  applicationContainer.classList.add("show");
}



 function btnSettingsToggle () {
  if (btnSettings.classList.contains("home")) {
    callStartPage();
    btnSettings.classList.add("btn-settings");
    btnSettings.classList.remove("home");
    btnSettings.innerHTML = "";
  } else if (btnSettings.classList.contains("btn-settings")) {
    btnSettings.classList.remove("btn-settings");
    btnSettings.classList.add("home");
    btnSettings.innerHTML = "start page";
    addSettingsOnPage();
  }
  };

  export {btnSettingsToggle};