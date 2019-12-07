export var diario = [];
function AJAX() {
    const http = new XMLHttpRequest();
    const url = 'conexionBBDD.php';
    
    http.open("GET", url);
    http.onreadystatechange = function recogerDiario() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
            diario.push(JSON.parse(this.responseText));
        }
    }
    
    http.send();
}

AJAX();