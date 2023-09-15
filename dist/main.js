/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_view__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// create object for poem from HTML where you want to put poem\nconst poem = document.querySelector(\".poem\");\n// pass in poem that is selected\n\n// event listener on nav button for poem\n\nwindow.View = (_scripts_view__WEBPACK_IMPORTED_MODULE_0___default());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDOztBQUVqQztBQUNBLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDOztBQUVBOztBQUVBQyxNQUFNLENBQUNKLElBQUksR0FBR0Esc0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCIuL3NjcmlwdHMvdmlld1wiXG5cbi8vIGNyZWF0ZSBvYmplY3QgZm9yIHBvZW0gZnJvbSBIVE1MIHdoZXJlIHlvdSB3YW50IHRvIHB1dCBwb2VtXG5jb25zdCBwb2VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2VtXCIpO1xuLy8gcGFzcyBpbiBwb2VtIHRoYXQgaXMgc2VsZWN0ZWRcblxuLy8gZXZlbnQgbGlzdGVuZXIgb24gbmF2IGJ1dHRvbiBmb3IgcG9lbVxuXG53aW5kb3cuVmlldyA9IFZpZXdcbiJdLCJuYW1lcyI6WyJWaWV3IiwicG9lbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function() {

eval("// sets up poem in the UL\n\n// parses appropriate JSON file for\n\nclass View {\n  constructor(poemEl, poemName) {\n    // this is the poem div from the HTML via index.js\n    this.poemEl = poemEl;\n    // this is the currently-selected poem name based on the nav\n    this.poemName = poemName;\n    this.poem = this.grabPoem(poemName);\n  }\n  grabPoem(poemName) {\n    const res = fetch(`./data/${poemName}.json`).then(response => response.json()).then(json => json); // does this return?\n  }\n\n  setUpPoem() {\n    // iterate through each key of this.poem\n    // create an empty ul element\n    // call populateLine(line, ul), which returns a populated ul with words\n    // append to this.poemEl\n    //\n  }\n  populateLine(jsonLine, emptyUL) {\n    // iterate through the data line (has line \"1\", so go through 0 to 1)\n    // const li = document.createElement(\"li\")\n    // li.classList.add(jsonLine[part_of_speech]) - ignore for now subset\n    // li.innerText = jasonLine[word]\n    // append to emptyUL\n    //\n    // return UL\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzIiwibmFtZXMiOlsiVmlldyIsImNvbnN0cnVjdG9yIiwicG9lbUVsIiwicG9lbU5hbWUiLCJwb2VtIiwiZ3JhYlBvZW0iLCJyZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZXRVcFBvZW0iLCJwb3B1bGF0ZUxpbmUiLCJqc29uTGluZSIsImVtcHR5VUwiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL3NjcmlwdHMvdmlldy5qcz84MGMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNldHMgdXAgcG9lbSBpbiB0aGUgVUxcblxuLy8gcGFyc2VzIGFwcHJvcHJpYXRlIEpTT04gZmlsZSBmb3JcblxuXG5jbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihwb2VtRWwsIHBvZW1OYW1lKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHBvZW0gZGl2IGZyb20gdGhlIEhUTUwgdmlhIGluZGV4LmpzXG4gICAgICAgIHRoaXMucG9lbUVsID0gcG9lbUVsXG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIGN1cnJlbnRseS1zZWxlY3RlZCBwb2VtIG5hbWUgYmFzZWQgb24gdGhlIG5hdlxuICAgICAgICB0aGlzLnBvZW1OYW1lID0gcG9lbU5hbWVcbiAgICAgICAgdGhpcy5wb2VtID0gdGhpcy5ncmFiUG9lbShwb2VtTmFtZSlcbiAgICB9XG5cbiAgICBncmFiUG9lbShwb2VtTmFtZSkge1xuICAgICAgICBjb25zdCByZXMgPSBmZXRjaChgLi9kYXRhLyR7cG9lbU5hbWV9Lmpzb25gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ganNvbikgLy8gZG9lcyB0aGlzIHJldHVybj9cbiAgICB9XG5cbiAgICBzZXRVcFBvZW0oKSB7XG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSBvZiB0aGlzLnBvZW1cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSB1bCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gY2FsbCBwb3B1bGF0ZUxpbmUobGluZSwgdWwpLCB3aGljaCByZXR1cm5zIGEgcG9wdWxhdGVkIHVsIHdpdGggd29yZHNcbiAgICAgICAgICAgIC8vIGFwcGVuZCB0byB0aGlzLnBvZW1FbFxuICAgICAgICAvL1xuICAgIH1cblxuICAgIHBvcHVsYXRlTGluZShqc29uTGluZSwgZW1wdHlVTCkge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggdGhlIGRhdGEgbGluZSAoaGFzIGxpbmUgXCIxXCIsIHNvIGdvIHRocm91Z2ggMCB0byAxKVxuICAgICAgICAgICAgLy8gY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgIC8vIGxpLmNsYXNzTGlzdC5hZGQoanNvbkxpbmVbcGFydF9vZl9zcGVlY2hdKSAtIGlnbm9yZSBmb3Igbm93IHN1YnNldFxuICAgICAgICAgICAgLy8gbGkuaW5uZXJUZXh0ID0gamFzb25MaW5lW3dvcmRdXG4gICAgICAgICAgICAvLyBhcHBlbmQgdG8gZW1wdHlVTFxuICAgICAgICAvL1xuICAgICAgICAvLyByZXR1cm4gVUxcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUdBLE1BQU1BLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtJQUMxQjtJQUNBLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCO0lBQ0EsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUNGLFFBQVEsQ0FBQztFQUN2QztFQUVBRSxRQUFRQSxDQUFDRixRQUFRLEVBQUU7SUFDZixNQUFNRyxHQUFHLEdBQUdDLEtBQUssQ0FBRSxVQUFTSixRQUFTLE9BQU0sQ0FBQyxDQUN2Q0ssSUFBSSxDQUFFQyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFFRSxJQUFJLElBQUtBLElBQUksQ0FBQyxFQUFDO0VBQzlCOztFQUVBQyxTQUFTQSxDQUFBLEVBQUc7SUFDUjtJQUNJO0lBQ0k7SUFDSjtJQUNKO0VBQUE7RUFHSkMsWUFBWUEsQ0FBQ0MsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDNUI7SUFDSTtJQUNBO0lBQ0E7SUFDQTtJQUNKO0lBQ0E7RUFBQTtBQUVSIn0=\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;