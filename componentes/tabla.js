DIARIO = require('../diario');

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

    // Crea las celdas
    // for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      // var hilera = document.createElement("tr");
   
      // for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
      //   var celda = document.createElement("td");
      //   var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      //   celda.appendChild(textoCelda);
      //   hilera.appendChild(celda);
      // }
   
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      // tblBody.appendChild(hilera);
    // }
   
    // posiciona el <tbody> debajo del elemento <table>
    // tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }
  genera_tabla();
  module.exports = genera_tabla();