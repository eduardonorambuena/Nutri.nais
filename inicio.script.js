document.getElementById('clienteBtn').addEventListener('click', function() {
    // Redirigir a la página index.html
    window.location.href = 'index.html';
});

function redirectToWhatsApp(phoneNumber) {
    window.location.href = 'https://wa.me/' + phoneNumber;
}

function redirectToEmail(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;

}
