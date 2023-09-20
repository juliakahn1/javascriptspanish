import PoemView from "./scripts/poem-view"
import PartsOfSpeechView from "./scripts/parts-of-speech-view"
import DropdownView from "./scripts/dropdown-view"

window.PoemView = PoemView
window.PartsOfSpeechView = PartsOfSpeechView
window.DropdownView = DropdownView

const poemMetaData = document.querySelector(".poem-metadata")
const poemEl = document.querySelector(".poem");
const poem = new PoemView(poemEl, "Caminante, no hay camino", poemMetaData)
window.poem = poem

const posEl = document.querySelector(".pos")
const pos = new PartsOfSpeechView(posEl, poemEl)
window.pos = pos

const dropdownEl = document.querySelector(".dropdown-content")
const dropdown = new DropdownView(dropdownEl)
window.dropdown = dropdown

// event listener for dropdown poem selector
dropdownEl.addEventListener("click", (e) => {
    e.preventDefault()

    poemMetaData.replaceChildren([]);
    poemEl.replaceChildren([])
    pos.clearAll()

    const poem = new PoemView(poemEl, e.target.innerHTML, poemMetaData)
});
