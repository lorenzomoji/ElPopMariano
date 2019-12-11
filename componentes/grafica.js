DIARIO = require('../bbdd/diario');


function generaGrafica() {
    
    var arrayComprobante = [];
    
    var body = document.getElementsByTagName("body")[0];
    
    var ul = document.createElement("ul");
    
    for (let i = 0; i < DIARIO.length; i++) {
        for (let j = 0; j < DIARIO[i].eventos.length; j++) {
            if (!arrayComprobante.includes(DIARIO[i].eventos[j])) {
                var li = document.createElement("li");
                arrayComprobante.push(DIARIO[i].eventos[j]);
                var li_text = document.createTextNode(DIARIO[i].eventos[j]);
            }
            ul.appendChild(li);
            li.appendChild(li_text);
        }
        
    }
    
    body.appendChild(ul);
}

module.exports = generaGrafica();