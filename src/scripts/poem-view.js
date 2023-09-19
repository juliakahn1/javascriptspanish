class PoemView {
    constructor(poemEl, poemName, poemMetaData) {
        // poem div from the HTML via index.js
        this.poemEl = poemEl
        // currently-selected poem name based on the nav
        this.poemName = poemName
        // poem from data folder
        this.poem = this.grabPoem(poemName)
        this.metaData = poemMetaData
    }

    grabPoem(poemName)  {
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
                filledLine.addEventListener("mouseenter", this.highlightLine.bind(this))
                filledLine.addEventListener("mouseleave", this.unhighlightLine.bind(this))

                this.poemEl.append(filledLine)
            }
        }
        this.displayMetaData()
    }

    populateLine(jsonLine, ul) {
        const wordCount = Object.keys(jsonLine).length - 1 // exclude "translation" key
        for (let ele = 0; ele < wordCount; ele++) {
            const li = document.createElement("li")
            li.classList.add(jsonLine[ele].part_of_speech)
            li.innerText = jsonLine[ele].word
            ul.append(li)
        }
        return ul
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
        // title
        const h2 = document.createElement("h2")
        h2.append(this.poem.metadata.title)
        this.metaData.append(h2)

        // author
        const h3 = document.createElement("h3")
        h3.append("por " + this.poem.metadata.poet)
        this.metaData.append(h3)
    }

    highlightLine(e) {
        e.preventDefault()
        const line = e.target
        line.classList.toggle("highlighted")
    }

    unhighlightLine(e) {
        e.preventDefault()
        const line = e.target
        line.classList.toggle("highlighted")
    }
}

export default PoemView;
