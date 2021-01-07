let control_maximo;
do {
    control_maximo = parseInt(prompt("Ingrese un número del 1 al 50:"));
    if (control_maximo < 1 || control_maximo > 50) {
        alert("Número erróneo");
    }
    if (isNaN(control_maximo)) {
        alert("Introduzca un número válido");
    }
} while (isNaN(control_maximo) || control_maximo < 1 || control_maximo > 50);
for (let i = control_maximo; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write(i);
    }
    document.write("<br>");
}