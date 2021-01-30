let resultado = ' ';
do {
    let cadena = prompt("Ingrese una frase o palabra: ");
    if (resultado == ' ') {
        resultado += cadena;
    } else {
        resultado += '-' + cadena;
    }
} while (confirm("¿Continuar ingresando cadena?"));
document.write(resultado);