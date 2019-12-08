import { DIARIO } from '../diario.js';

var matrizEventos = new Array(0, 0, 0, 0);

function tablaPara(string, registro) {
    for (let i = 0; i < registro.length - 1; i++) {
        var esEvento1 = false;
        var esEvento2 = false;
        for (let j = 0; j < registro[i].eventos.length; j++) {
            if (registro[i].eventos[j] !== string && registro[i].pulpo === false) {
                esEvento1 = true;
            }
            if (registro[i].eventos[j] === string && registro[i].pulpo === false) {
                matrizEventos[1] = matrizEventos[1] + 1;
            }
            if (registro[i].eventos[j] !== string && registro[i].pulpo === true) {
                esEvento2 = true;
            }
            if (registro[i].eventos[j] === string && registro[i].pulpo === true) {
                matrizEventos[3] = matrizEventos[3] + 1;
            }
        }
        if (esEvento1 === true) {
            matrizEventos[0] = matrizEventos[0] + 1;
        }
        if (esEvento2 === true) {
            matrizEventos[2] = matrizEventos[2] + 1;
        }
    }
    console.log('La matriz del evento ' + string + ' es ' + matrizEventos);
}

tablaPara('queixo', DIARIO);