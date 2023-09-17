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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/poem-view */ \"./src/scripts/poem-view.js\");\n/* harmony import */ var _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/parts-of-speech-view */ \"./src/scripts/parts-of-speech-view.js\");\n\n\nwindow.PoemView = _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.PartsOfSpeechView = _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst poemEl = document.querySelector(\".poem\");\nconst poemMetaData = document.querySelector(\".poem-metadata\");\nconst verbsEl = document.querySelector(\".verbs\");\n\n// testing — CHANGE TO DROPDOWN\nconst poem = new _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, \"machado\", poemMetaData);\nwindow.poem = poem;\nconst pos = new _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](verbsEl);\nwindow.pos = pos;\n\n// pass in poem that is selected\n// event listener on nav button for poem//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBDO0FBQ29CO0FBRzlERSxNQUFNLENBQUNGLFFBQVEsR0FBR0EsMERBQVE7QUFDMUJFLE1BQU0sQ0FBQ0QsaUJBQWlCLEdBQUdBLHFFQUFpQjtBQUU1QyxNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM5QyxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzdELE1BQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDOztBQUVoRDtBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJUiwwREFBUSxDQUFDRyxNQUFNLEVBQUUsU0FBUyxFQUFFRyxZQUFZLENBQUM7QUFDMURKLE1BQU0sQ0FBQ00sSUFBSSxHQUFHQSxJQUFJO0FBRWxCLE1BQU1DLEdBQUcsR0FBRyxJQUFJUixxRUFBaUIsQ0FBQ00sT0FBTyxDQUFDO0FBQzFDTCxNQUFNLENBQUNPLEdBQUcsR0FBR0EsR0FBRzs7QUFHaEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvZW1WaWV3IGZyb20gXCIuL3NjcmlwdHMvcG9lbS12aWV3XCJcbmltcG9ydCBQYXJ0c09mU3BlZWNoVmlldyBmcm9tIFwiLi9zY3JpcHRzL3BhcnRzLW9mLXNwZWVjaC12aWV3XCJcblxuXG53aW5kb3cuUG9lbVZpZXcgPSBQb2VtVmlld1xud2luZG93LlBhcnRzT2ZTcGVlY2hWaWV3ID0gUGFydHNPZlNwZWVjaFZpZXdcblxuY29uc3QgcG9lbUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2VtXCIpO1xuY29uc3QgcG9lbU1ldGFEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2VtLW1ldGFkYXRhXCIpXG5jb25zdCB2ZXJic0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52ZXJic1wiKVxuXG4vLyB0ZXN0aW5nIOKAlCBDSEFOR0UgVE8gRFJPUERPV05cbmNvbnN0IHBvZW0gPSBuZXcgUG9lbVZpZXcocG9lbUVsLCBcIm1hY2hhZG9cIiwgcG9lbU1ldGFEYXRhKVxud2luZG93LnBvZW0gPSBwb2VtXG5cbmNvbnN0IHBvcyA9IG5ldyBQYXJ0c09mU3BlZWNoVmlldyh2ZXJic0VsKVxud2luZG93LnBvcyA9IHBvc1xuXG5cbi8vIHBhc3MgaW4gcG9lbSB0aGF0IGlzIHNlbGVjdGVkXG4vLyBldmVudCBsaXN0ZW5lciBvbiBuYXYgYnV0dG9uIGZvciBwb2VtXG4iXSwibmFtZXMiOlsiUG9lbVZpZXciLCJQYXJ0c09mU3BlZWNoVmlldyIsIndpbmRvdyIsInBvZW1FbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBvZW1NZXRhRGF0YSIsInZlcmJzRWwiLCJwb2VtIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/parts-of-speech-view.js":
/*!*********************************************!*\
  !*** ./src/scripts/parts-of-speech-view.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PartsOfSpeechView {\n  constructor(verbsEl) {\n    this.verbsEl = verbsEl;\n    this.populateWordTags();\n  }\n  populateWordTags() {\n    // should this be a class var?\n    const categories = [\"noun\", \"verb\", \"adjective\", \"adverb\", \"article\", \"pronoun\"];\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"verb-list\");\n    categories.forEach(partOfSpeech => {\n      ul.append(this.createWordTag(partOfSpeech));\n    });\n    this.verbsEl.append(ul);\n  }\n  createWordTag(partOfSpeech) {\n    const li = document.createElement(\"li\");\n    li.innerText = partOfSpeech;\n    li.classList.add(\"pos-tile\");\n    li.setAttribute(\"id\", `${partOfSpeech}`);\n    return li;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartsOfSpeechView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYXJ0cy1vZi1zcGVlY2gtdmlldy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsaUJBQWlCLENBQUM7RUFFcEJDLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7RUFDM0I7RUFFQUEsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDZjtJQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQ2hGLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDRixFQUFFLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUM3QkwsVUFBVSxDQUFDTSxPQUFPLENBQUNDLFlBQVksSUFBSTtNQUMvQk4sRUFBRSxDQUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDQyxhQUFhLENBQUNGLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ1QsT0FBTyxDQUFDVSxNQUFNLENBQUNQLEVBQUUsQ0FBQztFQUMzQjtFQUdBUSxhQUFhQSxDQUFDRixZQUFZLEVBQUU7SUFDeEIsTUFBTUcsRUFBRSxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNPLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHSixZQUFZO0lBQzNCRyxFQUFFLENBQUNOLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM1QkssRUFBRSxDQUFDRSxZQUFZLENBQUMsSUFBSSxFQUFHLEdBQUVMLFlBQWEsRUFBQyxDQUFDO0lBQ3hDLE9BQU9HLEVBQUU7RUFDYjtBQUNKO0FBRUEsK0RBQWVkLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL3NjcmlwdHMvcGFydHMtb2Ytc3BlZWNoLXZpZXcuanM/OTczNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQYXJ0c09mU3BlZWNoVmlldyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2ZXJic0VsKSB7XG4gICAgICAgIHRoaXMudmVyYnNFbCA9IHZlcmJzRWxcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVdvcmRUYWdzKClcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVdvcmRUYWdzKCkge1xuICAgICAgICAvLyBzaG91bGQgdGhpcyBiZSBhIGNsYXNzIHZhcj9cbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcIm5vdW5cIiwgXCJ2ZXJiXCIsIFwiYWRqZWN0aXZlXCIsIFwiYWR2ZXJiXCIsIFwiYXJ0aWNsZVwiLCBcInByb25vdW5cIl1cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcInZlcmItbGlzdFwiKVxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2gocGFydE9mU3BlZWNoID0+IHtcbiAgICAgICAgICAgIHVsLmFwcGVuZCh0aGlzLmNyZWF0ZVdvcmRUYWcocGFydE9mU3BlZWNoKSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy52ZXJic0VsLmFwcGVuZCh1bClcbiAgICB9XG5cblxuICAgIGNyZWF0ZVdvcmRUYWcocGFydE9mU3BlZWNoKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IHBhcnRPZlNwZWVjaFxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwicG9zLXRpbGVcIilcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGFydE9mU3BlZWNofWApXG4gICAgICAgIHJldHVybiBsaVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydHNPZlNwZWVjaFZpZXc7XG4iXSwibmFtZXMiOlsiUGFydHNPZlNwZWVjaFZpZXciLCJjb25zdHJ1Y3RvciIsInZlcmJzRWwiLCJwb3B1bGF0ZVdvcmRUYWdzIiwiY2F0ZWdvcmllcyIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInBhcnRPZlNwZWVjaCIsImFwcGVuZCIsImNyZWF0ZVdvcmRUYWciLCJsaSIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/parts-of-speech-view.js\n");

/***/ }),

/***/ "./src/scripts/poem-view.js":
/*!**********************************!*\
  !*** ./src/scripts/poem-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PoemView {\n  constructor(poemEl, poemName, poemMetaData) {\n    // poem div from the HTML via index.js\n    this.poemEl = poemEl;\n    // currently-selected poem name based on the nav\n    this.poemName = poemName;\n    // poem from data folder\n    this.poem = this.grabPoem(poemName);\n    this.metaData = poemMetaData;\n  }\n  grabPoem(poemName) {\n    const res = fetch(`./data/${poemName}.json`).then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.poem = retrieval;\n      this.setUpPoem();\n    }).catch(errorResponse => console.log(errorResponse));\n  }\n  setUpPoem() {\n    // console.log(this.poem)\n    const lineCount = Object.keys(this.poem).length;\n    for (let lineNum = 0; lineNum < lineCount - 1; lineNum++) {\n      // exclude metadata\n      const ul = document.createElement(\"ul\");\n      const filledLine = this.populateLine(this.poem[lineNum], ul);\n      filledLine.classList.add(`line-${lineNum}-spanish`);\n      this.poemEl.append(filledLine);\n    }\n    this.displayMetaData();\n  }\n  populateLine(jsonLine, ul) {\n    const wordCount = Object.keys(jsonLine).length - 1; // exclude \"translation\" key\n    for (let ele = 0; ele < wordCount; ele++) {\n      const li = document.createElement(\"li\");\n      li.classList.add(jsonLine[ele].part_of_speech);\n      li.innerText = jsonLine[ele].word;\n      ul.append(li);\n    }\n    return ul;\n  }\n  displayMetaData() {\n    // title\n    const h2 = document.createElement(\"h2\");\n    h2.append(this.poem.metadata.title);\n    this.metaData.append(h2);\n\n    // author\n    const h3 = document.createElement(\"h3\");\n    h3.append(\"por \" + this.poem.metadata.poet);\n    this.metaData.append(h3);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO0lBQ25DLElBQUksQ0FBQ25DLFFBQVEsQ0FBQ3dCLE1BQU0sQ0FBQ1MsRUFBRSxDQUFDOztJQUV4QjtJQUNBLE1BQU1HLEVBQUUsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2Q2lCLEVBQUUsQ0FBQ1osTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMxQixJQUFJLENBQUNvQyxRQUFRLENBQUNHLElBQUksQ0FBQztJQUMzQyxJQUFJLENBQUNyQyxRQUFRLENBQUN3QixNQUFNLENBQUNZLEVBQUUsQ0FBQztFQUM1QjtBQUNKO0FBRUEsK0RBQWUzQyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy9wb2VtLXZpZXcuanM/NTgzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQb2VtVmlldyB7XG4gICAgY29uc3RydWN0b3IocG9lbUVsLCBwb2VtTmFtZSwgcG9lbU1ldGFEYXRhKSB7XG4gICAgICAgIC8vIHBvZW0gZGl2IGZyb20gdGhlIEhUTUwgdmlhIGluZGV4LmpzXG4gICAgICAgIHRoaXMucG9lbUVsID0gcG9lbUVsXG4gICAgICAgIC8vIGN1cnJlbnRseS1zZWxlY3RlZCBwb2VtIG5hbWUgYmFzZWQgb24gdGhlIG5hdlxuICAgICAgICB0aGlzLnBvZW1OYW1lID0gcG9lbU5hbWVcbiAgICAgICAgLy8gcG9lbSBmcm9tIGRhdGEgZm9sZGVyXG4gICAgICAgIHRoaXMucG9lbSA9IHRoaXMuZ3JhYlBvZW0ocG9lbU5hbWUpXG4gICAgICAgIHRoaXMubWV0YURhdGEgPSBwb2VtTWV0YURhdGFcbiAgICB9XG5cbiAgICBncmFiUG9lbShwb2VtTmFtZSkgIHtcbiAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goYC4vZGF0YS8ke3BvZW1OYW1lfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXRyaWV2YWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9lbSA9IHJldHJpZXZhbFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXBQb2VtKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JSZXNwb25zZSA9PiBjb25zb2xlLmxvZyhlcnJvclJlc3BvbnNlKSlcbiAgICB9XG5cbiAgICBzZXRVcFBvZW0oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9lbSlcbiAgICAgICAgY29uc3QgbGluZUNvdW50ID0gT2JqZWN0LmtleXModGhpcy5wb2VtKS5sZW5ndGhcblxuICAgICAgICBmb3IgKGxldCBsaW5lTnVtID0gMDsgbGluZU51bSA8IGxpbmVDb3VudCAtIDE7IGxpbmVOdW0rKykgeyAvLyBleGNsdWRlIG1ldGFkYXRhXG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICAgICAgY29uc3QgZmlsbGVkTGluZSA9IHRoaXMucG9wdWxhdGVMaW5lKHRoaXMucG9lbVtsaW5lTnVtXSwgdWwpXG4gICAgICAgICAgICBmaWxsZWRMaW5lLmNsYXNzTGlzdC5hZGQoYGxpbmUtJHtsaW5lTnVtfS1zcGFuaXNoYClcbiAgICAgICAgICAgIHRoaXMucG9lbUVsLmFwcGVuZChmaWxsZWRMaW5lKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5TWV0YURhdGEoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlTGluZShqc29uTGluZSwgdWwpIHtcbiAgICAgICAgY29uc3Qgd29yZENvdW50ID0gT2JqZWN0LmtleXMoanNvbkxpbmUpLmxlbmd0aCAtIDEgLy8gZXhjbHVkZSBcInRyYW5zbGF0aW9uXCIga2V5XG4gICAgICAgIGZvciAobGV0IGVsZSA9IDA7IGVsZSA8IHdvcmRDb3VudDsgZWxlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGpzb25MaW5lW2VsZV0ucGFydF9vZl9zcGVlY2gpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBqc29uTGluZVtlbGVdLndvcmRcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWxcbiAgICB9XG5cbiAgICBkaXNwbGF5TWV0YURhdGEoKSB7XG4gICAgICAgIC8vIHRpdGxlXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgICAgIGgyLmFwcGVuZCh0aGlzLnBvZW0ubWV0YWRhdGEudGl0bGUpXG4gICAgICAgIHRoaXMubWV0YURhdGEuYXBwZW5kKGgyKVxuXG4gICAgICAgIC8vIGF1dGhvclxuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBoMy5hcHBlbmQoXCJwb3IgXCIgKyB0aGlzLnBvZW0ubWV0YWRhdGEucG9ldClcbiAgICAgICAgdGhpcy5tZXRhRGF0YS5hcHBlbmQoaDMpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2VtVmlldztcbiJdLCJuYW1lcyI6WyJQb2VtVmlldyIsImNvbnN0cnVjdG9yIiwicG9lbUVsIiwicG9lbU5hbWUiLCJwb2VtTWV0YURhdGEiLCJwb2VtIiwiZ3JhYlBvZW0iLCJtZXRhRGF0YSIsInJlcyIsImZldGNoIiwidGhlbiIsIm9rIiwianNvbiIsInJldHJpZXZhbCIsInNldFVwUG9lbSIsImNhdGNoIiwiZXJyb3JSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5lQ291bnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibGluZU51bSIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZmlsbGVkTGluZSIsInBvcHVsYXRlTGluZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImRpc3BsYXlNZXRhRGF0YSIsImpzb25MaW5lIiwid29yZENvdW50IiwiZWxlIiwibGkiLCJwYXJ0X29mX3NwZWVjaCIsImlubmVyVGV4dCIsIndvcmQiLCJoMiIsIm1ldGFkYXRhIiwidGl0bGUiLCJoMyIsInBvZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/poem-view.js\n");

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