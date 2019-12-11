import { DIARIO } from '../bbdd/diario';

var registro = new Object();
registro.eventos = ['queixo', 'leer Marca', 'comer Paella', 'programar', 'siesta'];
registro.pulpo = true;

function incluirRegistro(registro) {
    DIARIO.push(registro);
}

function mostrarDIARIO() {
    console.log(DIARIO);
}

console.log(incluirRegistro());
console.log(mostrarDIARIO());
