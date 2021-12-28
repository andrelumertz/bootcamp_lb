const modalOverlay = document.querySelector('.modal-overlay')  // pegamdo a class modal-overlay
const cards = document.querySelectorAll('.card')  // pegamdo todos que possuem a class .card

// fazer uma repetição para quando clicar no card ele abri com o video
for (let card of cards) { // para cada cartao de cards
    card.addEventListener("click", function (){ // quando o card for clicado ele execura a funçao click
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active') //adicionando uma class 'active' no modalOverlay
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}` /* por causa do meu click no cartao essa linha esta adicionando o video */ 
    })
}

// fechando o modal 
 document.querySelector(".close-modal").addEventListener("click", function () {  /* Ao clicar no close-modal */ 
     modalOverlay.classList.remove("active")  /* ele remove o modaloverlay */ 
     modalOverlay.querySelector("iframe").src = ""     
 })


 


