class PartsOfSpeechView {

    constructor(verbsEl) {
        this.verbsEl = verbsEl
        this.populateWordTags()
    }

    populateWordTags() {
        // should this be a class var?
        const categories = ["noun", "verb", "adjective", "adverb", "article", "pronoun"]
        const ul = document.createElement("ul")
        ul.classList.add("verb-list")
        categories.forEach(partOfSpeech => {
            ul.append(this.createWordTag(partOfSpeech))
        })
        this.verbsEl.append(ul)
    }


    createWordTag(partOfSpeech) {
        const li = document.createElement("li")
        li.innerText = partOfSpeech
        li.classList.add("pos-tile")
        li.setAttribute("id", `${partOfSpeech}`)
        return li
    }
}

export default PartsOfSpeechView;
