function validarMatricula() {

let matricula = prompt("Introduce una matrícula");

const regex = /^\d{4}[a-zA-Z]{3}/;  

    if (regex.test(matricula)) {
        document.getElementById("resultado").innerText = "la matrícula \"" + matricula + "\" es valida"; 
    } else {
        document.getElementById("resultado").innerText = "la matricula \"" + matricula + "\" no es válida";
    }

}