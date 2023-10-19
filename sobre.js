window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', { duration: 1000 });
sr.reveal('.area-2', { duration: 2000 });
sr.reveal('.area-3', { duration: 2000 });

/*______________________Menu________________________*/
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')//toggle significa adicione caso tenha, e remova caso n tenha
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

/*__________________*/
