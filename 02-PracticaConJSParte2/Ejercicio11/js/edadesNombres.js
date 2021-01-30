let nombre;
let mayorEdad = 0;
let edad;
let cantidadDeIngresos = 3;
let persona = [];
for (let i = 0; i < cantidadDeIngresos; i++) {
    nombre = prompt('Ingrese el nombre de la persona: ');
    //Control en el ingreso de las edades mediante un bucle 'do while'
    do {
        edad = parseInt(prompt('Ingrese la edad de ' + nombre));
        if (edad < 0) {
            alert('Número erróneo. La edad debe ser mayor o igual a 0.');
        }
        if (isNaN(edad)) {
            alert('Introduzca un número válido.')
        }
    } while (isNaN(edad) || edad < 0);

    if (edad > mayorEdad) {
        mayorEdad = edad;
        persona = [nombre, edad];
    }
}
document.write('La persona de mayor edad es: ' + persona[0]);

/**Si quisiera guardar todos los datos ingresados, podría
 * declarar más variables, y para comparar las edades
 * podría hacer uso de la función
 * 'Math.max()' de la sig forma
 * Math.max(edad1, edad2, edad3);
 */