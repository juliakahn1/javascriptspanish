class PartsOfSpeechView {

    constructor(posEl, poemEl) {
        this.posEl = posEl
        this.categories = ["verb", "noun", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"] // populate from poem
        this.subVerbs = ["present"] // can get this from current poem
        this.populateWordTiles()
        console.log(poemEl)
    }

    populateWordTiles() {
        const ul = document.createElement("ul")
        ul.classList.add("pos-list")
        let verbTile

        this.categories.forEach(partOfSpeech => {
            const newTile = this.createWordTile(partOfSpeech)
            ul.append(newTile)
            if (newTile.id === "verb") verbTile = newTile
        })

        this.createSubVerbs(ul, verbTile)
        this.createClearTile(ul)

        this.posEl.append(ul)
        this.posEl.addEventListener("click", this.highlightWords.bind(this))
    }

    createWordTile(partOfSpeech) {
        const li = document.createElement("li")
        li.innerText = partOfSpeech
        li.classList.add("pos-tile")
        li.setAttribute("id", `${partOfSpeech}`)
        if (partOfSpeech === "verb") {
            li.addEventListener("click", this.expandVerbs.bind(this))
        }
        return li
    }

    createSubVerbs(ul, verbTile) {
        const li = document.createElement("li")
        this.subVerbs.forEach(subverb => {
            li.innerText = subverb
            li.classList.add("pos-tile", "subverb", "disabled")
            li.setAttribute("id", `${subverb}`)
        })
        verbTile.after(li)
    }

    // hidden unless event listener is triggered
    createClearTile(ul) {
        const li = document.createElement("li")
        li.classList.add("pos-tile", "disabled")
        li.setAttribute("id", "clear-tile")
        li.innerText = "Clear"
        ul.append(li)
    }

    highlightWords(e) {
        e.preventDefault()
        // find the part of speech of button
        const buttonId = e.target.id

        if (buttonId !== "clear-tile") {
            // give button new style
            e.srcElement.classList.toggle("selected")
            // fetch matching words in poem
            const changingWords = document.querySelectorAll(`.${buttonId}`)
            // apply different style
            changingWords.forEach(word => word.classList.toggle("selected"))

            // activate or deactivate clear button
            const clearTile = document.getElementById("clear-tile")
            const tiles = Array.from(document.querySelectorAll(".pos-tile"))

            // behaviors for whether any tile is selected
            if (tiles.some(tile => tile.classList.contains("selected"))) {
                clearTile.classList.remove("disabled")
            } else {
                clearTile.classList.add("disabled")
            }
        } else {
            // clear all
            this.clearSelected()
        }
    }

    // reset buttons and poem words
    clearSelected() {
        const tiles = document.querySelectorAll(".pos-tile, .word")
        tiles.forEach(tile => {
            tile.classList.remove("selected")
            if (tile.id === "clear-tile") tile.classList.add("disabled")
        })
    }

    expandVerbs(e) {
        e.preventDefault()
        // collect all buttons
        const subVerbTiles = document.querySelectorAll(".subverb")
        subVerbTiles.forEach(tile => {
            tile.classList.toggle("disabled")
        })
    }

    // populateVerbs(li) {

    // }
}

export default PartsOfSpeechView;
