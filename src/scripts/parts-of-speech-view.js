class PartsOfSpeechView {

    constructor(posEl) {
        this.posEl = posEl
        this.populateWordTags()
    }

    populateWordTags() {
        // should this be a class var?
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

    // install an event listener

    highlightWords(e) {
        e.preventDefault()

        // find the class of button pressed
        const buttonId = e.target.id
        e.srcElement.classList.toggle("selected")
        // console.log(e)

        // change color of button — toggle

        const changingWords = document.querySelectorAll(`.${buttonId}`)

        changingWords.forEach(word => {
            word.classList.toggle("selected")
        })
    }

}

export default PartsOfSpeechView;
