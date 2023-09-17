import PoemView from "./scripts/poem-view"
import PartsOfSpeechView from "./scripts/parts-of-speech-view"


window.PoemView = PoemView
window.PartsOfSpeechView = PartsOfSpeechView

// container for title/poet
const poemMetaData = document.querySelector(".poem-metadata")
// container for poems
const poemEl = document.querySelector(".poem");
// container for parts of speech
const posEl = document.querySelector(".pos")


// testing — CHANGE TO DROPDOWN
const poem = new PoemView(poemEl, "machado", poemMetaData)
window.poem = poem

const pos = new PartsOfSpeechView(posEl)
window.pos = pos


// pass in poem that is selected
// event listener on nav button for poem


// EVENTS

// when tile is clicked and unclicked
    // change the class of the words with the matching class (i.e. verb => highlighted-verb)
