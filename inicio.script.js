document.getElementById('clienteBtn').addEventListener('click', function() {
    // Redirigir a la página inicio.html
    window.location.href = 'inicio.html';
});

function redirectToWhatsApp(phoneNumber) {
    window.location.href = 'https://wa.me/' + phoneNumber;
}

function redirectToEmail(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;
}
