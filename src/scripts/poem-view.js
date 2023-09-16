class PoemView {
    constructor(poemEl, poemName) {
        // poem div from the HTML via index.js
        this.poemEl = poemEl
        // currently-selected poem name based on the nav
        this.poemName = poemName
        // poem from data folder
        this.poem = this.grabPoem(poemName)

        // this.setUpPoem = this.setUpPoem.bind(this)
        // this.setUpPoem()
    }

    // grab matching poem from data folder
    grabPoem(poemName)  {
        const res = fetch(`./data/${poemName}.json`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw res
                }
            })
            .then(retrieval => {
                this.poem = retrieval
                this.setUpPoem()
            })
            .catch(errorResponse => console.log(errorResponse))
    }

    setUpPoem() {
        // console.log(this.poem)
        const lineCount = Object.keys(this.poem).length

        for (let lineNum = 0; lineNum < lineCount; lineNum++) {
            const ul = document.createElement("ul")
            const filledLine = this.populateLine(this.poem[lineNum], ul)
            filledLine.classList.add(`line-${lineNum}-spanish`)
            this.poemEl.append(filledLine)
        }
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
}

export default PoemView;