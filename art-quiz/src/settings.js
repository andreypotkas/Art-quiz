const btnSettings = document.getElementById('btn-settings');
const contentContainer = document.getElementById('content-container');

function addSettingsOnPage (){
    const settingsContainer = document.createElement('div');
    const settingsTitle = document.createElement('h2');
    const settingsVolume = document.createElement('div');
    const settingsTime = document.createElement('div');
    const volumeTitle = document.createElement('h3');
    const timeTitle = document.createElement('h3');

    settingsContainer.classList.add('settings-container');
    settingsVolume.classList.add('settings-volume');
    settingsTime.classList.add('settings-time');
    settingsTitle.classList.add('settings-title');
    volumeTitle.classList.add('volume-title');
    timeTitle.classList.add('time-title');

    btnSettings.after(settingsContainer);
    settingsContainer.append(settingsTitle);
    settingsContainer.append(settingsVolume);
    settingsContainer.append(settingsTime);
    settingsVolume.append(volumeTitle);
    settingsTime.append(timeTitle);

    settingsTitle.innerHTML='settings';
    volumeTitle.innerHTML='volume';
    timeTitle.innerHTML='time';
    contentContainer.remove();
}

btnSettings.addEventListener('click', addSettingsOnPage);

console.log(btnSettings);

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  //audio.volume = newVolume;
  document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)


document.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

