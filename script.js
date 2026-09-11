// # Función auxiliar para mostrar mensajes visibles junto a cada formulario.
function mostrarMensaje(formulario, mensaje, tipo) {
    const mensajeElemento = formulario.querySelector('.form-feedback');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.className = `form-feedback ${tipo}`;
}

// # Valida fechas para evitar solicitudes con una fecha anterior al día actual.
function validarFechaFutura(campoFecha) {
    const hoy = new Date();
    const fechaActual = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    const fechaElegida = new Date(`${campoFecha.value}T00:00:00`);
    return campoFecha.value && fechaElegida >= fechaActual;
}

// # Conecta la validación HTML5 con mensajes claros y visibles para la reserva.
function prepararFormularioReserva() {
    const formulario = document.querySelector('#reservationForm');
    if (!formulario) return;

    const campoFecha = formulario.querySelector('#reservationDate');
    campoFecha.min = new Date().toISOString().split('T')[0];

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            mostrarMensaje(formulario, 'Revisa los campos marcados: hay datos incompletos o con un formato incorrecto.', 'error');
            return;
        }

        if (!validarFechaFutura(campoFecha)) {
            mostrarMensaje(formulario, 'La fecha debe ser hoy o un día posterior.', 'error');
            campoFecha.focus();
            return;
        }

        mostrarMensaje(formulario, 'Solicitud recibida. Este prototipo confirma los datos localmente; el restaurante respondería desde su backend.', 'success');
        formulario.reset();
        campoFecha.min = new Date().toISOString().split('T')[0];
    });
}

// # Valida el formulario de eventos, que tiene un propósito diferente a la reserva.
function prepararFormularioEventos() {
    const formulario = document.querySelector('#eventForm');
    if (!formulario) return;

    const campoFecha = formulario.querySelector('#eventDate');
    campoFecha.min = new Date().toISOString().split('T')[0];

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            mostrarMensaje(formulario, 'Completa los datos del evento y verifica sus formatos.', 'error');
            return;
        }

        if (!validarFechaFutura(campoFecha)) {
            mostrarMensaje(formulario, 'La fecha aproximada debe ser hoy o una fecha futura.', 'error');
            campoFecha.focus();
            return;
        }

        mostrarMensaje(formulario, 'Gracias. Recibimos la idea de tu evento y te contactaremos para conversar los detalles.', 'success');
        formulario.reset();
        campoFecha.min = new Date().toISOString().split('T')[0];
    });
}

// # Inicializa únicamente los formularios que existen en la página actual.
document.addEventListener('DOMContentLoaded', function () {
    prepararFormularioReserva();
    prepararFormularioEventos();
});
