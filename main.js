//configurazione animazioni con lo scroll della pagina
let sections = document.querySelectorAll(".ms_animation");

//richiamo la funzione dedicata (scrollanimation) sia all'evento di scroll che all'avvio/refresh della pagina
scrollAnimation();

window.addEventListener("scroll", scrollAnimation);

//funzione che gestisce l'animazione di scroll delle sezioni in base all'altezza della finestra del browser
function scrollAnimation(){

    //altezza della finestra
    let innerHeight = window.innerHeight;

    sections.forEach(section => {

        //coordinata top della singola sezione
        let sectionHeight = section.getBoundingClientRect().top;

        //se l'altezza della finestra supera la cima, allora aggiungo la classe che fa scattare l'animazione
        if(sectionHeight < innerHeight - 100){
            section.classList.add("ms_animating");    
        }
    })
}