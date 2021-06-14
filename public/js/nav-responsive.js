const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const respNavLinks = document.querySelectorAll(".nav-links li");

function navSlide() {
        
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        respNavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            } 
            
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

function pageReload(){
    nav.classList.toggle("nav-active");
}


navSlide();


