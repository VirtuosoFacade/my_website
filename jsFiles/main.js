// spin font

function spin(element) {
    element.classList.toggle("fa-spin-pulse");
}


// curser follow
const trailer = document.getElementById("MsTrailer");


const animateCursor = (move, interacting) => {
    const x = move.clientX - trailer.offsetWidth / 2,
        y = move.clientY - trailer.offsetHeight / 2;


    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 2.1 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}


const getTrailerClass = type => {
    switch(type) {
        case "author" :
            return "fa-solid fa-pen-nib";
        case "js" :
            return "fa-brands fa-square-js" ;
        default:
            return "fa-solid fa-link";
    }
}



window.onmousemove = p => {
    const interactable = p.target.closest(".interactable"),
          interacting = interactable !== null;

    const icon = document.getElementById("trailerIcon");

    animateCursor(p, interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if(interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}