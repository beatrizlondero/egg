document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }
    
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }
    
    alert("¡Formulario enviado con éxito!");
    document.getElementById("formulario").reset(); // Reiniciar el formulario
});