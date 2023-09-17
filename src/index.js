import PoemView from "./scripts/poem-view"
import PartsOfSpeechView from "./scripts/parts-of-speech-view"


window.PoemView = PoemView
window.PartsOfSpeechView = PartsOfSpeechView

const poemEl = document.querySelector(".poem");
const poemMetaData = document.querySelector(".poem-metadata")
const verbsEl = document.querySelector(".verbs")

// testing — CHANGE TO DROPDOWN
const poem = new PoemView(poemEl, "machado", poemMetaData)
window.poem = poem

const pos = new PartsOfSpeechView(verbsEl)
window.pos = pos


// pass in poem that is selected
// event listener on nav button for poem
