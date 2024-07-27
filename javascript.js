const divsContainer = document.querySelector(".container")
const fragment = document.createDocumentFragment()

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    div.classList.add("div")
    div.textContent = "hello"
    div.addEventListener("mouseenter", e => {
        div.style.backgroundColor = "black"
    })
    fragment.appendChild(div)
}

divsContainer.appendChild(fragment)