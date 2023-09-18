import PoemView from "./scripts/poem-view"
import PartsOfSpeechView from "./scripts/parts-of-speech-view"
import DropdownView from "./scripts/dropdown-view"

window.PoemView = PoemView
window.PartsOfSpeechView = PartsOfSpeechView
window.DropdownView = DropdownView

// container for title/poet
const poemMetaData = document.querySelector(".poem-metadata")
// container for poems
const poemEl = document.querySelector(".poem");
// container for parts of speech
const posEl = document.querySelector(".pos")
// dropdown menu, nav elements go inside this
const dropdownEl = document.querySelector(".dropdown-content")

// load default poem — can also load blank page
const poem = new PoemView(poemEl, "Caminante, no hay camino", poemMetaData)
window.poem = poem

const dropdown = new DropdownView(dropdownEl)
window.dropdown = dropdown

const pos = new PartsOfSpeechView(posEl)
window.pos = pos

// event listener for dropdown poem selector
dropdownEl.addEventListener("click", (e) => {
    e.preventDefault()

    poemMetaData.replaceChildren([]);
    poemEl.replaceChildren([])
    pos.clearSelected()

    const poem = new PoemView(poemEl, e.target.innerHTML, poemMetaData)
});
