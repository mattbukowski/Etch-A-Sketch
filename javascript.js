const divsContainer = document.querySelector(".container")
const fragment = document.createDocumentFragment()
divsContainer.style.cssText = `width: 800px; height: 800px;`

function createDivs() {
    let numDivs = +prompt("Enter positive number up to 100");
    if (numDivs > 100) {
        alert ("Give a valid number")
    } else if (numDivs <= 100) {
    for (let j = 0; j < numDivs; j++) {
        const column = document.createElement("div");
        for (let i = 0; i < numDivs; i++) {
            const div = document.createElement("div")
            div.classList.add("div")
            div.addEventListener("mousemove", e => {
                div.style.backgroundColor = "white"
            })
            squareSize = 800 / numDivs;
            div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
            column.appendChild(div)
            fragment.appendChild(column)
        }

        divsContainer.appendChild(fragment)
    }}
}

    const btn = document.querySelector("button")
    btn.addEventListener("click", e => {
        removeDivs()
        createDivs()
    })

    function removeDivs() {
        const divsToRemove = document.querySelector(".container");
        while (divsToRemove.hasChildNodes()) {
            divsToRemove.removeChild(divsToRemove.firstChild);
        }
    }
