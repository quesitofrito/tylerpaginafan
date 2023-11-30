document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-900px";
    background_menu.style.display = "none";
}




function changeMenuBackground() {
    const menu = document.getElementById("menu");
  
    if (window.scrollY > 0) {
      menu.classList.add("scrolling");
    } else {
      menu.classList.remove("scrolling"); 
    }
  }
  
  window.addEventListener("scroll", changeMenuBackground);

  changeMenuBackground();























document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

 //------------------------------VIDEO -------------------------

  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("miVideo");
    
    video.volume = 0.1; // Establece el volumen al 40% (0.4 * 100%)
  });
//--------------------//

