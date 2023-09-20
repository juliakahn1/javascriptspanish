// class PartsOfSpeechView {

//     constructor(posEl, poemEl) {
//         this.posEl = posEl
//         this.poemEl = poemEl
//         this.categories = ["verb", "noun", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"] // populate from poem
//         this.subVerbs = ["infinitive", "present"] // can get this from current poem ***
//         this.populateWordTiles()
//         this.poemEl = poemEl
//     }

//     // find verbs and subverbs in poem functions in poems

//     populateWordTiles() {
//         const ul = document.createElement("ul")
//         ul.classList.add("pos-list")
//         let verbTile

//         this.categories.forEach(partOfSpeech => {
//             const newTile = this.createWordTile(partOfSpeech)
//             if (newTile.id === "verb") {
//                 newTile.innerText = "all verbs"
//                 verbTile = newTile
//             }
//             ul.append(newTile)
//         })

//         this.createSubVerbs(verbTile)
//         this.createClearTile(ul)

//         this.posEl.append(ul)
//         this.posEl.addEventListener("click", this.highlightWords.bind(this))
//     }

//     createWordTile(partOfSpeech) {
//         const li = document.createElement("li")
//         li.innerText = partOfSpeech
//         li.classList.add("pos-tile", `${partOfSpeech}`)
//         li.setAttribute("id", `${partOfSpeech}`)
//         li.setAttribute("pos", `${partOfSpeech}`)
//         return li
//     }

//     createSubVerbs(verbTile) {
//         // const div = document.createElement("div")
//         this.subVerbs.forEach(subverb => {
//             const li = document.createElement("li")
//             li.innerText = subverb
//             li.classList.add("pos-tile", "subverb", "verb")
//             li.setAttribute("id", `${subverb}`)
//             li.setAttribute("pos", `${subverb}`)
//             verbTile.after(li)
//         })
//         // div.addEventListener("click", this.highlightWords.bind(this))
//         // verbTile.after(div)
//     }

//     // hidden unless event listener is triggered
//     createClearTile(ul) {
//         const li = document.createElement("li")
//         li.classList.add("pos-tile", "disabled")
//         li.setAttribute("id", "clear-tile")
//         li.innerText = "Clear"
//         ul.append(li)
//     }

//     /// HIGHLIGHTING



//     highlightWords(e) {

//         e.preventDefault()

//         const buttonId = e.target.id // pos of tile
//         const source = e.srcElement // element button
//         const allTiles = Array.from(document.querySelectorAll(".pos-tile"))

//         // which buttons are currently selected before changes
//         const currentTileState = Array.from(document.querySelectorAll(".pos-tile.selected"))

//         if (buttonId !== "clear-tile" && !(buttonId === "verb" || source.classList.contains("subverb"))) {
//             this.normalHighlight(source, buttonId, allTiles)
//         } else if (buttonId === "clear-tile") { // if CLEAR is selected
//             this.clearAll()
//         } else { // if verb
//             this.verbHighlight(currentTileState, source, buttonId)
//         }
//     }

//     verbHighlight(currentTileState, source, buttonId) {
//         const selectedVerbs = currentTileState.filter(ele => {
//             return ((ele.id === "verb" || ele.classList.contains("subverb")) && ele.classList.contains("selected"));
//         })

//         if (selectedVerbs.length === 0) { // if no verbs/subverbs selected, select appropriate
//             source.classList.add("selected")
//             const changingWords = document.querySelectorAll(`.${buttonId}`)
//             changingWords.forEach(word => word.classList.add("selected"))
//         } else if (selectedVerbs.every(ele => ele.classList.contains("subverb"))){ // if subverb(s) selected but no verb, select all verbs
//             source.classList.add("selected")
//             const changingWords = document.querySelectorAll(`.${buttonId}`)
//             changingWords.forEach(word => word.classList.add("selected"))
//         }

//         // if deselecting verb and other subverbs are selected => kep subverbs seelected
//     }

//     normalHighlight(source, buttonId, tiles) {
//         source.classList.toggle("selected")

//         const changingWords = document.querySelectorAll(`.${buttonId}`)
//         changingWords.forEach(word => word.classList.toggle("selected"))

//         const clearTile = document.getElementById("clear-tile")

//         if (tiles.some(tile => tile.classList.contains("selected"))) {
//             clearTile.classList.remove("disabled")
//         } else {
//             clearTile.classList.add("disabled")
//         }
//     }

//      // reset buttons and poem words
//     clearAll() {
//         const tiles = document.querySelectorAll(".pos-tile, .word")
//         tiles.forEach(tile => {
//             tile.classList.remove("selected")
//             if (tile.id === "clear-tile") tile.classList.add("disabled")
//         })
//     }

//     // highlightSubVerb(buttonId, verbWords, source) {
//     //     const subVerbTiles = document.querySelectorAll(".subverb")
//     //     subVerbTiles.forEach(tile => tile.classList.remove("selected"))
//     //     source.classList.add("selected")
//     //     verbWords.forEach(word => {
//     //         if (!word.classList.contains(buttonId)) word.classList.toggle("selected")
//     //         })
//         // const subVerbTiles = document.querySelectorAll(".subverb")
//         // source.classList.toggle("selected")

//         // // subVerbTiles.forEach(tile => tile.classList.remove("selected"))
//         // // source.classList.add("selected")

//         // // reset words in poem
//         // verbWords.forEach(word => {
//         //     if (!word.classList.contains(buttonId)) {
//         //         word.classList.remove("selected")
//         //     } else {
//         //         word.classList.add("selected")
//         //     }
//         // })
//     // }

//     // resetVerb(source) {
//     //     source.classList.remove("selected")
//     //     const allVerbTiles = Array.from(document.getElementsByClassName("subverb"))
//     //     allVerbTiles.forEach(tile => tile.classList.remove("selected"))

//     //     const allVerbWords = Array.from(document.getElementsByClassName("verb word"))
//     //     allVerbWords.forEach(tile => tile.classList.remove("selected"))
//     // }
// }

// export default PartsOfSpeechView;
