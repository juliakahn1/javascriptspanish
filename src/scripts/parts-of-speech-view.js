class PartsOfSpeechView {

    constructor(posEl, poemEl) {
        this.posEl = posEl
        this.poemEl = poemEl
        this.categories = ["verb", "noun", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"] // populate from poem
        this.subVerbs = ["infinitive", "present"] // can get this from current poem
        this.populateWordTiles()
        this.poemEl = poemEl
    }

    // find verbs in poems

    populateWordTiles() {
        const ul = document.createElement("ul")
        ul.classList.add("pos-list")
        let verbTile

        this.categories.forEach(partOfSpeech => {
            const newTile = this.createWordTile(partOfSpeech)
            ul.append(newTile)
            if (newTile.id === "verb") verbTile = newTile
        })

        // this.createSubVerbs(verbTile)
        this.createClearTile(ul)

        this.posEl.append(ul)
        this.posEl.addEventListener("click", this.highlightWords.bind(this))
    }

    createWordTile(partOfSpeech) {
        const li = document.createElement("li")
        li.innerText = partOfSpeech
        li.classList.add("pos-tile")
        li.setAttribute("id", `${partOfSpeech}`)
        return li
    }

    // createSubVerbs(verbTile) {
    //     // const div = document.createElement("div")
    //     this.subVerbs.forEach(subverb => {
    //         const li = document.createElement("li")
    //         li.innerText = subverb
    //         li.classList.add("pos-tile", "subverb")
    //         li.setAttribute("id", `${subverb}`)
    //         verbTile.after(li)
    //     })
        // div.addEventListener("click", this.highlightWords.bind(this))
        // verbTile.after(div)
    // }

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
        const source = e.srcElement

        if (buttonId !== "clear-tile") {
                this.normalHighlight(source, buttonId)
        } else { // if clear is selected
            this.clearAll()
        }
    }

    normalHighlight(source, buttonId) {
        source.classList.toggle("selected")

        const changingWords = document.querySelectorAll(`.${buttonId}`)
        changingWords.forEach(word => word.classList.toggle("selected"))

        const clearTile = document.getElementById("clear-tile")
        const tiles = Array.from(document.querySelectorAll(".pos-tile"))

        if (tiles.some(tile => tile.classList.contains("selected"))) {
            clearTile.classList.remove("disabled")
        } else {
            clearTile.classList.add("disabled")
        }
    }

     // reset buttons and poem words
    clearAll() {
        const tiles = document.querySelectorAll(".pos-tile, .word")
        tiles.forEach(tile => {
            tile.classList.remove("selected")
            if (tile.id === "clear-tile") tile.classList.add("disabled")
        })
    }

    // highlightSubVerb(buttonId, verbWords, source) {
    //     const subVerbTiles = document.querySelectorAll(".subverb")
    //     subVerbTiles.forEach(tile => tile.classList.remove("selected"))
    //     source.classList.add("selected")
    //     verbWords.forEach(word => {
    //         if (!word.classList.contains(buttonId)) word.classList.toggle("selected")
    //         })
        // const subVerbTiles = document.querySelectorAll(".subverb")
        // source.classList.toggle("selected")

        // // subVerbTiles.forEach(tile => tile.classList.remove("selected"))
        // // source.classList.add("selected")

        // // reset words in poem
        // verbWords.forEach(word => {
        //     if (!word.classList.contains(buttonId)) {
        //         word.classList.remove("selected")
        //     } else {
        //         word.classList.add("selected")
        //     }
        // })
    // }

    // resetVerb(source) {
    //     source.classList.remove("selected")
    //     const allVerbTiles = Array.from(document.getElementsByClassName("subverb"))
    //     allVerbTiles.forEach(tile => tile.classList.remove("selected"))

    //     const allVerbWords = Array.from(document.getElementsByClassName("verb word"))
    //     allVerbWords.forEach(tile => tile.classList.remove("selected"))
    // }
}

export default PartsOfSpeechView;
