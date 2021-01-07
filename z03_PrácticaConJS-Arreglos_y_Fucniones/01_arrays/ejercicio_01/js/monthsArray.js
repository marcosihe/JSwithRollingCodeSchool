let months_array = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let showMonths = () => {
    for (let i = 0; i < months_array.length; i++) {
        document.write(months_array[i] + '<br>');
    }
}

showMonths();