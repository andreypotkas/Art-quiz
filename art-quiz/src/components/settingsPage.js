class Settings {
  constructor(
    counter,
    audioFiles,
    isSound = true,
    isTimer = true,
    state = {
      elems: {},
    },
    volume = 0.5,
  ) {
    this.isTimer = isTimer;
    this.state = state;
    this.isSound = isSound;
    this.volume = volume;
    this.audioFiles = audioFiles;
    this.counter = counter;
  }

  init() {
    this.initElems();
    this.initHandlers();
  }

  initElems() {
    this.state.elems.onOffVolumeBtn = document.getElementById('volume-on-off');
    this.state.elems.onOffTimerBtn = document.getElementById('timer-on-off');
    this.state.elems.volumeSlider = document.getElementById('volume-slider');
    this.state.elems.volumePercentage = document.querySelector('.volume-percentage');
    this.state.elems.timer = document.getElementById('timer-container');
    this.state.elems.timerOnOff = document.getElementById('timer-on-off');
    this.state.elems.tentacles = document.getElementById('tentacles').value;
    this.state.elems.tentaclesStart = document.getElementById('tentacles').value;
  }

  initHandlers() {
    document.addEventListener('click', (e) => {
      const { target } = e;
      if (target.id === 'volume-percentage' || target.id === 'volume-slider') {
        this.changeSizeVolume(e);
      }
    }, false);
    this.state.elems.onOffVolumeBtn.addEventListener('change', () => {
      this.changeStateVolume();
    });
    this.state.elems.onOffTimerBtn.addEventListener('change', () => {
      this.changeStateTimer();
    });
  }

  changeStateVolume() {
    if (this.isSound === true) {
      this.isSound = false;
    } else if (this.isSound === false) {
      this.isSound = true;
    }
  }

  changeSizeVolume(e) {
    this.state.elems.sliderWidth = window.getComputedStyle(this.state.elems.volumeSlider).width;
    this.volume = e.offsetX / parseInt(this.state.elems.sliderWidth, 10);
    this.state.elems.volumePercentage.style.width = `${this.volume * 100}%`;
  }

  isSound() {
    return this.isSound;
  }

  volume() {
    return this.volume;
  }

  changeStateTimer() {
    if (this.isTimer === true) {
      this.isTimer = false;
    } else if (this.isTimer === false) {
      this.isTimer = true;
    }
  }

  countdown() {
    this.state.elems.timer.innerHTML = this.state.elems.tentacles;
    this.state.elems.tentacles -= 1;
    if (this.state.elems.tentacles <= -1) {
      clearInterval(this.counter);
      this.resetCounter();
    }
  }

  clearCounter() {
    clearInterval(this.counter);
    this.resetCounter();
  }

  resetCounter() {
    this.state.elems.tentacles = this.state.elems.tentaclesStart;
  }

  callTimer() {
    this.counter = setInterval(this.countdown.bind(this), 1000);
  }
}
export default Settings;
