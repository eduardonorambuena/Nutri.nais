document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulación de autenticación
    if (username === 'admin' && password === 'admin123') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página inicio.html
        window.location.href = './inicio.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

document.getElementById('clienteBtn').addEventListener('click', function() {
    // Redirigir a la página inicio.html
    window.location.href = './inicio.html';
});
