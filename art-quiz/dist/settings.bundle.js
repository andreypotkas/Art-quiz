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

eval("const btnSettings = document.getElementById('btn-settings');\r\nconst header = document.getElementById('header');\r\nconst applicationContainer = document.getElementById('application-container');\r\nconst settingsContainer = document.createElement('div');\r\n\r\nconst volume = document.createElement('div');\r\n\r\n\r\nfunction addSettingsOnPage (){\r\n  applicationContainer.remove();\r\n    settingsContainer.classList.add('settings-container');\r\n    settingsContainer.innerHTML=`\r\n    <h2 class=\"settings-title\">settings</h2>\r\n    <div class=\"settings-volume\">\r\n    <h3 class=\"volume-title\">volume</h3>\r\n    <div class=\"volume-container\">\r\n    <div class=\"volume-button-mute\">\r\n    </div>\r\n    <div class=\"volume-slider\" id=\"volume-slider\">\r\n      <div class=\"volume-percentage\"></div>\r\n    </div>\r\n    <div class=\"volume-button\">\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"settings-time\">\r\n    <h3 class=\"time-title\">time</h3>\r\n    </div>\r\n    `\r\n    btnSettings.classList.remove('btn-settings');\r\n    btnSettings.classList.add('home');\r\n    btnSettings.innerHTML='start page';\r\n\r\n    header.after(settingsContainer);\r\n    \r\n    \r\n\r\n\r\nconst volumeSlider = document.getElementById(\"volume-slider\");\r\nvolumeSlider.addEventListener('click', e => {\r\n  const sliderWidth = window.getComputedStyle(volumeSlider).width;\r\n  const newVolume = e.offsetX / parseInt(sliderWidth);\r\n  //audio.volume = newVolume;\r\n  document.querySelector(\".volume-percentage\").style.width = newVolume * 100 + '%';\r\n}, false)\r\n\r\ndocument.querySelector(\".volume-button-mute\").addEventListener(\"click\", () => {\r\n    const volumeEl = audioPlayer.querySelector(\".volume-container .volume\");\r\n    audio.muted = !audio.muted;\r\n    if (audio.muted) {\r\n      volumeEl.classList.remove(\"icono-volumeMedium\");\r\n      volumeEl.classList.add(\"icono-volumeMute\");\r\n    } else {\r\n      volumeEl.classList.add(\"icono-volumeMedium\");\r\n      volumeEl.classList.remove(\"icono-volumeMute\");\r\n    }\r\n  });\r\n}\r\n\r\nfunction callStartPage () {\r\n  header.after(applicationContainer);\r\n  applicationContainer.innerHTML=\r\n  `<div class=\"content-container\" id=\"content-container\">\r\n\r\n  <div class=\"artists-quiz\">\r\n      <button id=\"artists-quiz\">artists-quiz</button>\r\n  </div>\r\n  <div class=\"pictures-quiz\">\r\n      <button id=\"pictures-quiz\">pictures-quiz</button>\r\n  </div>\r\n</div>`\r\n  settingsContainer.remove();\r\n  btnSettings.classList.add('btn-settings');\r\n  btnSettings.classList.remove('home');\r\n  btnSettings.innerHTML='';\r\n}\r\n\r\nbtnSettings.addEventListener('click', function(){\r\n  if(btnSettings.classList.contains('home')){\r\n    callStartPage();\r\n  }else{\r\n    addSettingsOnPage();\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./settings.js?");

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