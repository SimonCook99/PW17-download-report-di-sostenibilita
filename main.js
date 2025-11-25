//lista di tutti gli elementi della pagina da animare (classe ms_animation)
let sections = document.querySelectorAll(".ms_animation");


//la funzione sarà richiamata sia al caricamento iniziale della pagina, sia all'evento di scroll
scrollAnimation();

window.addEventListener("scroll", scrollAnimation);


//funzione che gestisce l'animazione di scroll delle sezioni in base all'altezza della finestra del browser
function scrollAnimation(){

    //altezza della finestra
    let innerHeight = window.innerHeight;
    

    sections.forEach(section => {

        //coordinata top della singola sezione rispetto alla viewport (il valore cambia dinamicamente)
        let sectionHeight = section.getBoundingClientRect().top;

        //quando la coordinata top dell'elemento diventa sufficientemente visibile 
        //rispetto all'altezza della finestra, allora aggiungo la classe che fa scattare l'animazione
        if(sectionHeight < innerHeight - 100){
            section.classList.add("ms_animating");    
        }
    })
}