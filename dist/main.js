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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/poem-view */ \"./src/scripts/poem-view.js\");\n/* harmony import */ var _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/parts-of-speech-view */ \"./src/scripts/parts-of-speech-view.js\");\n/* harmony import */ var _scripts_dropdown_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/dropdown-view */ \"./src/scripts/dropdown-view.js\");\n\n\n\nwindow.PoemView = _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.PartsOfSpeechView = _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.DropdownView = _scripts_dropdown_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n// container for title/poet\nconst poemMetaData = document.querySelector(\".poem-metadata\");\n// container for poems\nconst poemEl = document.querySelector(\".poem\");\n// container for parts of speech\nconst posEl = document.querySelector(\".pos\");\n// dropdown menu, nav elements go inside this\nconst dropdownEl = document.querySelector(\".dropdown-content\");\n\n// load default poem — can also load blank page\nconst poem = new _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, \"Caminante, no hay camino\", poemMetaData);\nwindow.poem = poem;\nconst dropdown = new _scripts_dropdown_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](dropdownEl);\nwindow.dropdown = dropdown;\nconst pos = new _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](posEl);\nwindow.pos = pos;\n\n// event listener for dropdown poem selector\ndropdownEl.addEventListener(\"click\", e => {\n  e.preventDefault();\n  poemMetaData.replaceChildren([]);\n  poemEl.replaceChildren([]);\n  pos.clearSelected();\n  const poem = new _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, e.target.innerHTML, poemMetaData);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNvQjtBQUNaO0FBRWxERyxNQUFNLENBQUNILFFBQVEsR0FBR0EsMERBQVE7QUFDMUJHLE1BQU0sQ0FBQ0YsaUJBQWlCLEdBQUdBLHFFQUFpQjtBQUM1Q0UsTUFBTSxDQUFDRCxZQUFZLEdBQUdBLDhEQUFZOztBQUVsQztBQUNBLE1BQU1FLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDN0Q7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM5QztBQUNBLE1BQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzVDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFOUQ7QUFDQSxNQUFNSSxJQUFJLEdBQUcsSUFBSVYsMERBQVEsQ0FBQ08sTUFBTSxFQUFFLDBCQUEwQixFQUFFSCxZQUFZLENBQUM7QUFDM0VELE1BQU0sQ0FBQ08sSUFBSSxHQUFHQSxJQUFJO0FBRWxCLE1BQU1DLFFBQVEsR0FBRyxJQUFJVCw4REFBWSxDQUFDTyxVQUFVLENBQUM7QUFDN0NOLE1BQU0sQ0FBQ1EsUUFBUSxHQUFHQSxRQUFRO0FBRTFCLE1BQU1DLEdBQUcsR0FBRyxJQUFJWCxxRUFBaUIsQ0FBQ08sS0FBSyxDQUFDO0FBQ3hDTCxNQUFNLENBQUNTLEdBQUcsR0FBR0EsR0FBRzs7QUFFaEI7QUFDQUgsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN4Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUVsQlgsWUFBWSxDQUFDWSxlQUFlLENBQUMsRUFBRSxDQUFDO0VBQ2hDVCxNQUFNLENBQUNTLGVBQWUsQ0FBQyxFQUFFLENBQUM7RUFDMUJKLEdBQUcsQ0FBQ0ssYUFBYSxDQUFDLENBQUM7RUFFbkIsTUFBTVAsSUFBSSxHQUFHLElBQUlWLDBEQUFRLENBQUNPLE1BQU0sRUFBRU8sQ0FBQyxDQUFDSSxNQUFNLENBQUNDLFNBQVMsRUFBRWYsWUFBWSxDQUFDO0FBQ3ZFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvZW1WaWV3IGZyb20gXCIuL3NjcmlwdHMvcG9lbS12aWV3XCJcbmltcG9ydCBQYXJ0c09mU3BlZWNoVmlldyBmcm9tIFwiLi9zY3JpcHRzL3BhcnRzLW9mLXNwZWVjaC12aWV3XCJcbmltcG9ydCBEcm9wZG93blZpZXcgZnJvbSBcIi4vc2NyaXB0cy9kcm9wZG93bi12aWV3XCJcblxud2luZG93LlBvZW1WaWV3ID0gUG9lbVZpZXdcbndpbmRvdy5QYXJ0c09mU3BlZWNoVmlldyA9IFBhcnRzT2ZTcGVlY2hWaWV3XG53aW5kb3cuRHJvcGRvd25WaWV3ID0gRHJvcGRvd25WaWV3XG5cbi8vIGNvbnRhaW5lciBmb3IgdGl0bGUvcG9ldFxuY29uc3QgcG9lbU1ldGFEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2VtLW1ldGFkYXRhXCIpXG4vLyBjb250YWluZXIgZm9yIHBvZW1zXG5jb25zdCBwb2VtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvZW1cIik7XG4vLyBjb250YWluZXIgZm9yIHBhcnRzIG9mIHNwZWVjaFxuY29uc3QgcG9zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc1wiKVxuLy8gZHJvcGRvd24gbWVudSwgbmF2IGVsZW1lbnRzIGdvIGluc2lkZSB0aGlzXG5jb25zdCBkcm9wZG93bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpXG5cbi8vIGxvYWQgZGVmYXVsdCBwb2VtIOKAlCBjYW4gYWxzbyBsb2FkIGJsYW5rIHBhZ2VcbmNvbnN0IHBvZW0gPSBuZXcgUG9lbVZpZXcocG9lbUVsLCBcIkNhbWluYW50ZSwgbm8gaGF5IGNhbWlub1wiLCBwb2VtTWV0YURhdGEpXG53aW5kb3cucG9lbSA9IHBvZW1cblxuY29uc3QgZHJvcGRvd24gPSBuZXcgRHJvcGRvd25WaWV3KGRyb3Bkb3duRWwpXG53aW5kb3cuZHJvcGRvd24gPSBkcm9wZG93blxuXG5jb25zdCBwb3MgPSBuZXcgUGFydHNPZlNwZWVjaFZpZXcocG9zRWwpXG53aW5kb3cucG9zID0gcG9zXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBkcm9wZG93biBwb2VtIHNlbGVjdG9yXG5kcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgcG9lbU1ldGFEYXRhLnJlcGxhY2VDaGlsZHJlbihbXSk7XG4gICAgcG9lbUVsLnJlcGxhY2VDaGlsZHJlbihbXSlcbiAgICBwb3MuY2xlYXJTZWxlY3RlZCgpXG5cbiAgICBjb25zdCBwb2VtID0gbmV3IFBvZW1WaWV3KHBvZW1FbCwgZS50YXJnZXQuaW5uZXJIVE1MLCBwb2VtTWV0YURhdGEpXG59KTtcbiJdLCJuYW1lcyI6WyJQb2VtVmlldyIsIlBhcnRzT2ZTcGVlY2hWaWV3IiwiRHJvcGRvd25WaWV3Iiwid2luZG93IiwicG9lbU1ldGFEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9lbUVsIiwicG9zRWwiLCJkcm9wZG93bkVsIiwicG9lbSIsImRyb3Bkb3duIiwicG9zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcGxhY2VDaGlsZHJlbiIsImNsZWFyU2VsZWN0ZWQiLCJ0YXJnZXQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dropdown-view.js":
/*!**************************************!*\
  !*** ./src/scripts/dropdown-view.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass DropdownView {\n  constructor(dropdownEl) {\n    this.dropdownEl = dropdownEl;\n    this.titles = this.fetchTitles();\n  }\n  fetchTitles() {\n    const res = fetch(\"./data/data.json\").then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.titles = Object.keys(retrieval);\n      this.loadDropdown();\n    }).catch(errorResponse => console.log(errorResponse));\n  }\n  loadDropdown() {\n    this.titles.forEach(title => {\n      const p = document.createElement(\"p\");\n      p.innerText = title;\n      this.dropdownEl.append(p);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcm9wZG93bi12aWV3LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFDZkMsV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFDcEM7RUFFQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTUMsR0FBRyxHQUFHQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FDaENDLElBQUksQ0FBQ0YsR0FBRyxJQUFJO01BQ1QsSUFBSUEsR0FBRyxDQUFDRyxFQUFFLEVBQUU7UUFDUixPQUFPSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBTTtRQUNILE1BQU1KLEdBQUc7TUFDYjtJQUNKLENBQUMsQ0FBQyxDQUNERSxJQUFJLENBQUNHLFNBQVMsSUFBSTtNQUNmLElBQUksQ0FBQ1AsTUFBTSxHQUFHUSxNQUFNLENBQUNDLElBQUksQ0FBQ0YsU0FBUyxDQUFDO01BQ3BDLElBQUksQ0FBQ0csWUFBWSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsYUFBYSxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsYUFBYSxDQUFDLENBQUM7RUFDM0Q7RUFFQUYsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDVixNQUFNLENBQUNlLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO01BQ3pCLE1BQU1DLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO01BQ3JDRixDQUFDLENBQUNHLFNBQVMsR0FBR0osS0FBSztNQUNuQixJQUFJLENBQUNqQixVQUFVLENBQUNzQixNQUFNLENBQUNKLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsK0RBQWVwQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy9kcm9wZG93bi12aWV3LmpzPzFmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJvcGRvd25WaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihkcm9wZG93bkVsKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbCA9IGRyb3Bkb3duRWxcbiAgICAgICAgdGhpcy50aXRsZXMgPSB0aGlzLmZldGNoVGl0bGVzKClcbiAgICB9XG5cbiAgICBmZXRjaFRpdGxlcygpIHtcbiAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goXCIuL2RhdGEvZGF0YS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmV0cmlldmFsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlcyA9IE9iamVjdC5rZXlzKHJldHJpZXZhbClcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREcm9wZG93bigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yUmVzcG9uc2UgPT4gY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSkpXG4gICAgfVxuXG4gICAgbG9hZERyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgcC5pbm5lclRleHQgPSB0aXRsZVxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkVsLmFwcGVuZChwKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25WaWV3O1xuIl0sIm5hbWVzIjpbIkRyb3Bkb3duVmlldyIsImNvbnN0cnVjdG9yIiwiZHJvcGRvd25FbCIsInRpdGxlcyIsImZldGNoVGl0bGVzIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwib2siLCJqc29uIiwicmV0cmlldmFsIiwiT2JqZWN0Iiwia2V5cyIsImxvYWREcm9wZG93biIsImNhdGNoIiwiZXJyb3JSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidGl0bGUiLCJwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/dropdown-view.js\n");

/***/ }),

/***/ "./src/scripts/parts-of-speech-view.js":
/*!*********************************************!*\
  !*** ./src/scripts/parts-of-speech-view.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PartsOfSpeechView {\n  constructor(posEl) {\n    this.posEl = posEl;\n    this.populateWordTiles();\n  }\n  populateWordTiles() {\n    const categories = [\"noun\", \"verb\", \"adjective\", \"adverb\", \"article\", \"pronoun\", \"preposition\", \"conjunction\"];\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"pos-list\");\n    categories.forEach(partOfSpeech => {\n      ul.append(this.createWordTile(partOfSpeech));\n    });\n    this.createClearTile(ul);\n    this.posEl.append(ul);\n    this.posEl.addEventListener(\"click\", this.highlightWords.bind(this));\n  }\n  createWordTile(partOfSpeech) {\n    const li = document.createElement(\"li\");\n    li.innerText = partOfSpeech;\n    li.classList.add(\"pos-tile\");\n    li.setAttribute(\"id\", `${partOfSpeech}`);\n    return li;\n  }\n\n  // hidden unless event listener is triggered\n  createClearTile(ul) {\n    const li = document.createElement(\"li\");\n    li.classList.add(\"pos-tile\", \"disabled\");\n    li.setAttribute(\"id\", \"clear-tile\");\n    li.innerText = \"Clear\";\n    ul.append(li);\n  }\n  highlightWords(e) {\n    e.preventDefault();\n    // find the part of speech of button\n    const buttonId = e.target.id;\n    if (buttonId !== \"clear-tile\") {\n      // give button new style\n      e.srcElement.classList.toggle(\"selected\");\n      // fetch matching words in poem\n      const changingWords = document.querySelectorAll(`.${buttonId}`);\n      // apply different style\n      changingWords.forEach(word => {\n        word.classList.toggle(\"selected\");\n      });\n      // activate clear button\n      const clearTile = document.getElementById(\"clear-tile\");\n      clearTile.classList.remove(\"disabled\");\n    } else {\n      this.clearSelected();\n    }\n  }\n\n  // reset all classes to \".pos-tile\"\n  clearSelected() {\n    const tiles = document.querySelectorAll(\".pos-tile, .word\");\n    // add deselected to button\n    tiles.forEach(tile => {\n      tile.classList.remove(\"selected\");\n      if (tile.id === \"clear-tile\") tile.classList.add(\"disabled\");\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartsOfSpeechView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYXJ0cy1vZi1zcGVlY2gtdmlldy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsaUJBQWlCLENBQUM7RUFFcEJDLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztFQUM1QjtFQUVBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQixNQUFNQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0lBQzlHLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDRixFQUFFLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM1QkwsVUFBVSxDQUFDTSxPQUFPLENBQUNDLFlBQVksSUFBSTtNQUMvQk4sRUFBRSxDQUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDQyxjQUFjLENBQUNGLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0csZUFBZSxDQUFDVCxFQUFFLENBQUM7SUFDeEIsSUFBSSxDQUFDSCxLQUFLLENBQUNVLE1BQU0sQ0FBQ1AsRUFBRSxDQUFDO0lBRXJCLElBQUksQ0FBQ0gsS0FBSyxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN4RTtFQUVBSixjQUFjQSxDQUFDRixZQUFZLEVBQUU7SUFDekIsTUFBTU8sRUFBRSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNXLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHUixZQUFZO0lBQzNCTyxFQUFFLENBQUNWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM1QlMsRUFBRSxDQUFDRSxZQUFZLENBQUMsSUFBSSxFQUFHLEdBQUVULFlBQWEsRUFBQyxDQUFDO0lBQ3hDLE9BQU9PLEVBQUU7RUFDYjs7RUFFQTtFQUNBSixlQUFlQSxDQUFDVCxFQUFFLEVBQUU7SUFDaEIsTUFBTWEsRUFBRSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNXLEVBQUUsQ0FBQ1YsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUN4Q1MsRUFBRSxDQUFDRSxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztJQUNuQ0YsRUFBRSxDQUFDQyxTQUFTLEdBQUcsT0FBTztJQUN0QmQsRUFBRSxDQUFDTyxNQUFNLENBQUNNLEVBQUUsQ0FBQztFQUNqQjtFQUVBRixjQUFjQSxDQUFDSyxDQUFDLEVBQUU7SUFDZEEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQjtJQUNBLE1BQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEVBQUU7SUFFNUIsSUFBSUYsUUFBUSxLQUFLLFlBQVksRUFBRTtNQUMzQjtNQUNBRixDQUFDLENBQUNLLFVBQVUsQ0FBQ2xCLFNBQVMsQ0FBQ21CLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDekM7TUFDQSxNQUFNQyxhQUFhLEdBQUd0QixRQUFRLENBQUN1QixnQkFBZ0IsQ0FBRSxJQUFHTixRQUFTLEVBQUMsQ0FBQztNQUMvRDtNQUNBSyxhQUFhLENBQUNsQixPQUFPLENBQUNvQixJQUFJLElBQUk7UUFDMUJBLElBQUksQ0FBQ3RCLFNBQVMsQ0FBQ21CLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDckMsQ0FBQyxDQUFDO01BQ0Y7TUFDQSxNQUFNSSxTQUFTLEdBQUd6QixRQUFRLENBQUMwQixjQUFjLENBQUMsWUFBWSxDQUFDO01BQ3ZERCxTQUFTLENBQUN2QixTQUFTLENBQUN5QixNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzFDLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7SUFDeEI7RUFDSjs7RUFFQTtFQUNBQSxhQUFhQSxDQUFBLEVBQUc7SUFDWixNQUFNQyxLQUFLLEdBQUc3QixRQUFRLENBQUN1QixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRDtJQUNBTSxLQUFLLENBQUN6QixPQUFPLENBQUMwQixJQUFJLElBQUk7TUFDbEJBLElBQUksQ0FBQzVCLFNBQVMsQ0FBQ3lCLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDakMsSUFBSUcsSUFBSSxDQUFDWCxFQUFFLEtBQUssWUFBWSxFQUFFVyxJQUFJLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLCtEQUFlVCxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9zY3JpcHRzL3BhcnRzLW9mLXNwZWVjaC12aWV3LmpzPzk3MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFydHNPZlNwZWVjaFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IocG9zRWwpIHtcbiAgICAgICAgdGhpcy5wb3NFbCA9IHBvc0VsXG4gICAgICAgIHRoaXMucG9wdWxhdGVXb3JkVGlsZXMoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlV29yZFRpbGVzKCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW1wibm91blwiLCBcInZlcmJcIiwgXCJhZGplY3RpdmVcIiwgXCJhZHZlcmJcIiwgXCJhcnRpY2xlXCIsIFwicHJvbm91blwiLCBcInByZXBvc2l0aW9uXCIsIFwiY29uanVuY3Rpb25cIl1cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcInBvcy1saXN0XCIpXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChwYXJ0T2ZTcGVlY2ggPT4ge1xuICAgICAgICAgICAgdWwuYXBwZW5kKHRoaXMuY3JlYXRlV29yZFRpbGUocGFydE9mU3BlZWNoKSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jcmVhdGVDbGVhclRpbGUodWwpXG4gICAgICAgIHRoaXMucG9zRWwuYXBwZW5kKHVsKVxuXG4gICAgICAgIHRoaXMucG9zRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGlnaGxpZ2h0V29yZHMuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBjcmVhdGVXb3JkVGlsZShwYXJ0T2ZTcGVlY2gpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gcGFydE9mU3BlZWNoXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJwb3MtdGlsZVwiKVxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwYXJ0T2ZTcGVlY2h9YClcbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgLy8gaGlkZGVuIHVubGVzcyBldmVudCBsaXN0ZW5lciBpcyB0cmlnZ2VyZWRcbiAgICBjcmVhdGVDbGVhclRpbGUodWwpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInBvcy10aWxlXCIsIFwiZGlzYWJsZWRcIilcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbGVhci10aWxlXCIpXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IFwiQ2xlYXJcIlxuICAgICAgICB1bC5hcHBlbmQobGkpXG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0V29yZHMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gZmluZCB0aGUgcGFydCBvZiBzcGVlY2ggb2YgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJ1dHRvbklkID0gZS50YXJnZXQuaWRcblxuICAgICAgICBpZiAoYnV0dG9uSWQgIT09IFwiY2xlYXItdGlsZVwiKSB7XG4gICAgICAgICAgICAvLyBnaXZlIGJ1dHRvbiBuZXcgc3R5bGVcbiAgICAgICAgICAgIGUuc3JjRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIilcbiAgICAgICAgICAgIC8vIGZldGNoIG1hdGNoaW5nIHdvcmRzIGluIHBvZW1cbiAgICAgICAgICAgIGNvbnN0IGNoYW5naW5nV29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtidXR0b25JZH1gKVxuICAgICAgICAgICAgLy8gYXBwbHkgZGlmZmVyZW50IHN0eWxlXG4gICAgICAgICAgICBjaGFuZ2luZ1dvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgICAgICAgICAgd29yZC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBhY3RpdmF0ZSBjbGVhciBidXR0b25cbiAgICAgICAgICAgIGNvbnN0IGNsZWFyVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItdGlsZVwiKVxuICAgICAgICAgICAgY2xlYXJUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0IGFsbCBjbGFzc2VzIHRvIFwiLnBvcy10aWxlXCJcbiAgICBjbGVhclNlbGVjdGVkKCkge1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9zLXRpbGUsIC53b3JkXCIpXG4gICAgICAgIC8vIGFkZCBkZXNlbGVjdGVkIHRvIGJ1dHRvblxuICAgICAgICB0aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIilcbiAgICAgICAgICAgIGlmICh0aWxlLmlkID09PSBcImNsZWFyLXRpbGVcIikgdGlsZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRzT2ZTcGVlY2hWaWV3O1xuIl0sIm5hbWVzIjpbIlBhcnRzT2ZTcGVlY2hWaWV3IiwiY29uc3RydWN0b3IiLCJwb3NFbCIsInBvcHVsYXRlV29yZFRpbGVzIiwiY2F0ZWdvcmllcyIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInBhcnRPZlNwZWVjaCIsImFwcGVuZCIsImNyZWF0ZVdvcmRUaWxlIiwiY3JlYXRlQ2xlYXJUaWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZ2hsaWdodFdvcmRzIiwiYmluZCIsImxpIiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uSWQiLCJ0YXJnZXQiLCJpZCIsInNyY0VsZW1lbnQiLCJ0b2dnbGUiLCJjaGFuZ2luZ1dvcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsIndvcmQiLCJjbGVhclRpbGUiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNsZWFyU2VsZWN0ZWQiLCJ0aWxlcyIsInRpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/parts-of-speech-view.js\n");

/***/ }),

/***/ "./src/scripts/poem-view.js":
/*!**********************************!*\
  !*** ./src/scripts/poem-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PoemView {\n  constructor(poemEl, poemName, poemMetaData) {\n    this.poemEl = poemEl;\n    this.poemName = poemName;\n    this.poem = this.grabPoem(poemName);\n    this.metaData = poemMetaData;\n  }\n  grabPoem(poemName) {\n    const res = fetch(`./data/data.json`).then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.poem = retrieval[poemName];\n      this.setUpPoem();\n    }).catch(errorResponse => console.log(errorResponse));\n  }\n  setUpPoem() {\n    const lineCount = Object.keys(this.poem).length;\n    for (let lineNum = 0; lineNum < lineCount - 1; lineNum++) {\n      // exclude metadata\n      if (this.poem[lineNum] === \"break\") {\n        const br = document.createElement(\"br\");\n        br.classList.add(`line-${lineNum}-spanish`);\n        this.poemEl.append(br);\n      } else {\n        const ul = document.createElement(\"ul\");\n        const filledLine = this.populateLine(this.poem[lineNum], ul);\n        filledLine.classList.add(`${lineNum}`);\n        this.addToolTip(filledLine);\n        // filledLine.addEventListener(\"mouseenter\", this.highlightLine.bind(this))\n        // filledLine.addEventListener(\"mouseleave\", this.unhighlightLine.bind(this))\n        this.poemEl.append(filledLine);\n      }\n    }\n    this.displayMetaData();\n  }\n  populateLine(jsonLine, ul) {\n    const wordCount = Object.keys(jsonLine).length - 1;\n    for (let ele = 0; ele < wordCount; ele++) {\n      const li = document.createElement(\"li\");\n      li.classList.add(jsonLine[ele].part_of_speech, \"word\");\n      li.innerText = jsonLine[ele].word;\n      ul.append(li);\n    }\n    return ul;\n  }\n  addToolTip(line) {\n    const tooltipEl = document.createElement(\"span\");\n    tooltipEl.classList.add(\"tooltiptext\");\n    const translation = this.poem[line.classList].translation; // should be line num\n    tooltipEl.innerText = translation;\n    line.classList.add(\"tooltip\");\n    line.append(tooltipEl);\n  }\n  displayMetaData() {\n    const h2 = document.createElement(\"h2\");\n    h2.append(this.poem.metadata.title);\n    this.metaData.append(h2);\n    const h3 = document.createElement(\"h3\");\n    h3.append(\"por \" + this.poem.metadata.poet);\n    this.metaData.append(h3);\n  }\n\n  // highlightLine(e) {\n  //     e.preventDefault()\n  //     const line = e.target\n  //     line.classList.toggle(\"highlighted\")\n  // }\n\n  // unhighlightLine(e) {\n  //     e.preventDefault()\n  //     const line = e.target\n  //     line.classList.toggle(\"highlighted\")\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSjs7QUFFQSwrREFBZWhELFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9zY3JpcHRzL3BvZW0tdmlldy5qcz81ODM3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvZW1WaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihwb2VtRWwsIHBvZW1OYW1lLCBwb2VtTWV0YURhdGEpIHtcbiAgICAgICAgdGhpcy5wb2VtRWwgPSBwb2VtRWxcbiAgICAgICAgdGhpcy5wb2VtTmFtZSA9IHBvZW1OYW1lXG4gICAgICAgIHRoaXMucG9lbSA9IHRoaXMuZ3JhYlBvZW0ocG9lbU5hbWUpXG4gICAgICAgIHRoaXMubWV0YURhdGEgPSBwb2VtTWV0YURhdGFcbiAgICB9XG5cbiAgICBncmFiUG9lbShwb2VtTmFtZSkgIHtcbiAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goYC4vZGF0YS9kYXRhLmpzb25gKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJldHJpZXZhbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2VtID0gcmV0cmlldmFsW3BvZW1OYW1lXVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXBQb2VtKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JSZXNwb25zZSA9PiBjb25zb2xlLmxvZyhlcnJvclJlc3BvbnNlKSlcbiAgICB9XG5cbiAgICBzZXRVcFBvZW0oKSB7XG4gICAgICAgIGNvbnN0IGxpbmVDb3VudCA9IE9iamVjdC5rZXlzKHRoaXMucG9lbSkubGVuZ3RoXG5cbiAgICAgICAgZm9yIChsZXQgbGluZU51bSA9IDA7IGxpbmVOdW0gPCBsaW5lQ291bnQgLSAxOyBsaW5lTnVtKyspIHsgLy8gZXhjbHVkZSBtZXRhZGF0YVxuICAgICAgICAgICAgaWYgKHRoaXMucG9lbVtsaW5lTnVtXSA9PT0gXCJicmVha1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcbiAgICAgICAgICAgICAgICBici5jbGFzc0xpc3QuYWRkKGBsaW5lLSR7bGluZU51bX0tc3BhbmlzaGApXG4gICAgICAgICAgICAgICAgdGhpcy5wb2VtRWwuYXBwZW5kKGJyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxlZExpbmUgPSB0aGlzLnBvcHVsYXRlTGluZSh0aGlzLnBvZW1bbGluZU51bV0sIHVsKVxuICAgICAgICAgICAgICAgIGZpbGxlZExpbmUuY2xhc3NMaXN0LmFkZChgJHtsaW5lTnVtfWApXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb29sVGlwKGZpbGxlZExpbmUpXG4gICAgICAgICAgICAgICAgLy8gZmlsbGVkTGluZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLmhpZ2hsaWdodExpbmUuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAvLyBmaWxsZWRMaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMudW5oaWdobGlnaHRMaW5lLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgdGhpcy5wb2VtRWwuYXBwZW5kKGZpbGxlZExpbmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwbGF5TWV0YURhdGEoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlTGluZShqc29uTGluZSwgdWwpIHtcbiAgICAgICAgY29uc3Qgd29yZENvdW50ID0gT2JqZWN0LmtleXMoanNvbkxpbmUpLmxlbmd0aCAtIDFcbiAgICAgICAgZm9yIChsZXQgZWxlID0gMDsgZWxlIDwgd29yZENvdW50OyBlbGUrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoanNvbkxpbmVbZWxlXS5wYXJ0X29mX3NwZWVjaCwgXCJ3b3JkXCIpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBqc29uTGluZVtlbGVdLndvcmRcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWxcbiAgICB9XG5cbiAgICBhZGRUb29sVGlwKGxpbmUpIHtcbiAgICAgICAgY29uc3QgdG9vbHRpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgdG9vbHRpcEVsLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwdGV4dFwiKVxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMucG9lbVtsaW5lLmNsYXNzTGlzdF0udHJhbnNsYXRpb24gLy8gc2hvdWxkIGJlIGxpbmUgbnVtXG4gICAgICAgIHRvb2x0aXBFbC5pbm5lclRleHQgPSB0cmFuc2xhdGlvblxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwXCIpXG4gICAgICAgIGxpbmUuYXBwZW5kKHRvb2x0aXBFbClcbiAgICB9XG5cbiAgICBkaXNwbGF5TWV0YURhdGEoKSB7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgICAgIGgyLmFwcGVuZCh0aGlzLnBvZW0ubWV0YWRhdGEudGl0bGUpXG4gICAgICAgIHRoaXMubWV0YURhdGEuYXBwZW5kKGgyKVxuXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgIGgzLmFwcGVuZChcInBvciBcIiArIHRoaXMucG9lbS5tZXRhZGF0YS5wb2V0KVxuICAgICAgICB0aGlzLm1ldGFEYXRhLmFwcGVuZChoMylcbiAgICB9XG5cblxuICAgIC8vIGhpZ2hsaWdodExpbmUoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyAgICAgY29uc3QgbGluZSA9IGUudGFyZ2V0XG4gICAgLy8gICAgIGxpbmUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZ2hsaWdodGVkXCIpXG4gICAgLy8gfVxuXG4gICAgLy8gdW5oaWdobGlnaHRMaW5lKGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gICAgIGNvbnN0IGxpbmUgPSBlLnRhcmdldFxuICAgIC8vICAgICBsaW5lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWdobGlnaHRlZFwiKVxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9lbVZpZXc7XG4iXSwibmFtZXMiOlsiUG9lbVZpZXciLCJjb25zdHJ1Y3RvciIsInBvZW1FbCIsInBvZW1OYW1lIiwicG9lbU1ldGFEYXRhIiwicG9lbSIsImdyYWJQb2VtIiwibWV0YURhdGEiLCJyZXMiLCJmZXRjaCIsInRoZW4iLCJvayIsImpzb24iLCJyZXRyaWV2YWwiLCJzZXRVcFBvZW0iLCJjYXRjaCIsImVycm9yUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibGluZUNvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImxpbmVOdW0iLCJiciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInVsIiwiZmlsbGVkTGluZSIsInBvcHVsYXRlTGluZSIsImFkZFRvb2xUaXAiLCJkaXNwbGF5TWV0YURhdGEiLCJqc29uTGluZSIsIndvcmRDb3VudCIsImVsZSIsImxpIiwicGFydF9vZl9zcGVlY2giLCJpbm5lclRleHQiLCJ3b3JkIiwibGluZSIsInRvb2x0aXBFbCIsInRyYW5zbGF0aW9uIiwiaDIiLCJtZXRhZGF0YSIsInRpdGxlIiwiaDMiLCJwb2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/poem-view.js\n");

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