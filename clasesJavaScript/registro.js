import { DIARIO } from '../diario.js';

function contieneEventos(evento, dia) {
    for (let i = 0; i < DIARIO[dia].eventos.length; i++) {
        if (evento === DIARIO[dia].eventos[i]) {
            return true;
        } else {
            return false;
        }
    }
}

function mostrarRegistro(dia) {
    var cantidadEventos = DIARIO[dia].eventos.length;
    for (let j = 0; j < cantidadEventos; j++) {
        console.log('Mariano hizo: ' + DIARIO[dia].eventos[j]);
    }
    if (DIARIO[dia].pulpo === true) {
        console.log('Mariano se transformó en pulpo');
    } else {
        console.log('Mariano no se transformó en pulpo');
    }
}

console.log('Contiene el evento: ' + contieneEventos('queixo', 6));
console.log(mostrarRegistro(6));
