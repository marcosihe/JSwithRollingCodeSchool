let control_maximo;
let contador;

do {
    control_maximo = parseInt(prompt("Ingrese un número del 1 al 50:"));
    if (control_maximo < 1 || control_maximo > 50) {
        alert("Número erróneo");
    }
    if (isNaN(control_maximo)) {
        alert("Introduzca un número válido");
    }
} while (isNaN(control_maximo) || control_maximo < 1 || control_maximo > 50);

for (let i = 1; i <= control_maximo; i++) {
    contador = 1;
    for (let j = 0; j < i; j++) {
        document.write(contador);
        contador++;
    }
    document.write("<br>");
}