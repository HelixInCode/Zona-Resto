/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $footer = document.getElementsByTagName('footer')[0];
var footerTemplate = function footerTemplate() {
  return '<div class="footer-container pt-4 pt-sm-0">\n      \n            <div class="footer-links py-0 p-sm-4">\n              <ul>\n                <li>\n                  <a href="#?">Nosotros</a>\n                </li>\n                <li>\n                  <a href="#?">Contacto</a>\n                </li>\n                <li>\n                  <a href="#?">Quiero ser Parte de la Zona</a>\n                </li>\n                <li>\n                  <a href="#?">Preguntas Frecuentes</a>\n                </li>\n              </ul>\n            </div>\n\n            <hr class="d-sm-none">\n            \n            <div class="footer-social-links py-0 py-sm-4">\n              <h6>Segu\xEDnos en nuestras</h6>\n              <ul>\n                <li>\n                  <a href="#?">\n                    <i class="fab fa-facebook-square"></i>\n                  </a>\n                </li>\n                <li>\n                  <a href="#?">\n                    <i class="fab fa-instagram"></i>\n                  </a>\n                </li>\n              </ul>\n            </div>\n\n            <hr class="d-sm-none">\n            \n            <div class="footer-phrase py-0 py-sm-4">\n              <h5>"Lorem ipsum dolor sit amet."</h5>\n            </div>\n\n            <div class="footer-img">\n              <img class="py-3" src="dist/img/zonaResto Blanco.png" alt="">\n              <img src="dist/img/footer2-2.png" alt="">\n            </div>\n\n          </div>\n\n          <div class="footer-bottom">\n            \xA9 2020 Copyright:\n            <a href="#"> zonaresto.com</a>\n          </div>';
};
$footer.innerHTML = footerTemplate();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var showHideModal = function showHideModal($btn, $modal) {
  $btn.addEventListener('click', function () {

    $modal.classList.toggle('hide');
  });
};

if (document.getElementById('modal-login')) {
  var $login = document.getElementById('modal-login');
  var $btnHideLogin = document.getElementById('close-login');
  var $btnShowLogin = document.getElementById('ingresar');

  showHideModal($btnHideLogin, $login);
  showHideModal($btnShowLogin, $login);
}

if (document.getElementById('modal-message-sent')) {
  var $messageSent = document.getElementById('modal-message-sent');
  var $btnHideSent = document.getElementById('close-sent');

  showHideModal($btnHideSent, $messageSent);
}

if (document.getElementById('modal-input-img')) {
  var $input = document.getElementById('modal-input-img');
  var $btnHideInput = document.getElementById('close-input');
  var $btnShowInput = document.getElementById('show-input');

  showHideModal($btnHideInput, $input);
  showHideModal($btnShowInput, $input);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Main Menu Elements
var $hamburger = document.getElementById('hamburger');
var $times = document.getElementById('times');
var $menuOverlay = document.getElementsByClassName('menu-overlay')[0];
var $menuItems = document.getElementsByClassName('menu-items')[0];
// Menu User Panel
// const $user = document.getElementsByClassName('user')[0]
// const $userPanel = $user.getElementsByTagName('ul')[0]
// const $userArrow = $user.getElementsByClassName('fa-angle-down')[0]

var Menu = function Menu(displayButton, menuList, optionalElement, class1, class2) {
  _classCallCheck(this, Menu);

  this.boton = displayButton;
  this.menu = menuList;
  this.option = optionalElement;
  this.clase1 = class1;
  this.clase2 = class2;
};

var displayMenu = function displayMenu(menuType) {
  menuType.boton.addEventListener('click', function () {
    menuType.menu.classList.toggle(menuType.clase1);
    menuType.option.classList.toggle(menuType.clase2);
  });
};
// document.addEventListener('DOMContentLoaded', (event) =>{

//   if($userPanel.children[0].children[0].innerText === ""){
//     //Hay sesión iniciada
//     $user.classList.toggle('d-none')

//   }else{
//     //No hay sesión iniciada
//     $menuItems.classList.toggle('four-buttons')
//     $menuItems.children[3].classList.toggle('d-none')
//   }
// })

var menuHamburger = new Menu($hamburger, $menuItems, $menuOverlay, 'hide', 'hide');
var menuOverlay = new Menu($menuOverlay, $menuItems, $menuOverlay, 'hide', 'hide');
// const menuUser = new Menu($user, $userPanel, $userArrow, 'hide', 'rotate')

// const menu = [menuHamburger, menuOverlay, menuUser]
var menu = [menuHamburger, menuOverlay];

menu.forEach(function (menuType) {
  return displayMenu(menuType);
});

if ($times) {
  $hamburger.addEventListener('click', function () {
    $hamburger.getElementsByTagName('i')[0].classList.toggle('d-none');
    $hamburger.getElementsByTagName('i')[1].classList.toggle('d-none');
  });
  $menuOverlay.addEventListener('click', function () {
    $hamburger.getElementsByTagName('i')[0].classList.toggle('d-none');
    $hamburger.getElementsByTagName('i')[1].classList.toggle('d-none');
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(4);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

/***/ })
/******/ ]);