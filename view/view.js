class View{
    constructor(){
        this.showHeaderColor();
        this.toggle();

    }
    showHeaderColor(){
        let logo = document.querySelector(".logo")
        let header = document.querySelector(".header")
        header.addEventListener("mouseover", ()=>{
            logo.setAttribute ("src", "./imagens/logopreto.svg");
            let toggle = document.querySelector(".toggle");
            toggle.classList.add("black");
        });
        header.addEventListener("mouseout", ()=>{
            logo.setAttribute("src", "./imagens/ModaVita.svg");
            let toggle = document.querySelector(".toggle");
            toggle.classList.remove("black");
        });

    }
    toggle(){
        let containerToggle = document.querySelector(".toggleContainer");
        containerToggle.addEventListener("click", ()=>{
            let toggle = document.querySelector(".toggle");
            toggle.classList.toggle("active");
        })

    }
}