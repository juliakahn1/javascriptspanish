import PoemView from "./scripts/poem-view"

window.PoemView = PoemView

// create object for poem from HTML where you want to put poem
const poemEl = document.querySelector(".poem");
// testing
const test = new PoemView(poemEl, "machado")
window.test = test

// pass in poem that is selected
// event listener on nav button for poem
