let max = 500;
let divisor1 = 4;
let divisor2 = 9;
let periodo_linea_horizontal = 5;
document.write("Lista de números del 1 al " + max + " que muestra los múltiplos de " + divisor1 + " y " + divisor2);
for (let i = 1; i < max + 1; i++) {
    document.write("<br>" + i);
    if (i % divisor1 == 0) {
        if (i % divisor2 == 0) {
            document.write(" (Múltiplo de " + divisor1 + " y " + divisor2 + ")");
        } else {
            document.write(" (Múltiplo de " + divisor1 + ")");
        }
    } else if (i % divisor2 == 0) {
        document.write(" (Múltiplo de " + divisor2 + ")");
    }
    if (i % periodo_linea_horizontal == 0) {
        document.write("<hr>");
    }
}

/**Programa que sirve para mostrar los múltipos de las variables
 * "divisor1" y "divisor2" de una lista de números que van
 * desde 1 hasta "max". La variable
 * "periodo_linea_horizontal"
 * indica cada cuanto se
 * dibuja una linea
 * horizontal
 * con '<hr>'
 */