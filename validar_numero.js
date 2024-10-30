function validarNumero() {


    let numero = prompt("introduce un número");

    const regex = /^-?\d+$/;

    if (regex.test(numero)) {
        document.getElementById("resultado").innerText = "El número \"" + numero + "\" es un numero entero";
    } else {
        document.getElementById("resultado").innerText ="El número \"" + numero + "\" no es un numero entero" ;

    }

}