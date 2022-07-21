export let renderHamburger = () => {
    
    let menu = document.querySelector(".header-menu");
    let hamburger = document.querySelector(".hamburger");

    console.log('hola');

    // Problemas de clases

    if(hamburger) {

        hamburger.addEventListener("click", () => {

            console.log('que tal?');
            
            menu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }
}