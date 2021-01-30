let edad;
let edad_limite_inferior = 17;
do {
    edad = parseInt(prompt("Ingrese su edad: "));
} while (isNaN(edad));

if (edad > edad_limite_inferior) {
    document.write("Puede conducir.");
} else {
    document.write("No puede conducir.");
}