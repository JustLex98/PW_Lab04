const inputDia = document.getElementById('inputDia');
const btnVerificar = document.getElementById('btnVerificar');
const pResultado = document.getElementById('resultado');

function obtenerRecordatorio(dia) {
    let mensaje;
    switch (dia.toLowerCase()) {
        case 'lunes':
            mensaje = "Debo atender un cliente específico.";
            break;
        case 'martes':
            mensaje = "Visito una agencia fuera de la ciudad.";
            break;
        case 'miercoles':
            mensaje = "Debo llevar a mi hija al ballet (balé).";
            break;
        case 'jueves':
            mensaje = "Debo priorizar entregas de desarrollo.";
            break;
        case 'viernes':
            mensaje = "Debo atender problemas de manera remota.";
            break;
        case 'sabado':
            mensaje = "Debo hacer lo que mi esposa quiera.";
            break;
        default:
            mensaje = "No hay una tarea específica para este día.";
            break;
    }
    return mensaje;
}

function mostrarTarea() {
    const diaIngresado = inputDia.value;

    const recordatorio = obtenerRecordatorio(diaIngresado);

    pResultado.textContent = recordatorio;
}

btnVerificar.addEventListener('click', mostrarTarea);