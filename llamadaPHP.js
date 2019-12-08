export var diario;
function AJAX() {
    const http = new XMLHttpRequest();
    const url = 'conexionBBDD.php';
    
    http.open("GET", url);
    http.onreadystatechange = function recogerDiario() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
            console.log('Response: ', this.responseText);
            // diario.push(this.responseText);
            diario = JSON.parse(this.responseText);
            console.log(diario);
        }
        return diario;
    }
    http.send();
}

AJAX();

// const url = 'conexionBBDD.php';
// function getData() {
//     let diario = [];
//     fetch(url).then(function(response) {
//         response.json().then(function(json){
//             for (let i = 0; i < json.length; i++) {
//                 diario.push(json[i]);
//             }
//         })
//     })
//     console.log('Diario: ', diario.eventos);
//     return diario;
// }
// getData();