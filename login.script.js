document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulación de autenticación
    if (username === 'admin' && password === 'admin123') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página principal.html
        window.location.href = 'html.principal';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
