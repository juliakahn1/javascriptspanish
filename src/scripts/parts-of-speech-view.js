class PartsOfSpeechView {

    constructor(posEl) {
        this.posEl = posEl
        this.populateWordTiles()
    }

    populateWordTiles() {
        const categories = ["noun", "verb", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"]
        const ul = document.createElement("ul")
        ul.classList.add("pos-list")
        categories.forEach(partOfSpeech => {
            ul.append(this.createWordTile(partOfSpeech))
        })
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
            changingWords.forEach(word => {
                word.classList.toggle("selected")
            })
            // activate clear button
            const clearTile = document.getElementById("clear-tile")
            clearTile.classList.remove("disabled")
        } else {
            this.clearSelected()
        }
    }

    // reset all classes to ".pos-tile"
    clearSelected() {
        const tiles = document.querySelectorAll(".pos-tile, .word")
        // add deselected to button
        tiles.forEach(tile => {
            tile.classList.remove("selected")
            if (tile.id === "clear-tile") tile.classList.add("disabled")
        })
    }
}

export default PartsOfSpeechView;
