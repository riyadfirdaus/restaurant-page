/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/menu-card.js":
/*!*************************************!*\
  !*** ./src/components/menu-card.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuCard)
/* harmony export */ });
function MenuCard(data) {
  const container = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("span");
  const description = document.createElement("span");
  const price = document.createElement("span");

  container.classList.add("menu-card");
  description.classList.add("description");

  title.textContent = `${data.name}`;
  description.textContent = `${data.description}`;
  price.textContent = `Rp${data.price}`;

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(price);

  return container;
}


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
  const header = document.createElement("Header");
  header.classList.add("header");
  header.innerHTML = `<h1>Indonesian Cuisine<h1/>`;
  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `Copyright &copy; Riyad Firdaus`;
  footer.classList.add("footer");
  footer.setAttribute("id", footer);
  return footer;
}




/***/ }),

/***/ "./src/main/contact.js":
/*!*****************************!*\
  !*** ./src/main/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const main = document.getElementById("main");
  const map = document.createElement("div");
  const container = document.createElement("section");
  const textContainer = document.createElement("div");
  const description = document.createElement("p");
  const h2 = document.createElement("h2");

  main.innerHTML = "";
  container.classList.add("contact-us");
  textContainer.classList.add("contact-text");
  h2.classList.add("title");
  h2.textContent = "Location and Hours";

  description.innerHTML =
    "500 Terry Francine Street<br>San Francisco, CA 94158<br><br>Open Monday to Friday 12pm to 10pm<br>Saturday to Sunday 12pm to 11pm";

  map.classList.add("map");
  map.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.021392456862!2d108.53444368909425!3d-6.738673768479371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1dec526731e5%3A0x7feba65303cbac4e!2sWarung%20Nasi%20Sederhana!5e0!3m2!1sen!2sid!4v1693452516821!5m2!1sen!2sid" height= 200px; style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  textContainer.appendChild(h2);
  textContainer.appendChild(description);
  container.appendChild(textContainer);
  container.appendChild(map);
  main.appendChild(container);
}


/***/ }),

/***/ "./src/main/home.js":
/*!**************************!*\
  !*** ./src/main/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  const home = document.createElement("div");
  const hero = document.createElement("section");
  let p = document.createElement("p");
  home.classList.add("home");
  hero.classList.add("hero");

  p.innerHTML = `INDONESIAN CUISINE`;
  p.classList.add("unselectable");
  hero.appendChild(p);

  //Create Quote Section
  const quote = document.createElement("section");
  quote.classList.add("quoteContainer");
  quote.classList.add("unselectable");
  p = document.createElement("p");
  p.innerHTML = "Indonesian Cuisine";
  p.classList.add("subtitle");
  quote.appendChild(p);

  p = document.createElement("p");
  p.innerHTML =
    "“Eating Indonesian food is like taking a journey through the country’s history and culture.”";
  p.classList.add("quote");
  quote.appendChild(p);

  home.appendChild(hero);
  home.appendChild(quote);
  main.appendChild(home);
}


/***/ }),

/***/ "./src/main/menu.js":
/*!**************************!*\
  !*** ./src/main/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _components_menu_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/menu-card */ "./src/components/menu-card.js");
/* harmony import */ var _data_menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/menu.json */ "./src/data/menu.json");



function loadMenu() {
  const main = document.getElementById("main");
  const container = document.createElement("section");
  const menuContainer = document.createElement("div");
  const h2 = document.createElement("h2");

  main.innerHTML = "";
  container.classList.add("menu");
  menuContainer.classList.add("menu-container");
  h2.classList.add("title");
  h2.textContent = "Menu";

  container.appendChild(h2);
  _data_menu_json__WEBPACK_IMPORTED_MODULE_1__.forEach((menu) => {
    menuContainer.appendChild((0,_components_menu_card__WEBPACK_IMPORTED_MODULE_0__["default"])(menu));
  });
  container.appendChild(menuContainer);
  main.appendChild(container);
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/contact */ "./src/main/contact.js");
/* harmony import */ var _main_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/home */ "./src/main/home.js");
/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/menu */ "./src/main/menu.js");





function setActive(button) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createNav() {
  const navlist = [
    { name: "Home", fn: _main_home__WEBPACK_IMPORTED_MODULE_1__["default"] },
    { name: "Menu", fn: _main_menu__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { name: "Contact", fn: _main_contact__WEBPACK_IMPORTED_MODULE_0__["default"] },
  ];

  const navbar = document.createElement("nav");
  const ul = document.createElement("ul");
  navbar.classList.add("navContainer");
  ul.classList.add("nav-list");

  navlist.forEach((nav) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = nav.name;
    button.addEventListener("click", (e) => {
      setActive(button);
      nav.fn();
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
  navbar.appendChild(ul);
  return navbar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ }),

/***/ "./src/data/menu.json":
/*!****************************!*\
  !*** ./src/data/menu.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Nasi Goreng","description":"A classic Indonesian fried rice dish with a mix of vegetables, chicken, and shrimp, served with a fried egg on top.","price":9.99},{"name":"Rendang","description":"Tender beef slow-cooked in a rich and flavorful coconut milk and spice mixture, served with steamed rice.","price":14.5},{"name":"Sate Ayam","description":"Grilled chicken skewers marinated in a fragrant blend of spices, served with peanut sauce and a side of rice cake.","price":8.75},{"name":"Gado-Gado","description":"A mixed vegetable salad with tofu, tempeh, boiled egg, and peanut sauce dressing.","price":7.25},{"name":"Soto Betawi","description":"A Jakarta-style beef soup with a coconut milk base, flavored with aromatic spices and served with rice cakes.","price":10.2},{"name":"Pisang Goreng","description":"Deep-fried banana fritters with a crispy exterior and soft, sweet interior.","price":4.5},{"name":"Ayam Penyet","description":"Fried chicken that\'s been smashed and served with spicy sambal, cucumber, and fried tofu.","price":9.25},{"name":"Bakso","description":"Indonesian meatball soup with a flavorful broth, noodles, and a variety of meatballs.","price":6.99},{"name":"Udang Sambal","description":"Stir-fried prawns in a spicy chili sauce, served with steamed rice.","price":12.8}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _main_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/home */ "./src/main/home.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");




function createMain() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.classList.add("main");
  return main;
}

function initializeWeb() {
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild((0,_layout__WEBPACK_IMPORTED_MODULE_0__.createHeader)());
  content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild(createMain());
  (0,_main_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  content.appendChild((0,_layout__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
  //   content.appendChild(createMain());
  //   content.appendChild(createFooter());
}
initializeWeb();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkMsK0JBQStCLGlCQUFpQjtBQUNoRCwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQzs7Ozs7Ozs7Ozs7Ozs7O0FDZnZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMlRBQTJULGdCQUFnQjtBQUMzVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQytDO0FBQ1Y7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNENBQUk7QUFDTiw4QkFBOEIsaUVBQVE7QUFDdEMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ5QztBQUNOO0FBQ0E7QUFDRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQixrREFBUSxFQUFFO0FBQ2xDLE1BQU0sa0JBQWtCLGtEQUFRLEVBQUU7QUFDbEMsTUFBTSxxQkFBcUIscURBQVcsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0N6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDbkI7QUFDRjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDLHNCQUFzQixtREFBUztBQUMvQjtBQUNBLEVBQUUsc0RBQVE7QUFDVixzQkFBc0IscURBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LWNhcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4vbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51Q2FyZChkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtkYXRhLm5hbWV9YDtcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEuZGVzY3JpcHRpb259YDtcclxuICBwcmljZS50ZXh0Q29udGVudCA9IGBScCR7ZGF0YS5wcmljZX1gO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuaW5uZXJIVE1MID0gYDxoMT5JbmRvbmVzaWFuIEN1aXNpbmU8aDEvPmA7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBDb3B5cmlnaHQgJmNvcHk7IFJpeWFkIEZpcmRhdXNgO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBmb290ZXIpO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlRm9vdGVyIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cclxuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXVzXCIpO1xyXG4gIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGV4dFwiKTtcclxuICBoMi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgaDIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIGFuZCBIb3Vyc1wiO1xyXG5cclxuICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPVxyXG4gICAgXCI1MDAgVGVycnkgRnJhbmNpbmUgU3RyZWV0PGJyPlNhbiBGcmFuY2lzY28sIENBIDk0MTU4PGJyPjxicj5PcGVuIE1vbmRheSB0byBGcmlkYXkgMTJwbSB0byAxMHBtPGJyPlNhdHVyZGF5IHRvIFN1bmRheSAxMnBtIHRvIDExcG1cIjtcclxuXHJcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XHJcbiAgbWFwLmlubmVySFRNTCA9XHJcbiAgICAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNTg0OS4wMjEzOTI0NTY4NjIhMmQxMDguNTM0NDQzNjg5MDk0MjUhM2QtNi43Mzg2NzM3Njg0NzkzNzEhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDJlNmYxZGVjNTI2NzMxZTUlM0EweDdmZWJhNjUzMDNjYmFjNGUhMnNXYXJ1bmclMjBOYXNpJTIwU2VkZXJoYW5hITVlMCEzbTIhMXNlbiEyc2lkITR2MTY5MzQ1MjUxNjgyMSE1bTIhMXNlbiEyc2lkXCIgaGVpZ2h0PSAyMDBweDsgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xyXG5cclxuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcclxuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcblxyXG4gIHAuaW5uZXJIVE1MID0gYElORE9ORVNJQU4gQ1VJU0lORWA7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwidW5zZWxlY3RhYmxlXCIpO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIC8vQ3JlYXRlIFF1b3RlIFNlY3Rpb25cclxuICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHF1b3RlLmNsYXNzTGlzdC5hZGQoXCJxdW90ZUNvbnRhaW5lclwiKTtcclxuICBxdW90ZS5jbGFzc0xpc3QuYWRkKFwidW5zZWxlY3RhYmxlXCIpO1xyXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLmlubmVySFRNTCA9IFwiSW5kb25lc2lhbiBDdWlzaW5lXCI7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGVcIik7XHJcbiAgcXVvdGUuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLmlubmVySFRNTCA9XHJcbiAgICBcIuKAnEVhdGluZyBJbmRvbmVzaWFuIGZvb2QgaXMgbGlrZSB0YWtpbmcgYSBqb3VybmV5IHRocm91Z2ggdGhlIGNvdW50cnnigJlzIGhpc3RvcnkgYW5kIGN1bHR1cmUu4oCdXCI7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwicXVvdGVcIik7XHJcbiAgcXVvdGUuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChxdW90ZSk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChob21lKTtcclxufVxyXG4iLCJpbXBvcnQgTWVudUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudS1jYXJkXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhL21lbnUuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICBoMi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgaDIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcclxuICBkYXRhLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoTWVudUNhcmQobWVudSkpO1xyXG4gIH0pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL21haW4vY29udGFjdFwiO1xyXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vbWFpbi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tYWluL21lbnVcIjtcclxuaW1wb3J0IGxvYWRSZWNpcGUgZnJvbSBcIi4vbWFpbi9tZW51XCI7XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmUoYnV0dG9uKSB7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2bGlzdCA9IFtcclxuICAgIHsgbmFtZTogXCJIb21lXCIsIGZuOiBsb2FkSG9tZSB9LFxyXG4gICAgeyBuYW1lOiBcIk1lbnVcIiwgZm46IGxvYWRNZW51IH0sXHJcbiAgICB7IG5hbWU6IFwiQ29udGFjdFwiLCBmbjogbG9hZENvbnRhY3QgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2Q29udGFpbmVyXCIpO1xyXG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdFwiKTtcclxuXHJcbiAgbmF2bGlzdC5mb3JFYWNoKChuYXYpID0+IHtcclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gbmF2Lm5hbWU7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZShidXR0b24pO1xyXG4gICAgICBuYXYuZm4oKTtcclxuICAgIH0pO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICB9KTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpO1xyXG4gIHJldHVybiBuYXZiYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2xheW91dFwiO1xyXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vbWFpbi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2YmFyXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xyXG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVXZWIoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XHJcbiAgbG9hZEhvbWUoKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuICAvLyAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcclxuICAvLyAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG59XHJcbmluaXRpYWxpemVXZWIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9