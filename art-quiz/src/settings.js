const btnSettings = document.getElementById('btn-settings');
const header = document.getElementById('header');
const applicationContainer = document.getElementById('application-container');
const settingsContainer = document.createElement('div');

const volume = document.createElement('div');


function addSettingsOnPage (){
  applicationContainer.remove();
    settingsContainer.classList.add('settings-container');
    settingsContainer.innerHTML=`
    <h2 class="settings-title">settings</h2>
    <div class="settings-volume">
    <h3 class="volume-title">volume</h3>
    <div class="volume-container">
    <div class="volume-button-mute">
    </div>
    <div class="volume-slider" id="volume-slider">
      <div class="volume-percentage"></div>
    </div>
    <div class="volume-button">
    </div>
    </div>
    </div>
    <div class="settings-time">
    <h3 class="time-title">time</h3>
    </div>
    `
    btnSettings.classList.remove('btn-settings');
    btnSettings.classList.add('home');
    btnSettings.innerHTML='start page';

    header.after(settingsContainer);
    
    


const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  //audio.volume = newVolume;
  document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

document.querySelector(".volume-button-mute").addEventListener("click", () => {
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
}

function callStartPage () {
  header.after(applicationContainer);
  applicationContainer.innerHTML=
  `<div class="content-container" id="content-container">

  <div class="artists-quiz">
      <button id="artists-quiz">artists-quiz</button>
  </div>
  <div class="pictures-quiz">
      <button id="pictures-quiz">pictures-quiz</button>
  </div>
</div>`
  settingsContainer.remove();
  btnSettings.classList.add('btn-settings');
  btnSettings.classList.remove('home');
  btnSettings.innerHTML='';
}

btnSettings.addEventListener('click', function(){
  if(btnSettings.classList.contains('home')){
    callStartPage();
  }else{
    addSettingsOnPage();
  }
});

