let texto = prompt('Ingrese una frase: ');
let cadena_invertida = '';
for (let i = 1; i <= texto.length; i++) {
    cadena_invertida += texto.substr(-i, 1);

}
document.write(cadena_invertida);