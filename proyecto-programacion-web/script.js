/**
 * Muestra el resultado de la validación dentro del formulario correspondiente.
 * @param {HTMLFormElement} formulario Formulario que contiene el mensaje.
 * @param {string} mensaje Texto que verá la persona usuaria.
 * @param {'error'|'success'} tipo Clase visual que representa el resultado.
 */
function mostrarMensaje(formulario, mensaje, tipo) {
    const mensajeElemento = formulario.querySelector('.form-feedback');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.className = `form-feedback ${tipo}`;
}

/**
 * Comprueba que una fecha exista y no sea anterior al día actual.
 * @param {HTMLInputElement} campoFecha Campo de fecha que se va a revisar.
 * @returns {boolean} true cuando la fecha es válida para una solicitud.
 */
function validarFechaFutura(campoFecha) {
    const hoy = new Date();
    const fechaActual = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    const fechaElegida = new Date(`${campoFecha.value}T00:00:00`);
    return campoFecha.value && fechaElegida >= fechaActual;
}

/**
 * Configura la reserva de mesa cuando la página incluye ese formulario.
 * La validación nativa se conserva y se complementa con la regla de fecha futura.
 * @returns {void}
 */
function prepararFormularioReserva() {
    const formulario = document.querySelector('#reservationForm');
    if (!formulario) return;

    const campoFecha = formulario.querySelector('#reservationDate');
    campoFecha.min = new Date().toISOString().split('T')[0];

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        // Primero se aplican las restricciones declaradas en los atributos HTML5.
        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            mostrarMensaje(formulario, 'Revisa los campos marcados: hay datos incompletos o con un formato incorrecto.', 'error');
            return;
        }

        // Después se valida la regla que HTML5 no puede expresar por sí solo.
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

/**
 * Configura la solicitud de eventos y reutiliza las reglas comunes de validación.
 * @returns {void}
 */
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

/**
 * Punto de entrada compartido por las tres páginas del sitio.
 * Cada inicializador comprueba si su formulario existe antes de registrarse.
 * @returns {void}
 */
document.addEventListener('DOMContentLoaded', function () {
    prepararFormularioReserva();
    prepararFormularioEventos();
});
