/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\nwindow.View = _scripts_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// create object for poem from HTML where you want to put poem\nconst poemEl = document.querySelector(\".poem\");\n// testing\nconst test = new _scripts_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, \"machado\");\n// test.setUpPoem()\nwindow.test = test;\n\n// pass in poem that is selected\n// event listener on nav button for poem//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7QUFFakNDLE1BQU0sQ0FBQ0QsSUFBSSxHQUFHQSxxREFBSTs7QUFFbEI7QUFDQSxNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM5QztBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJTCxxREFBSSxDQUFDRSxNQUFNLEVBQUUsU0FBUyxDQUFDO0FBQ3hDO0FBQ0FELE1BQU0sQ0FBQ0ksSUFBSSxHQUFHQSxJQUFJOztBQUVsQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi9zY3JpcHRzL3ZpZXdcIlxuXG53aW5kb3cuVmlldyA9IFZpZXdcblxuLy8gY3JlYXRlIG9iamVjdCBmb3IgcG9lbSBmcm9tIEhUTUwgd2hlcmUgeW91IHdhbnQgdG8gcHV0IHBvZW1cbmNvbnN0IHBvZW1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9lbVwiKTtcbi8vIHRlc3RpbmdcbmNvbnN0IHRlc3QgPSBuZXcgVmlldyhwb2VtRWwsIFwibWFjaGFkb1wiKVxuLy8gdGVzdC5zZXRVcFBvZW0oKVxud2luZG93LnRlc3QgPSB0ZXN0XG5cbi8vIHBhc3MgaW4gcG9lbSB0aGF0IGlzIHNlbGVjdGVkXG4vLyBldmVudCBsaXN0ZW5lciBvbiBuYXYgYnV0dG9uIGZvciBwb2VtXG4iXSwibmFtZXMiOlsiVmlldyIsIndpbmRvdyIsInBvZW1FbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass View {\n  constructor(poemEl, poemName) {\n    // poem div from the HTML via index.js\n    this.poemEl = poemEl;\n    // currently-selected poem name based on the nav\n    this.poemName = poemName;\n    // poem from data folder\n    const setUp = this.setUpPoem.bind(this);\n    setUp();\n  }\n\n  // grab matching poem from data folder\n  grabPoem(poemName) {\n    const res = fetch(`./data/${poemName}.json`).then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => this.poem = retrieval).catch(errorResponse => console.log(errorResponse));\n  }\n  setUpPoem() {\n    console.log(this.poem);\n\n    // const lineCount = Object.keys(this.poem).length\n\n    // for (let lineNum = 0; lineNum < lineCount; lineNum++) {\n    //     const ul = document.createElement(\"ul\")\n    //     const filledLine = this.populateLine(this.poem[lineNum], ul)\n    //     filledLine.classList.add(`line-${lineNum}`)\n    //     this.poemEl.append(filledLine)\n    // }\n  }\n\n  populateLine(jsonLine, ul) {\n    const wordCount = Object.keys(jsonLine).length - 1; // exclude \"translation\" key\n    for (let ele = 0; ele < wordCount; ele++) {\n      const li = document.createElement(\"li\");\n      li.innerText = jsonLine[\"word\"]; // returns string\n      li.classList.add(jsonLine[\"part_of_speech\"]); // returns string\n\n      ul.append(li);\n      if (ele !== wordCount - 1) {\n        const space = document.createElement(\"li\");\n        space.innerText = \" \";\n        ul.append(space); // spacing if not last word\n      }\n    }\n\n    return ul;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUFRLEVBQUU7SUFDMUI7SUFDQSxJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQjtJQUNBLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCO0lBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3ZDRixLQUFLLENBQUMsQ0FBQztFQUNYOztFQUVBO0VBQ0FHLFFBQVFBLENBQUNKLFFBQVEsRUFBRTtJQUNmLE1BQU1LLEdBQUcsR0FBR0MsS0FBSyxDQUFFLFVBQVNOLFFBQVMsT0FBTSxDQUFDLENBQ3ZDTyxJQUFJLENBQUNGLEdBQUcsSUFBSTtNQUNULElBQUlBLEdBQUcsQ0FBQ0csRUFBRSxFQUFFO1FBQ1IsT0FBT0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDSCxNQUFNSixHQUFHO01BQ2I7SUFDSixDQUFDLENBQUMsQ0FDREUsSUFBSSxDQUFDRyxTQUFTLElBQUksSUFBSSxDQUFDQyxJQUFJLEdBQUdELFNBQVMsQ0FBQyxDQUN4Q0UsS0FBSyxDQUFDQyxhQUFhLElBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixhQUFhLENBQUMsQ0FBQztFQUMzRDtFQUVBWCxTQUFTQSxDQUFBLEVBQUc7SUFDUlksT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSixJQUFJLENBQUM7O0lBRXRCOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKOztFQUVBSyxZQUFZQSxDQUFDQyxRQUFRLEVBQUVDLEVBQUUsRUFBRTtJQUN2QixNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUMsQ0FBQ0ssTUFBTSxHQUFHLENBQUMsRUFBQztJQUNuRCxLQUFLLElBQUlDLEdBQUcsR0FBRyxDQUFDLEVBQUVBLEdBQUcsR0FBR0osU0FBUyxFQUFFSSxHQUFHLEVBQUUsRUFBRTtNQUN0QyxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN2Q0YsRUFBRSxDQUFDRyxTQUFTLEdBQUdWLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQztNQUNoQ08sRUFBRSxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQ1osUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQzs7TUFFN0NDLEVBQUUsQ0FBQ1ksTUFBTSxDQUFDTixFQUFFLENBQUM7TUFDYixJQUFJRCxHQUFHLEtBQUtKLFNBQVMsR0FBRyxDQUFDLEVBQUU7UUFDdkIsTUFBTVksS0FBSyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDMUNLLEtBQUssQ0FBQ0osU0FBUyxHQUFHLEdBQUc7UUFDckJULEVBQUUsQ0FBQ1ksTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBQztNQUNyQjtJQUNKOztJQUNBLE9BQU9iLEVBQUU7RUFDYjtBQUNKO0FBRUEsK0RBQWVyQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy92aWV3LmpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IocG9lbUVsLCBwb2VtTmFtZSkge1xuICAgICAgICAvLyBwb2VtIGRpdiBmcm9tIHRoZSBIVE1MIHZpYSBpbmRleC5qc1xuICAgICAgICB0aGlzLnBvZW1FbCA9IHBvZW1FbFxuICAgICAgICAvLyBjdXJyZW50bHktc2VsZWN0ZWQgcG9lbSBuYW1lIGJhc2VkIG9uIHRoZSBuYXZcbiAgICAgICAgdGhpcy5wb2VtTmFtZSA9IHBvZW1OYW1lXG4gICAgICAgIC8vIHBvZW0gZnJvbSBkYXRhIGZvbGRlclxuICAgICAgICBjb25zdCBzZXRVcCA9IHRoaXMuc2V0VXBQb2VtLmJpbmQodGhpcylcbiAgICAgICAgc2V0VXAoKVxuICAgIH1cblxuICAgIC8vIGdyYWIgbWF0Y2hpbmcgcG9lbSBmcm9tIGRhdGEgZm9sZGVyXG4gICAgZ3JhYlBvZW0ocG9lbU5hbWUpIHtcbiAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goYC4vZGF0YS8ke3BvZW1OYW1lfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXRyaWV2YWwgPT4gdGhpcy5wb2VtID0gcmV0cmlldmFsKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yUmVzcG9uc2UgPT4gY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSkpXG4gICAgfVxuXG4gICAgc2V0VXBQb2VtKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvZW0pXG5cbiAgICAgICAgLy8gY29uc3QgbGluZUNvdW50ID0gT2JqZWN0LmtleXModGhpcy5wb2VtKS5sZW5ndGhcblxuICAgICAgICAvLyBmb3IgKGxldCBsaW5lTnVtID0gMDsgbGluZU51bSA8IGxpbmVDb3VudDsgbGluZU51bSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICAvLyAgICAgY29uc3QgZmlsbGVkTGluZSA9IHRoaXMucG9wdWxhdGVMaW5lKHRoaXMucG9lbVtsaW5lTnVtXSwgdWwpXG4gICAgICAgIC8vICAgICBmaWxsZWRMaW5lLmNsYXNzTGlzdC5hZGQoYGxpbmUtJHtsaW5lTnVtfWApXG4gICAgICAgIC8vICAgICB0aGlzLnBvZW1FbC5hcHBlbmQoZmlsbGVkTGluZSlcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHBvcHVsYXRlTGluZShqc29uTGluZSwgdWwpIHtcbiAgICAgICAgY29uc3Qgd29yZENvdW50ID0gT2JqZWN0LmtleXMoanNvbkxpbmUpLmxlbmd0aCAtIDEgLy8gZXhjbHVkZSBcInRyYW5zbGF0aW9uXCIga2V5XG4gICAgICAgIGZvciAobGV0IGVsZSA9IDA7IGVsZSA8IHdvcmRDb3VudDsgZWxlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBqc29uTGluZVtcIndvcmRcIl0gLy8gcmV0dXJucyBzdHJpbmdcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoanNvbkxpbmVbXCJwYXJ0X29mX3NwZWVjaFwiXSkgLy8gcmV0dXJucyBzdHJpbmdcblxuICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuICAgICAgICAgICAgaWYgKGVsZSAhPT0gd29yZENvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgICAgICAgc3BhY2UuaW5uZXJUZXh0ID0gXCIgXCJcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQoc3BhY2UpIC8vIHNwYWNpbmcgaWYgbm90IGxhc3Qgd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdLCJuYW1lcyI6WyJWaWV3IiwiY29uc3RydWN0b3IiLCJwb2VtRWwiLCJwb2VtTmFtZSIsInNldFVwIiwic2V0VXBQb2VtIiwiYmluZCIsImdyYWJQb2VtIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwib2siLCJqc29uIiwicmV0cmlldmFsIiwicG9lbSIsImNhdGNoIiwiZXJyb3JSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJwb3B1bGF0ZUxpbmUiLCJqc29uTGluZSIsInVsIiwid29yZENvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImVsZSIsImxpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwic3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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