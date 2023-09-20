class PoemView {
    constructor(poemEl, poemName, poemMetaData, setupCallback) {
        this.poemEl = poemEl
        this.poemName = poemName
        this.metaData = poemMetaData
        this.posPresent = []
        this.poem = this.grabPoem(poemName, setupCallback)

    }

    grabPoem(poemName, callback) {
        const res = fetch(`./data/data.json`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw res
                }
            })
            .then(retrieval => {
                this.poem = retrieval[poemName]
                this.setUpPoem()
            })
            .catch(errorResponse => console.log(errorResponse))
            .then(() => callback(this))
    }

    setUpPoem() {
        const lineCount = Object.keys(this.poem).length

        for (let lineNum = 0; lineNum < lineCount - 1; lineNum++) { // exclude metadata
            if (this.poem[lineNum] === "break") {
                const br = document.createElement("br")
                br.classList.add(`line-${lineNum}-spanish`)
                this.poemEl.append(br)
            } else {
                const ul = document.createElement("ul")
                const filledLine = this.populateLine(this.poem[lineNum], ul)
                filledLine.classList.add(`${lineNum}`)
                this.addToolTip(filledLine)
                this.poemEl.append(filledLine)
            }
        }
        this.displayMetaData()
    }

    populateLine(jsonLine, ul) {
        const wordCount = Object.keys(jsonLine).length - 1
        for (let ele = 0; ele < wordCount; ele++) {
            const li = document.createElement("li")

            if (jsonLine[ele].verb_subset) {
                li.classList.add(jsonLine[ele].verb_subset)
                this.trackPoS(jsonLine[ele].verb_subset)
            }

            li.classList.add(jsonLine[ele].part_of_speech, "word")
            li.innerText = jsonLine[ele].word
            ul.append(li)

            this.trackPoS(jsonLine[ele].part_of_speech)
        }
        return ul
    }

    trackPoS(pos) {
        if (!this.posPresent.includes(pos)) { this.posPresent.push(pos) }

    }

    getPoSPresent() {
        return this.posPresent
    }

    addToolTip(line) {
        const tooltipEl = document.createElement("span")
        tooltipEl.classList.add("tooltiptext")
        const translation = this.poem[line.classList].translation // should be line num
        tooltipEl.innerText = translation
        line.classList.add("tooltip")
        line.append(tooltipEl)
    }

    displayMetaData() {
        const h2 = document.createElement("h2")
        h2.append(this.poem.metadata.title)
        this.metaData.append(h2)

        const h3 = document.createElement("h3")
        h3.append("por " + this.poem.metadata.poet)
        this.metaData.append(h3)
    }
}

export default PoemView;
