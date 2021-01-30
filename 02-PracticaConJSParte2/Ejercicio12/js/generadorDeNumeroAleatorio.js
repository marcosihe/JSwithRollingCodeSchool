let limite_inferior = 0;
let limite_superior = 100;
let num_aleatorio;
document.write('<h4>Generación de un número aleatorio entre ' + limite_inferior + ' y ' + (limite_superior - 1) + ':</h4>');
num_aleatorio = parseInt(Math.random() * (limite_superior - limite_inferior) + limite_inferior);
document.write(num_aleatorio);