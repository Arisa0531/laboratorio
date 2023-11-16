function validateForm() {
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;
    // Validación simple, solo verifica que los campos no estén vacíos
    if (email.trim() === '' || comments.trim() === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        // Aquí puedes agregar la lógica para enviar el formulario

        // Simulación de envío de datos a través de AJAX 
        var formData = {
            email: email,
            comments: comments
        };
        // Simulación de una solicitud AJAX
        // Aquí deberías enviar formData al servidor en una solicitud POST
        simulateAjaxPost(formData);
    }
}
function resetForm() {
    document.getElementById('contactForm').reset();
}
// Función de simulación de solicitud AJAX (puedes ajustar esto según tus necesidades)
function simulateAjaxPost(formData) {
    setTimeout(function () {
        // En una aplicación real, aquí harías una solicitud AJAX real al servidor
        // para enviar los datos del formulario.
        // Por ahora, simplemente mostraremos una alerta de éxito.
        alert('Formulario enviado con éxito.');
    }, 1000); // Simula una demora de 1 segundo para simular el tiempo de respuesta del servidor
}
