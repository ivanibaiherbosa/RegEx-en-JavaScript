function validarISBN() {

let isbn = prompt("introduce un ISBN");

let regex = /^(978|979)\d{10}$/;

if (regex.test(isbn)) {
    document.getElementById("resultado").innerText = "el isbn \"" + isbn + "\" es valido ";
} else {
    document.getElementById("resultado").innerText = "el isbn \"" + isbn + "\" no es valido";
}


}