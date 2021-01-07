let frase = prompt("Ingrese una frase");
document.write("<h4>Frase ingresada: " + frase + "</h4>");
document.write("<br>La frase ingresada contiene las siguientes vocales: ");

let letra;
let a = 0;
let b = 1;

while (a <= frase.length) {
    letra = frase.substring(a, b);

    switch (letra) {
        case 'a':
            document.write(letra + ' ');
            break;
        case 'A':
            document.write(letra + ' ');
            break;
        case 'e':
            document.write(letra + ' ');
            break;
        case 'E':
            document.write(letra + ' ');
            break;
        case 'i':
            document.write(letra + ' ');
            break;
        case 'I':
            document.write(letra + ' ');
            break;
        case 'o':
            document.write(letra + ' ');
            break;
        case 'O':
            document.write(letra + ' ');
            break;
        case 'u':
            document.write(letra + ' ');
            break;
        case 'U':
            document.write(letra + ' ');
            break;
    }
    a++;
    b++;
}