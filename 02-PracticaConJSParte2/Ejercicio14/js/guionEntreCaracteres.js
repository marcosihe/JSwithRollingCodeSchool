let frase = prompt('Ingrese una frase: ');
let cadena;

for (let i = 0; i < frase.length; i++) {
    if (i == 0) {
        cadena = frase.substr(i, 1);
    } else {
        cadena += '-' + frase.substr(i, 1);
    }
}
document.write(cadena);