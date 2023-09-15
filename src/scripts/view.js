// sets up poem in the UL

// parses appropriate JSON file for


class View {
    constructor(poemEl, poemName) {
        // this is the poem div from the HTML via index.js
        this.poemEl = poemEl
        // this is the currently-selected poem name based on the nav
        this.poemName = poemName
        this.poem = this.grabPoem(poemName)
    }

    grabPoem(poemName) {
        const res = fetch(`./data/${poemName}.json`)
            .then((response) => response.json())
            .then((json) => json) // does this return?
    }

    setUpPoem() {
        // iterate through each key of this.poem
            // create an empty ul element
                // call populateLine(line, ul), which returns a populated ul with words
            // append to this.poemEl
        //
    }

    populateLine(jsonLine, emptyUL) {
        // iterate through the data line (has line "1", so go through 0 to 1)
            // const li = document.createElement("li")
            // li.classList.add(jsonLine[part_of_speech]) - ignore for now subset
            // li.innerText = jasonLine[word]
            // append to emptyUL
        //
        // return UL
    }
}
