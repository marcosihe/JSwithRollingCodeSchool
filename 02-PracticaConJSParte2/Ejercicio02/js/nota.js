let nota;
do {
    nota = parseInt(prompt("Ingrese la calificación (de 0 a 10): "));
    if (nota < 0 || nota > 10) {
        alert("Número erróneo");
    }
    if (isNaN(nota)) {
        alert("Introduce un número válido");
    }
} while (isNaN(nota) || nota < 0 || nota > 10);

switch (nota) {
    case 0:
    case 1:
    case 2:
        document.write("Muy deficiente")
        break;
    case 3:
    case 4:
        document.write("Insuficiente");
        break;
    case 5:
    case 6:
        document.write("Bien");
        break;
    case 7:
        document.write("Muy bien");
        break;
    case 8:
    case 9:
        document.write("Notable");
        break;
    case 10:
        document.write("Sobresaliente");
        break;
}