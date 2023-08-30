/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  console.log("contact loaded");
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
function loadMenu() {
  const main = document.getElementById("main");
  main.innerHTML = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQzs7Ozs7Ozs7Ozs7Ozs7O0FDZnZCO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2U7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h5QztBQUNOO0FBQ0E7QUFDRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQixrREFBUSxFQUFFO0FBQ2xDLE1BQU0sa0JBQWtCLGtEQUFRLEVBQUU7QUFDbEMsTUFBTSxxQkFBcUIscURBQVcsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7VUMzQ3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUNuQjtBQUNGO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVk7QUFDbEMsc0JBQXNCLG1EQUFTO0FBQy9CO0FBQ0EsRUFBRSxzREFBUTtBQUNWLHNCQUFzQixxREFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4vY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmlubmVySFRNTCA9IGA8aDE+SW5kb25lc2lhbiBDdWlzaW5lPGgxLz5gO1xyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICZjb3B5OyBSaXlhZCBGaXJkYXVzYDtcclxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9vdGVyKTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUZvb3RlciB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICBjb25zb2xlLmxvZyhcImNvbnRhY3QgbG9hZGVkXCIpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcblxyXG4gIHAuaW5uZXJIVE1MID0gYElORE9ORVNJQU4gQ1VJU0lORWA7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwidW5zZWxlY3RhYmxlXCIpO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIC8vQ3JlYXRlIFF1b3RlIFNlY3Rpb25cclxuICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHF1b3RlLmNsYXNzTGlzdC5hZGQoXCJxdW90ZUNvbnRhaW5lclwiKTtcclxuICBxdW90ZS5jbGFzc0xpc3QuYWRkKFwidW5zZWxlY3RhYmxlXCIpO1xyXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLmlubmVySFRNTCA9IFwiSW5kb25lc2lhbiBDdWlzaW5lXCI7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGVcIik7XHJcbiAgcXVvdGUuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLmlubmVySFRNTCA9XHJcbiAgICBcIuKAnEVhdGluZyBJbmRvbmVzaWFuIGZvb2QgaXMgbGlrZSB0YWtpbmcgYSBqb3VybmV5IHRocm91Z2ggdGhlIGNvdW50cnnigJlzIGhpc3RvcnkgYW5kIGN1bHR1cmUu4oCdXCI7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwicXVvdGVcIik7XHJcbiAgcXVvdGUuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChxdW90ZSk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChob21lKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG4iLCJpbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vbWFpbi9jb250YWN0XCI7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9tYWluL2hvbWVcIjtcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21haW4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZFJlY2lwZSBmcm9tIFwiLi9tYWluL21lbnVcIjtcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZShidXR0b24pIHtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXZsaXN0ID0gW1xyXG4gICAgeyBuYW1lOiBcIkhvbWVcIiwgZm46IGxvYWRIb21lIH0sXHJcbiAgICB7IG5hbWU6IFwiTWVudVwiLCBmbjogbG9hZE1lbnUgfSxcclxuICAgIHsgbmFtZTogXCJDb250YWN0XCIsIGZuOiBsb2FkQ29udGFjdCB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZDb250YWluZXJcIik7XHJcbiAgdWwuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0XCIpO1xyXG5cclxuICBuYXZsaXN0LmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBuYXYubmFtZTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgc2V0QWN0aXZlKGJ1dHRvbik7XHJcbiAgICAgIG5hdi5mbigpO1xyXG4gICAgfSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vbGF5b3V0XCI7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9tYWluL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9uYXZiYXJcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcclxuICBsb2FkSG9tZSgpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gIC8vICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xyXG4gIC8vICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn1cclxuaW5pdGlhbGl6ZVdlYigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=