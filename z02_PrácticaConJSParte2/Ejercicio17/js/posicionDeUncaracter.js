let texto = prompt('Ingrese una frase o texto: ');
let caracter;
let variable_control = 1;
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
            document.write('La primera vocal del texto ingresado se encuentra en la posición ' + (i + 1));
            i = texto.length;
            break;
        default:
            variable_control++;
            break;
    }
}
if (variable_control > texto.length) {
    document.write('Se ingresó un texto sin vocales.');
}