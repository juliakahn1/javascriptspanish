import View from "./scripts/view"

window.View = View

// create object for poem from HTML where you want to put poem
const poemEl = document.querySelector(".poem");
// testing
const test = new View(poemEl, "machado")
// test.setUpPoem()
window.test = test

// pass in poem that is selected
// event listener on nav button for poem
