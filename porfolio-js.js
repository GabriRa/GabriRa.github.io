$(document).ready(function(){
    const boton = document.querySelector(".boton-opciones");
    const menu_overlay =document.querySelector(".menu-boton-opciones");
    const botones_movil = document.querySelectorAll(".mobile-boton");
    const lista_movil = document.querySelector(".lista-botones-mobile");
    const items_lista_movil = document.querySelectorAll("mobile-boton");
    var cajas = document.querySelectorAll(".caja-informacion");
    var flag = false;

    //Function that adds the class to make an interactive manu for mobile users
    function clases(){
        menu_overlay.classList.toggle("menu-boton-opciones-pulsado");
        botones_movil.forEach((boton)=>{
            boton.classList.toggle("mobile-boton-pulsado");
        });
    }

    // Button for movile devices
    boton.addEventListener("click", function(){
        clases();
        flag= !flag;
    });

    //While the menu for mobiles is displayed
    menu_overlay.addEventListener("click", function(e){
        if (menu_overlay.classList.length<2 || flag == false) return;
        if (e.target.dataset.click !== "si"){
            clases();
            flag=false;
        }
    });

    // Jquery for making the effect of a smooth scroll
    const nav_altura= $("nav").outerHeight();
    var ancho_pantalla = window.innerWidth;
    
    //function for a smoothScroll
    function smoothScroll(e){
        let restar = 0;
        if(window.innerWidth>800) restar = 40;
        var posicion_ancla = $(this).attr("href");
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(posicion_ancla).offset().top - restar
        }, 1000);
    }

    // function debounce grabed from internet GitHub: @nmsdvid
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    }
    
    // Function that calculates if the element is on the screen
    function activador(){
        cajas.forEach((caja)=>{
            var pasado = caja.offsetTop-(window.scrollY + window.innerHeight);
            if (pasado< -120){
                caja.classList.add("mostrar-cj");
            } else{
                caja.classList.remove("mostrar-cj")
            }
        })
    };
    
    // Function with debounce
    var slideIn = debounce(activador, 10); 
    //Event listener for scroll
    window.addEventListener("scroll", slideIn)
    //Butons with a smooth scroll
    $(".nav-boton-ancla, .mb-boton-ancla").click(smoothScroll);
});

