import PoemView from "./scripts/poem-view"
import PartsOfSpeechView from "./scripts/parts-of-speech-view"
import DropdownView from "./scripts/dropdown-view"

window.poemMetaData = document.querySelector(".poem-metadata")
window.poemEl = document.querySelector(".poem");

function setupPoem(name) {
    window.poem = new PoemView(poemEl, name, poemMetaData, (poem) => {
        window.pos = new PartsOfSpeechView(document.querySelector(".pos"), window.poemEl, poem.getPoSPresent())
    })
}

const defaultPoemName = "Caminante, no hay camino"
setupPoem(defaultPoemName)

const dropdownEl = document.querySelector(".dropdown-content")
window.dropdown = new DropdownView(dropdownEl)
dropdownEl.addEventListener("click", (e) => {
    // event listener for dropdown poem selector

    e.preventDefault()

    window.poemMetaData.replaceChildren([]);
    window.poemEl.replaceChildren([])
    window.pos.clearAll()

    setupPoem(e.target.innerHTML)
})
