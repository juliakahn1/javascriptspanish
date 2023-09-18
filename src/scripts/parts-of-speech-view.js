class PartsOfSpeechView {

    constructor(posEl) {
        this.posEl = posEl
        this.populateWordTags()
    }

    populateWordTags() {
        const categories = ["noun", "verb", "adjective", "adverb", "article", "pronoun", "preposition", "conjunction"]
        const ul = document.createElement("ul")
        ul.classList.add("pos-list")
        categories.forEach(partOfSpeech => {
            ul.append(this.createWordTag(partOfSpeech))
        })
        this.posEl.append(ul)

        this.posEl.addEventListener("click", this.highlightWords)
    }


    createWordTag(partOfSpeech) {
        const li = document.createElement("li")
        li.innerText = partOfSpeech
        li.classList.add("pos-tile")
        li.setAttribute("id", `${partOfSpeech}`)
        return li
    }


    highlightWords(e) {
        e.preventDefault()

        const buttonId = e.target.id
        e.srcElement.classList.toggle("selected")

        const changingWords = document.querySelectorAll(`.${buttonId}`)

        changingWords.forEach(word => {
            word.classList.toggle("selected")
        })
    }

}

export default PartsOfSpeechView;
