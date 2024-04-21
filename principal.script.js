document.getElementById('clienteBtn').addEventListener('click', function() {
    // Redirigir a la página principal.html
    window.location.href = 'html.principal';
});

function redirectToWhatsApp(phoneNumber) {
    window.location.href = 'https://wa.me/' + phoneNumber;
}

function redirectToEmail(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;
}
