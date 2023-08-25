let logo = document.querySelector(".logo")
let header = document.querySelector(".header")

header.addEventListener("mouseover", ()=>{
    logo.setAttribute ("src", "./imagens/logopreto.svg")
});

header.addEventListener("mouseout", ()=>{
    logo.setAttribute("src", "./imagens/ModaVita.svg")
})

