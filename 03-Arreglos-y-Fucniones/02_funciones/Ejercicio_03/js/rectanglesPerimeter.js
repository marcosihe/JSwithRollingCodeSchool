 let askForSides = () => {
     do {
         side = parseInt(prompt('Ingrese el lado del rectángulo:'));
         if (isNaN(side)) {
             alert('Introduzca un número válido');
         }
         if (side < 0) {
             alert('El número a ingresar debe ser mayor que 0');
         }
     } while (isNaN(side) || side < 0);
     return side;
 }

 let calculatePerimeter = (side1 = 0, side2 = 0) => {
     let perimeter = 2 * (side1 + side2);
     return perimeter;
 }

 let side1 = askForSides();
 let side2 = askForSides();
 let perim = calculatePerimeter(side1, side2);
 document.write(`Lado 1 = ${side1}<br>Lado 2 = ${side2}<br>Perímetro del rectándulo = ${perim}`);