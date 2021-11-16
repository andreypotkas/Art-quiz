/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./settings.js":
/*!*********************!*\
  !*** ./settings.js ***!
  \*********************/
/***/ (() => {

eval("const btnSettings = document.getElementById('btn-settings');\r\nconst contentContainer = document.getElementById('content-container');\r\n\r\nfunction addSettingsOnPage (){\r\n    const settingsContainer = document.createElement('div');\r\n    const settingsTitle = document.createElement('h2');\r\n    const settingsVolume = document.createElement('div');\r\n    const settingsTime = document.createElement('div');\r\n    const volumeTitle = document.createElement('h3');\r\n    const timeTitle = document.createElement('h3');\r\n\r\n    settingsContainer.classList.add('settings-container');\r\n    settingsVolume.classList.add('settings-volume');\r\n    settingsTime.classList.add('settings-time');\r\n    settingsTitle.classList.add('settings-title');\r\n    volumeTitle.classList.add('volume-title');\r\n    timeTitle.classList.add('time-title');\r\n\r\n    btnSettings.after(settingsContainer);\r\n    settingsContainer.append(settingsTitle);\r\n    settingsContainer.append(settingsVolume);\r\n    settingsContainer.append(settingsTime);\r\n    settingsVolume.append(volumeTitle);\r\n    settingsTime.append(timeTitle);\r\n\r\n    settingsTitle.innerHTML='settings';\r\n    volumeTitle.innerHTML='volume';\r\n    timeTitle.innerHTML='time';\r\n    contentContainer.remove();\r\n}\r\n\r\nbtnSettings.addEventListener('click', addSettingsOnPage);\r\n\r\nconsole.log(btnSettings);\r\n\r\nconst volumeSlider = document.getElementById(\"volume-slider\");\r\nvolumeSlider.addEventListener('click', e => {\r\n  const sliderWidth = window.getComputedStyle(volumeSlider).width;\r\n  const newVolume = e.offsetX / parseInt(sliderWidth);\r\n  //audio.volume = newVolume;\r\n  document.querySelector(\".volume-percentage\").style.width = newVolume * 100 + '%';\r\n}, false)\r\n\r\n\r\ndocument.querySelector(\".volume-button\").addEventListener(\"click\", () => {\r\n  const volumeEl = audioPlayer.querySelector(\".volume-container .volume\");\r\n  audio.muted = !audio.muted;\r\n  if (audio.muted) {\r\n    volumeEl.classList.remove(\"icono-volumeMedium\");\r\n    volumeEl.classList.add(\"icono-volumeMute\");\r\n  } else {\r\n    volumeEl.classList.add(\"icono-volumeMedium\");\r\n    volumeEl.classList.remove(\"icono-volumeMute\");\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./settings.js"]();
/******/ 	
/******/ })()
;