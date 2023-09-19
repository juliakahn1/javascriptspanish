class PartsOfSpeechView {

    constructor(posEl, poemEl) {
        this.posEl = posEl
        this.categories = ["verb", "noun", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"] // populate from poem
        this.subVerbs = ["infinitive"] // can get this from current poem
        this.populateWordTiles()
        this.poemEl = poemEl
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

        this.createSubVerbs(verbTile)
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

    createSubVerbs(verbTile) {
        const li = document.createElement("li")
        // const div = document.createElement("div")
        this.subVerbs.forEach(subverb => {
            li.innerText = subverb
            li.classList.add("pos-tile", "subverb", "disabled")
            li.setAttribute("id", `${subverb}`)
            verbTile.after(li)
        })
        // div.addEventListener("click", this.highlightWords.bind(this))
        // verbTile.after(div)
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
        const buttonId = e.target.id
        if (e.srcElement.classList.contains("subverb")) {
            const verbWords = document.querySelectorAll(".verb")
            verbWords.forEach(word => {
                if (word.classList.contains("verb") && !word.classList.contains(buttonId)) {
                    word.classList.remove("selected")
                }
            })
        } else if (buttonId !== "clear-tile") {
            e.srcElement.classList.toggle("selected")
            const changingWords = document.querySelectorAll(`.${buttonId}`)
            changingWords.forEach(word => word.classList.toggle("selected"))

            const clearTile = document.getElementById("clear-tile")
            const tiles = Array.from(document.querySelectorAll(".pos-tile"))

            if (tiles.some(tile => tile.classList.contains("selected"))) {
                clearTile.classList.remove("disabled")
            } else {
                clearTile.classList.add("disabled")
            }
        } else {
            this.clearSelected()
        }
    }

    subVerbHighligher() {

    }

    // reset buttons and poem words
    clearSelected() {
        const tiles = document.querySelectorAll(".pos-tile, .word")
        tiles.forEach(tile => {
            tile.classList.remove("selected")
            if (tile.id === "clear-tile") tile.classList.add("disabled")
        })
    }

    // show subverbs when verb tile is clicked
    expandVerbs(e) {
        e.preventDefault()
        const subVerbTiles = document.querySelectorAll(".subverb")
        subVerbTiles.forEach(tile => {
            tile.classList.remove("selected")
            tile.classList.toggle("disabled")
        })
    }
}

export default PartsOfSpeechView;
