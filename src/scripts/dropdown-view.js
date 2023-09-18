class DropdownView {
    constructor(dropdownEl) {
        this.dropdownEl = dropdownEl
        this.titles = this.fetchTitles()
    }

    fetchTitles() {
        const res = fetch("./data/data.json")
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw res
                }
            })
            .then(retrieval => {
                this.titles = Object.keys(retrieval)
                this.loadDropdown()
            })
            .catch(errorResponse => console.log(errorResponse))
    }

    loadDropdown() {
        this.titles.forEach(title => {
            const p = document.createElement("p")
            p.innerText = title
            this.dropdownEl.append(p)
        })
    }
}

export default DropdownView;
