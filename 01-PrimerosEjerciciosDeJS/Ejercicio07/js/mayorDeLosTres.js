let num1 = parseInt(prompt('Ingrese el primer número: '));
let num2 = parseInt(prompt('Ingrese el segundo número: '));
let num3 = parseInt(prompt('Ingrese el tercer número: '));

if (num1 >= num2) {
    if (num1 >= num3) {
        document.write(num1 + ' es el mayor.');
    } else {
        document.write(num3 + ' es el mayor.');
    }
} else {
    if (num2 >= num3) {
        document.write(num2 + ' es mayor.');
    } else {
        document.write(num3 + ' es mayor.');
    }
}