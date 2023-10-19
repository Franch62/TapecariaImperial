const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')//toggle significa adicione caso tenha, e remova caso n tenha
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


/*_____*/


document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    {
        document.querySelector('.popup-image').style.display = 'none';
    }
}

//123123123

function messageMkt(sendMessage) {

    let btnSendMessage = document.getElementById('sendMessage');
    btnSendMessage.click = window.location.href = "http://127.0.0.1:5501/index.html"
}
function redirectAlert(alertIndex) {
    if (btnSendMessage.click = window.location.href = "http://127.0.0.1:5501/index.html") {

    }
}