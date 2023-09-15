class View {
    constructor(poemEl, poemName) {
        // poem div from the HTML via index.js
        this.poemEl = poemEl
        // currently-selected poem name based on the nav
        this.poemName = poemName
        // poem from data folder
        const setUp = this.setUpPoem.bind(this)
        setUp()
    }

    // grab matching poem from data folder
    grabPoem(poemName) {
        const res = fetch(`./data/${poemName}.json`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw res
                }
            })
            .then(retrieval => this.poem = retrieval)
            .catch(errorResponse => console.log(errorResponse))
    }

    setUpPoem() {
        console.log(this.poem)

        // const lineCount = Object.keys(this.poem).length

        // for (let lineNum = 0; lineNum < lineCount; lineNum++) {
        //     const ul = document.createElement("ul")
        //     const filledLine = this.populateLine(this.poem[lineNum], ul)
        //     filledLine.classList.add(`line-${lineNum}`)
        //     this.poemEl.append(filledLine)
        // }
    }

    populateLine(jsonLine, ul) {
        const wordCount = Object.keys(jsonLine).length - 1 // exclude "translation" key
        for (let ele = 0; ele < wordCount; ele++) {
            const li = document.createElement("li")
            li.innerText = jsonLine["word"] // returns string
            li.classList.add(jsonLine["part_of_speech"]) // returns string

            ul.append(li)
            if (ele !== wordCount - 1) {
                const space = document.createElement("li")
                space.innerText = " "
                ul.append(space) // spacing if not last word
            }
        }
        return ul
    }
}

export default View;
