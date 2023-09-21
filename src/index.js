import PoemView from "./scripts/poem-view"
import PartsOfSpeechView from "./scripts/parts-of-speech-view"
import DropdownView from "./scripts/dropdown-view"

window.poemMetaData = document.querySelector(".poem-metadata")
window.poemEl = document.querySelector(".poem");

function setupPoem(name) {
    window.poem = new PoemView(poemEl, name, poemMetaData, (poem) => {
        window.pos = new PartsOfSpeechView(document.querySelector(".pos"), poem.getPoSPresent())
    })
}

const defaultPoemName = "Caminante, no hay camino"
setupPoem(defaultPoemName)

const dropdownEl = document.querySelector(".dropdown-content")
window.dropdown = new DropdownView(dropdownEl)

// dropdown poem selector event listener

dropdownEl.addEventListener("click", (e) => {
    e.preventDefault()

    window.poemMetaData.replaceChildren([]);
    window.poemEl.replaceChildren([])
    window.pos.clearAll()

    setupPoem(e.target.innerHTML)
})

// modal event listeners

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector(".modal").style.display = "flex"
});

document.querySelector('.close-btn').addEventListener("click", (e) => {
    document.querySelector('.modal').style.display = "none"
})
