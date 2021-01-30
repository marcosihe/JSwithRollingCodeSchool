let cities = [];
let position_a = 0;
let position_b = 2;
let cityToReplace;

let loadCities = () => {
    do {
        let cityName = prompt('Nombre de la ciudad: ');
        if (cityName != 0) {
            cities.push(cityName);
        }
    } while (confirm('Desea continuar ingresando ciudades?'));
}

let showElement = (position) => {
    document.write(`<br>Elemento de la ${position + 1}º posición<br>`);
    document.write(cities[position] + '<br>');
}

let showCities = (message) => {
    document.write(`${message}<br>`);
    for (let i = 0; i < cities.length; i++) {
        document.write(cities[i] + '<br>');
    }
}

loadCities();
showCities('<h4>Cidades ingresadas:</h4>');
document.write(`<br>Cantidad de ciudades ingresadas: ${cities.length}<br>`);
showElement(position_a, );
showElement(position_b);
showElement(cities.length - 1);
cities.push('Paris');
showCities('<br>Agregando la ciudad de Paris a la última posición del arreglo:<br>');
showElement(1);
cityToReplace = cities[1];
cities.splice(1, 1, 'Barcelona');
showCities(`<br>Reemplanzado ${cityToReplace} por Barcelona:<br>`);