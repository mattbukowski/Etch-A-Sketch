const divsContainer = document.querySelector(".container")
const fragment = document.createDocumentFragment()

function createDivs (){
    let numDivs = +prompt("Enter positive number up to 100");
    for (let i = 0; i < (numDivs * numDivs); i++) {
        const div = document.createElement("div")
        div.classList.add("div")
        div.addEventListener("mousemove", e => {
            div.style.backgroundColor = "white"
        })
        fragment.appendChild(div)
    }
    
    divsContainer.appendChild(fragment) 
}

const btn = document.querySelector("button")
btn.addEventListener("click", e => {
    createDivs ()
})