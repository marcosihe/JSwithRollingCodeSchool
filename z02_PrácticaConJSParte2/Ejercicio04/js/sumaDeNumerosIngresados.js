let suma = 0;
do {
    let numero = parseInt(prompt('Ingrese un número: '));
    if (isNaN(numero)) {
        do {
            alert("Dato incorrecto, por favor intente nuevamente.");
            numero = parseInt(prompt("Ingrese un número: "))
        } while (isNaN(numero));
    }
    suma += numero;
} while (confirm('¿Continuar ingresando números?'));
document.write("La suma de todos los números ingresados es: " + suma);


/**Podría agregar una variable: "contadorDeIntentos"
 * para establecer un límite de intentos
 * dentro del bucle dowhile anidado
 * para escapar del programa
 * luego de varios intentos
 * fallidos de ingreso.
 */