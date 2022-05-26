export default class Settings {
  constructor(container) {
    this.container = container;
    this.volume = true;
    this.timer = true;
    this.volumeValue = 0.9;
    this.timerValue = 20;
    this.isCheckedVolume = '';
    this.isCheckedTimer = '';
  }

  renderSettingsPage() {
    if (this.volume) this.isCheckedVolume = 'checked';
    if (this.timer) this.isCheckedTimer = 'checked';
    this.container.innerHTML = '';
    this.container.style.alignItems = 'center';
    const el = document.createElement('section');
    el.classList.add('settings-container');
    el.innerHTML = `
    <h2 class="settings-title">Settings</h2>
      <div class="config-container">
      <div class="settings-volume">
        <h2 class="volume-title">Volume</h2>
        <div class="volume-container">
          <label for="volume">On/Off</label>
          <input type="checkbox" id="volume-check" name="volume" ${this.isCheckedVolume} >
          <p class="volume-button"></p>
        </div>
        <div class="volume-container">
          <input  id="volumeValue" type="range">
        </div>
       </div>
      <div class="settings-time">
        <h2 class="time-title">Timer</h2>
        <div class="timer-container">
          <label for="timer">On/Off</label>
          <input type="checkbox" id="timer-check" name="timer" ${this.isCheckedTimer}>
          <p class="timer-button"></p>
        </div>
        <div class="timer-container">
        <select id="timerValue" name="timerValue">
          <option value="10">10s</option>
          <option value="20" selected>20s</option>
          <option value="30">30s</option>
        </select>
        </div>
      </div>
    </div>
    `;
    this.container.append(el);
    this.initBtns();
  }

  initBtns() {
    document.getElementById('timer-check').onclick = () => this.toggleTimer();
    document.getElementById('volume-check').onclick = () => this.toggleVolume();
    document.getElementById('volumeValue').onchange = () =>
      this.setVolumeValue();
    document.getElementById('timerValue').onchange = () => this.setTimerValue();
  }

  setVolumeValue() {
    this.volumeValue = document.getElementById('volumeValue').value;
  }

  setTimerValue() {
    this.timerValue = document.getElementById('timerValue').value;
  }

  toggleTimer() {
    if (this.timer) {
      document.querySelector('.timer-button').style.backgroundImage =
        "url('../../../assets/img/icons/timer-off.png')";
    } else {
      document.querySelector('.timer-button').style.backgroundImage =
        "url('../../../assets/img/icons/timer_7.png')";
    }
    this.timer = !this.timer;
  }

  toggleVolume() {
    if (this.volume) {
      document.querySelector('.volume-button').style.backgroundImage =
        "url('../../../assets/img/icons/sound.png')";
    } else {
      document.querySelector('.volume-button').style.backgroundImage =
        "url('../../../assets/img/icons/sound_PNG6.png')";
    }
    this.volume = !this.volume;
  }
}
