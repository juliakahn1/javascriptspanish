class PartsOfSpeechView {

    constructor(posEl, posPresent) {
        this.posEl = posEl
        this.nonSubVerbs = ["verb", "noun", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"]
        this.posPresent = posPresent
        this.state = {}

        this.posPresent.forEach(pos => {
            if (pos !== undefined) {this.state[pos] = false}
        })
        this.populateWordTiles()
    }

    populateWordTiles() {
        this.posEl.replaceChildren([])

        const ul = document.createElement("ul")
        ul.classList.add("pos-list")

        this.posPresent.forEach(partOfSpeech => {
            const newTile = this.createWordTile(partOfSpeech)
            if (newTile.classList.contains("verb")) { newTile.innerText = "all verbs" }
            ul.append(newTile)
        })

        this.createClearTile(ul)
        this.posEl.append(ul)
        this.posEl.addEventListener("click", this.onTileClick.bind(this))
    }

    createWordTile(partOfSpeech) {
        const li = document.createElement("li")
        li.innerText = partOfSpeech
        li.classList.add("pos-tile", `${partOfSpeech}`)
        if (!this.nonSubVerbs.includes(partOfSpeech)) { li.classList.add("subverb") }
        li.setAttribute("pos", `${partOfSpeech}`)
        return li
    }

    createClearTile(ul) {
        const li = document.createElement("li")
        li.classList.add("pos-tile")
        li.setAttribute("id", "clear-tile")
        li.setAttribute("pos", "clear-tile")
        li.innerText = "Clear"
        ul.append(li)
    }

    onTileClick(e) { // button click
        e.preventDefault()
        const clickedTile = e.target.getAttribute("pos")
        // PIE IN SKY: disabled clear button
        this.clearAll()
        this.updateState(clickedTile)
        this.applyState()
    }

    clearAll() {
        this.clearTiles()
        this.clearWords()
    }

    clearTiles() {
        document.querySelectorAll(".pos-tile").forEach(ele => ele.classList.remove("selected"))
    }

    clearWords() {
        document.querySelectorAll(".word").forEach(ele => ele.classList.remove("selected"))
    }

    updateState(clickedTile) {
        // if clickedTile is clear-tile, set all whole hash map to false
        if (clickedTile === "clear-tile") { // FIX AESTHETIC
            Object.keys(this.state).forEach(key => this.state[key] = false)
        } else {
            this.state[clickedTile] = !this.state[clickedTile] // toggle between values
        }

        // verbs :(
    }

    applyState() {
        Object.keys(this.state).forEach(pos => {
            if (this.state[pos]) {
                // highlight tiles
                document.querySelectorAll(`[pos=${pos}]`).forEach(ele => ele.classList.add("selected"))
                // highlight words
                document.querySelectorAll(`.word.${pos}`).forEach(ele => ele.classList.add("selected"))
                // enable clear button
                document.querySelector("#clear-tile").classList.remove("disabled")
            }
        })
    }
}

export default PartsOfSpeechView;
