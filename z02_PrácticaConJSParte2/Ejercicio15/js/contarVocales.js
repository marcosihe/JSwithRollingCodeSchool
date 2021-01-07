let texto = prompt('Ingrese un texto: ');
let caracter;
let cantidad_de_vocales = 0;
for (let i = 0; i < texto.length; i++) {
    caracter = texto.substr(i, 1);
    switch (caracter) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            cantidad_de_vocales++;
            break;
        default:
            break;
    }
}
document.write('Texto ingresado: ' + texto);
document.write('<br>Cantidad de vocales que contiene el texto ingresado = ' + cantidad_de_vocales);