require('../componentes/grafica');

function numerador(evento) {
    return (pulpoTrueEventoTrue(evento) * pulpoFalseEventoFalse(evento)) - (pulpoFalseEventoTrue(evento) - pulpoTrueEventoFalse(evento));
}

function denominador(evento) {
    return Math.sqrt(aparicionEvento(evento) * noTransformacionPulpo() * transformacionPulpo() * noAparicionEvento(evento));
}

function calcularPhi(evento) {
    return numerador(evento) / denominador(evento);
}

function aparicionEvento(evento) {
    var contador = 0;
    for (let i = 0; i < DIARIO.length; i++) {
        for (let j = 0; j < DIARIO[i].eventos.length; j++) {
            if (DIARIO[i].eventos[j] === evento) {
                contador = contador + 1;
            }
        }
    }
    return contador;
}

function noAparicionEvento(evento) {
    return DIARIO.length - aparicionEvento(evento);
}

function transformacionPulpo() {
    var contador = 0;
    for (let i = 0; i < DIARIO.length; i++) {
        for (let j = 0; j < DIARIO[i].eventos.length; j++) {
            if (DIARIO[i].pulpo === true) {
                contador = contador + 1;
            }
        }
    }
    return contador;
}

function noTransformacionPulpo() {
    return DIARIO.length - transformacionPulpo();
}

function pulpoTrueEventoTrue(evento) {
    var contador = 0;
    for (let i = 0; i < DIARIO.length; i++) {
        for (let j = 0; j < DIARIO[i].eventos.length; j++) {
            if (DIARIO[i].eventos[j] === evento && DIARIO[i].pulpo === true) {
                contador = contador + 1;
            }
        }
    }
    return contador;
}

function pulpoFalseEventoTrue(evento) {
    var contador = 0;
    for (let i = 0; i < DIARIO.length; i++) {
        for (let j = 0; j < DIARIO[i].eventos.length; j++) {
            if (DIARIO[i].eventos[j] === evento && DIARIO[i].pulpo === false) {
                contador = contador + 1;
            }
        }
    }
    return contador;
}

function pulpoTrueEventoFalse(evento) {
    var contador = 0;
    for (let i = 0; i < DIARIO.length; i++) {
        var isEvento = true;
        for (let j = 0; j < DIARIO[i].eventos.length; j++) {
            if (DIARIO[i].eventos[j] === evento && DIARIO[i].pulpo === true) {
                isEvento = true;
                break;
            }
            if (DIARIO[i].eventos[j] !== evento && DIARIO[i].pulpo === true) {
                isEvento = false;
            }
        }
        if (isEvento === false) {
            contador = contador + 1; //Más fácil de leer que con sintactic sugar
        }
    }
    return contador;
}

function pulpoFalseEventoFalse(evento) {
    var contador = 0;
    for (let i = 0; i < DIARIO.length; i++) {
        var isEvento = true;
        if (DIARIO[i].pulpo === false) {
            for (let j = 0; j < DIARIO[i].eventos.length; j++) {
                if (DIARIO[i].eventos[j] != evento) {
                    isEvento = false;
                }
                if (DIARIO[i].eventos[j] === evento) {
                    isEvento = true;
                    break;
                }
            }
        }
        if (isEvento === false) {
            contador = contador + 1;
        }
    }
    return contador;
}

console.log('Contador Evento True y Pulpo True: ' + pulpoTrueEventoTrue('queixo'));
console.log('Contador Evento True y Pulpo False: ' + pulpoFalseEventoTrue('queixo'));
console.log('Contador Evento False y Pulpo True: ' + pulpoTrueEventoFalse('queixo'));
console.log('Contador Evento False y Pulpo False: ' + pulpoFalseEventoFalse('queixo'));
console.log('Resultado Numerador: ' + numerador('queixo'));
console.log('Aparicion Evento: ' + aparicionEvento('queixo'));
console.log('No aparicion Evento: ' + noAparicionEvento('queixo'));
console.log('Transformación Pulpo: ' + transformacionPulpo());
console.log('No transformación Pulpo: ' + noTransformacionPulpo());
console.log('Resultado Denominador: ' + denominador('queixo'));
console.log('Resultado Funcion Phi: ' + calcularPhi('queixo'));
