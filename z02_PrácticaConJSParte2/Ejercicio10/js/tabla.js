let filas;
let columnas;
let cantidad_de_celdas;
do {
    filas = parseInt(prompt("Ingrese el número de filas (número mayor que 0): "));
    if (filas < 0) {
        alert("Número erróneo");
    }
    if (isNaN(filas)) {
        alert("Introduzca un número válido");
    }
} while (isNaN(filas) || filas < 0);

do {
    columnas = parseInt(prompt("Ingrese el número de columnas (número mayor que 0): "));
    if (columnas < 0) {
        alert("Número erróneo");
    }
    if (isNaN(columnas)) {
        alert(`Introduzca un número válido`);
    }
} while (isNaN(columnas) || columnas < 0);

cantidad_de_celdas = filas * columnas;

document.write('<table border=1 cellpadding=10px><thead><tr>');
for (let i = 1; i <= columnas; i++) {
    document.write(`<th>C${i}</th>`);
}

document.write('</tr></thead>');
document.write('<tbody>');
for (let i = 0; i < filas; i++) {
    document.write('<tr>');
    for (let j = 0; j < columnas; j++) {
        document.write(`<td>${cantidad_de_celdas}</td>`);
        cantidad_de_celdas--;
    }
    document.write('</tr>');
}
document.write('</tbody></table>');