function validarFormulario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Limpiar mensajes de error previos
    errorMessage.innerHTML = "";

    // Validar que los campos no estén vacíos
    if (username.trim() === "" || password.trim() === "") {
        errorMessage.innerHTML = "Por favor, complete todos los campos.";
        return;
    }

    // Validar el formato del nombre de usuario
    if (username.length < 3) {
        errorMessage.innerHTML = "El nombre de usuario debe tener al menos 3 caracteres.";
        return;
    }

    // Validar el formato de la contraseña
    if (password.length < 6) {
        errorMessage.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Guardar la contraseña en el almacenamiento local (no es seguro almacenar contraseñas de esta manera en un entorno de producción)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Puedes redirigir a otra página o realizar acciones adicionales aquí.
    // Por ejemplo, redirigir a una página de inicio después del acceso exitoso.
    alert("Acceso exitoso. Redirigiendo...");
    window.location.href = "http://127.0.0.1:3000/index.html"; // Cambia la URL de redirección según tus necesidades
}
