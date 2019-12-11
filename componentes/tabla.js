DIARIO = require('../bbdd/diario');
var evento = 'queixo';

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
   
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var thDia = document.createElement("th");
    var thEventos = document.createElement("th");
    var thPop = document.createElement("th");
    var dia = document.createTextNode('Texto');
    var eventos = document.createTextNode('Eventos');
    var pop = document.createTextNode('Pop');
    var tblBody = document.createElement("tbody");

    tabla.appendChild(thDia);
    thDia.appendChild(dia);
    tabla.appendChild(thEventos);
    thEventos.appendChild(eventos);
    tabla.appendChild(thPop);
    thPop.appendChild(pop);
   
    for (let i = 0; i < DIARIO.length; i++) {
      var hilera = document.createElement("tr");
      tabla.appendChild(hilera);
      for (let j = 0; j < DIARIO[i].eventos.length; j++) {
        var td = document.createElement("td");
        hilera.appendChild(td);
        td_text = document.createTextNode(DIARIO[i].eventos[j]);
        td.appendChild(td_text);
      }
    }
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }
  module.exports = genera_tabla();