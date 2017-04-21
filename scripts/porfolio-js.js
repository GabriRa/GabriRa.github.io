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

    // Fuction effect for the nav bar
    function efectos(){
        var efectoNav1 = document.querySelector("#boton1");
        var efectoNav2 = document.querySelector("#boton2");
        var efectoNav3 = document.querySelector("#boton3");
        var efectoNav4 = document.querySelector("#boton4");
        var alturaPantalla = window.scrollY+window.innerHeight - (efectoNav1.scrollHeight/2);
        if (alturaPantalla < efectoNav2.scrollHeight){
            document.querySelector(".boton1").classList.add("efectoNav");
            document.querySelector(".boton2").classList.remove("efectoNav");
            document.querySelector(".boton3").classList.remove("efectoNav");
            document.querySelector(".boton4").classList.remove("efectoNav");
        } else if (alturaPantalla > efectoNav2.offsetTop && alturaPantalla < efectoNav3.offsetTop){
            document.querySelector(".boton1").classList.remove("efectoNav");
            document.querySelector(".boton2").classList.add("efectoNav");
            document.querySelector(".boton3").classList.remove("efectoNav");
            document.querySelector(".boton4").classList.remove("efectoNav");
        } else if (alturaPantalla > efectoNav3.offsetTop && alturaPantalla < efectoNav4.offsetTop){
            document.querySelector(".boton1").classList.remove("efectoNav");
            document.querySelector(".boton2").classList.remove("efectoNav");
            document.querySelector(".boton3").classList.add("efectoNav");
            document.querySelector(".boton4").classList.remove("efectoNav");
        } else if (alturaPantalla > efectoNav4.offsetTop){
            document.querySelector(".boton1").classList.remove("efectoNav");
            document.querySelector(".boton2").classList.remove("efectoNav");
            document.querySelector(".boton3").classList.remove("efectoNav");
            document.querySelector(".boton4").classList.add("efectoNav");
        }
    }
    
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

    // function debounce grabed from GitHub: @nmsdvid
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
    var activarEfectos= debounce(efectos, 20);
    //Event listener for scroll
    window.addEventListener("scroll", slideIn);
    //Event for effects on the nav bar
    window.addEventListener("scroll", activarEfectos);
    //Butons with a smooth scroll
    $(".nav-boton-ancla, .mb-boton-ancla").click(smoothScroll);
});

