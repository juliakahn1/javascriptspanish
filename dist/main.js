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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/poem-view */ \"./src/scripts/poem-view.js\");\n\nwindow.PoemView = _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// create object for poem from HTML where you want to put poem\nconst poemEl = document.querySelector(\".poem\");\n// testing\nconst test = new _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, \"machado\");\nwindow.test = test;\n\n// pass in poem that is selected\n// event listener on nav button for poem//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLE1BQU0sQ0FBQ0QsUUFBUSxHQUFHQSwwREFBUTs7QUFFMUI7QUFDQSxNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM5QztBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJTCwwREFBUSxDQUFDRSxNQUFNLEVBQUUsU0FBUyxDQUFDO0FBQzVDRCxNQUFNLENBQUNJLElBQUksR0FBR0EsSUFBSTs7QUFFbEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvZW1WaWV3IGZyb20gXCIuL3NjcmlwdHMvcG9lbS12aWV3XCJcblxud2luZG93LlBvZW1WaWV3ID0gUG9lbVZpZXdcblxuLy8gY3JlYXRlIG9iamVjdCBmb3IgcG9lbSBmcm9tIEhUTUwgd2hlcmUgeW91IHdhbnQgdG8gcHV0IHBvZW1cbmNvbnN0IHBvZW1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9lbVwiKTtcbi8vIHRlc3RpbmdcbmNvbnN0IHRlc3QgPSBuZXcgUG9lbVZpZXcocG9lbUVsLCBcIm1hY2hhZG9cIilcbndpbmRvdy50ZXN0ID0gdGVzdFxuXG4vLyBwYXNzIGluIHBvZW0gdGhhdCBpcyBzZWxlY3RlZFxuLy8gZXZlbnQgbGlzdGVuZXIgb24gbmF2IGJ1dHRvbiBmb3IgcG9lbVxuIl0sIm5hbWVzIjpbIlBvZW1WaWV3Iiwid2luZG93IiwicG9lbUVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/poem-view.js":
/*!**********************************!*\
  !*** ./src/scripts/poem-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PoemView {\n  constructor(poemEl, poemName) {\n    // poem div from the HTML via index.js\n    this.poemEl = poemEl;\n    // currently-selected poem name based on the nav\n    this.poemName = poemName;\n    // poem from data folder\n    this.poem = this.grabPoem(poemName);\n\n    // this.setUpPoem = this.setUpPoem.bind(this)\n    // this.setUpPoem()\n  }\n\n  // grab matching poem from data folder\n  grabPoem(poemName) {\n    const res = fetch(`./data/${poemName}.json`).then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.poem = retrieval;\n      this.setUpPoem();\n    }).catch(errorResponse => console.log(errorResponse));\n  }\n  setUpPoem() {\n    // console.log(this.poem)\n    const lineCount = Object.keys(this.poem).length;\n    for (let lineNum = 0; lineNum < lineCount; lineNum++) {\n      const ul = document.createElement(\"ul\");\n      const filledLine = this.populateLine(this.poem[lineNum], ul);\n      filledLine.classList.add(`line-${lineNum}-spanish`);\n      this.poemEl.append(filledLine);\n    }\n  }\n  populateLine(jsonLine, ul) {\n    const wordCount = Object.keys(jsonLine).length - 1; // exclude \"translation\" key\n    for (let ele = 0; ele < wordCount; ele++) {\n      const li = document.createElement(\"li\");\n      li.classList.add(jsonLine[ele].part_of_speech);\n      li.innerText = jsonLine[ele].word;\n      ul.append(li);\n    }\n    return ul;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb2VtLXZpZXcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtJQUMxQjtJQUNBLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCO0lBQ0EsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEI7SUFDQSxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDOztJQUVuQztJQUNBO0VBQ0o7O0VBRUE7RUFDQUUsUUFBUUEsQ0FBQ0YsUUFBUSxFQUFHO0lBQ2hCLE1BQU1HLEdBQUcsR0FBR0MsS0FBSyxDQUFFLFVBQVNKLFFBQVMsT0FBTSxDQUFDLENBQ3ZDSyxJQUFJLENBQUNGLEdBQUcsSUFBSTtNQUNULElBQUlBLEdBQUcsQ0FBQ0csRUFBRSxFQUFFO1FBQ1IsT0FBT0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDSCxNQUFNSixHQUFHO01BQ2I7SUFDSixDQUFDLENBQUMsQ0FDREUsSUFBSSxDQUFDRyxTQUFTLElBQUk7TUFDZixJQUFJLENBQUNQLElBQUksR0FBR08sU0FBUztNQUNyQixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLGFBQWEsSUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGFBQWEsQ0FBQyxDQUFDO0VBQzNEO0VBRUFGLFNBQVNBLENBQUEsRUFBRztJQUNSO0lBQ0EsTUFBTUssU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNmLElBQUksQ0FBQyxDQUFDZ0IsTUFBTTtJQUUvQyxLQUFLLElBQUlDLE9BQU8sR0FBRyxDQUFDLEVBQUVBLE9BQU8sR0FBR0osU0FBUyxFQUFFSSxPQUFPLEVBQUUsRUFBRTtNQUNsRCxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN2QyxNQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDdEIsSUFBSSxDQUFDaUIsT0FBTyxDQUFDLEVBQUVDLEVBQUUsQ0FBQztNQUM1REcsVUFBVSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBRSxRQUFPUCxPQUFRLFVBQVMsQ0FBQztNQUNuRCxJQUFJLENBQUNuQixNQUFNLENBQUMyQixNQUFNLENBQUNKLFVBQVUsQ0FBQztJQUNsQztFQUNKO0VBRUFDLFlBQVlBLENBQUNJLFFBQVEsRUFBRVIsRUFBRSxFQUFFO0lBQ3ZCLE1BQU1TLFNBQVMsR0FBR2IsTUFBTSxDQUFDQyxJQUFJLENBQUNXLFFBQVEsQ0FBQyxDQUFDVixNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ25ELEtBQUssSUFBSVksR0FBRyxHQUFHLENBQUMsRUFBRUEsR0FBRyxHQUFHRCxTQUFTLEVBQUVDLEdBQUcsRUFBRSxFQUFFO01BQ3RDLE1BQU1DLEVBQUUsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3ZDUyxFQUFFLENBQUNOLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDRSxRQUFRLENBQUNFLEdBQUcsQ0FBQyxDQUFDRSxjQUFjLENBQUM7TUFDOUNELEVBQUUsQ0FBQ0UsU0FBUyxHQUFHTCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxDQUFDSSxJQUFJO01BQ2pDZCxFQUFFLENBQUNPLE1BQU0sQ0FBQ0ksRUFBRSxDQUFDO0lBQ2pCO0lBQ0EsT0FBT1gsRUFBRTtFQUNiO0FBQ0o7QUFFQSwrREFBZXRCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9zY3JpcHRzL3BvZW0tdmlldy5qcz81ODM3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvZW1WaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihwb2VtRWwsIHBvZW1OYW1lKSB7XG4gICAgICAgIC8vIHBvZW0gZGl2IGZyb20gdGhlIEhUTUwgdmlhIGluZGV4LmpzXG4gICAgICAgIHRoaXMucG9lbUVsID0gcG9lbUVsXG4gICAgICAgIC8vIGN1cnJlbnRseS1zZWxlY3RlZCBwb2VtIG5hbWUgYmFzZWQgb24gdGhlIG5hdlxuICAgICAgICB0aGlzLnBvZW1OYW1lID0gcG9lbU5hbWVcbiAgICAgICAgLy8gcG9lbSBmcm9tIGRhdGEgZm9sZGVyXG4gICAgICAgIHRoaXMucG9lbSA9IHRoaXMuZ3JhYlBvZW0ocG9lbU5hbWUpXG5cbiAgICAgICAgLy8gdGhpcy5zZXRVcFBvZW0gPSB0aGlzLnNldFVwUG9lbS5iaW5kKHRoaXMpXG4gICAgICAgIC8vIHRoaXMuc2V0VXBQb2VtKClcbiAgICB9XG5cbiAgICAvLyBncmFiIG1hdGNoaW5nIHBvZW0gZnJvbSBkYXRhIGZvbGRlclxuICAgIGdyYWJQb2VtKHBvZW1OYW1lKSAge1xuICAgICAgICBjb25zdCByZXMgPSBmZXRjaChgLi9kYXRhLyR7cG9lbU5hbWV9Lmpzb25gKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJldHJpZXZhbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2VtID0gcmV0cmlldmFsXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVcFBvZW0oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvclJlc3BvbnNlID0+IGNvbnNvbGUubG9nKGVycm9yUmVzcG9uc2UpKVxuICAgIH1cblxuICAgIHNldFVwUG9lbSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb2VtKVxuICAgICAgICBjb25zdCBsaW5lQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLnBvZW0pLmxlbmd0aFxuXG4gICAgICAgIGZvciAobGV0IGxpbmVOdW0gPSAwOyBsaW5lTnVtIDwgbGluZUNvdW50OyBsaW5lTnVtKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRMaW5lID0gdGhpcy5wb3B1bGF0ZUxpbmUodGhpcy5wb2VtW2xpbmVOdW1dLCB1bClcbiAgICAgICAgICAgIGZpbGxlZExpbmUuY2xhc3NMaXN0LmFkZChgbGluZS0ke2xpbmVOdW19LXNwYW5pc2hgKVxuICAgICAgICAgICAgdGhpcy5wb2VtRWwuYXBwZW5kKGZpbGxlZExpbmUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZUxpbmUoanNvbkxpbmUsIHVsKSB7XG4gICAgICAgIGNvbnN0IHdvcmRDb3VudCA9IE9iamVjdC5rZXlzKGpzb25MaW5lKS5sZW5ndGggLSAxIC8vIGV4Y2x1ZGUgXCJ0cmFuc2xhdGlvblwiIGtleVxuICAgICAgICBmb3IgKGxldCBlbGUgPSAwOyBlbGUgPCB3b3JkQ291bnQ7IGVsZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChqc29uTGluZVtlbGVdLnBhcnRfb2Zfc3BlZWNoKVxuICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0ganNvbkxpbmVbZWxlXS53b3JkXG4gICAgICAgICAgICB1bC5hcHBlbmQobGkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2VtVmlldztcbiJdLCJuYW1lcyI6WyJQb2VtVmlldyIsImNvbnN0cnVjdG9yIiwicG9lbUVsIiwicG9lbU5hbWUiLCJwb2VtIiwiZ3JhYlBvZW0iLCJyZXMiLCJmZXRjaCIsInRoZW4iLCJvayIsImpzb24iLCJyZXRyaWV2YWwiLCJzZXRVcFBvZW0iLCJjYXRjaCIsImVycm9yUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibGluZUNvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImxpbmVOdW0iLCJ1bCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZpbGxlZExpbmUiLCJwb3B1bGF0ZUxpbmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJqc29uTGluZSIsIndvcmRDb3VudCIsImVsZSIsImxpIiwicGFydF9vZl9zcGVlY2giLCJpbm5lclRleHQiLCJ3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/poem-view.js\n");

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