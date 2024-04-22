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

// Inicializar Google Calendar API
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyDZvQt8RrhtZGZGYYRvTg0Ir4N5tSFwG70',
        clientId: '821449083812-touraabs6jpaqcet5c1hkjqe0k6oqi3q.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar'
    }).then(function () {
        // La inicialización es exitosa, puedes llamar a las funciones para interactuar con la API de Google Calendar aquí
        console.log('Google Calendar API initialized');
    }, function (error) {
        console.error('Error initializing Google Calendar API', error);
    });
}
