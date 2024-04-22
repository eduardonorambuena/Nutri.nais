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

//calendario//

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista inicial del calendario
        selectable: true, // Permite la selección de fechas
        events: [
            // Ejemplos de eventos
            { title: 'Reunión', start: '2024-04-23T10:00:00', end: '2024-04-23T12:00:00' },
            { title: 'Cita', start: '2024-04-25T14:00:00', end: '2024-04-25T16:00:00' }
        ],
        select: function(info) {
            // Manejar la selección de fechas aquí
            alert('Fecha seleccionada: ' + info.startStr + ' hasta ' + info.endStr);
        }
    });

    calendar.render();
});
