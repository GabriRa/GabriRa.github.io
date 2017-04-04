// Seleccionadores
const anclas = document.querySelectorAll(".nav-boton-ancla");
anclas.forEach(function(e){
    e.addEventListener("click", function(evento){
        console.log(document.querySelector(e.getAttribute("id")))
        // let destino = document.querySelector("")
        // document.querySelector(e.getAttribute("id")).scrollIntoView({ behavior: 'smooth' });
        window.scrollTo(500, 0);
    })
});
console.log(anclas)