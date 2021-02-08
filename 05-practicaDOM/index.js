let getTime = () => {
    //Obtener la fecha actual (creando un objeto de tipo date)
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();

    //Ahora debo traer los elementos html necesarios
    let paragraphHours = document.querySelector('#hours'),
        paragraphMinutes = document.querySelector('#minutes'),
        paragraphSeconds = document.querySelector('#seconds'),
        paragraphDayWeek = document.querySelector('#dayWeek'),
        paragraphNumberDay = document.querySelector('#numberDay'),
        paragraphMonth = document.querySelector('#month'),
        paragraphYear = document.querySelector('#year');

    //ASignar los valores necesarios
    let week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    paragraphDayWeek.innerHTML = week[currentDate.getDay()];
    paragraphNumberDay.innerHTML = currentDate.getDate();
    paragraphMonth.innerHTML = months[currentlyDate.getMonth()];
    paragraphYear.innerHTML = currentDate.getFullYear();

    //Asigno los valores para la hora
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    paragraphHours.innerHTML = hours;
    paragraphMinutes.innerHTML = minutes;
    paragraphSeconds.innerHTML = seconds;
}
let changeColor = color => {
    let section = document.getElementById('mainContainer');

    switch (color) {
        case 'green':
            section.className = "mt-5 w-75 green";
            break;
        case 'pink':
            section.className = "mt-5 w-75 pink";
            break;
        case 'blue':
            section.className = "mt-5 w-75 blue";
            break;
    }
    
}
window.setInterval(getTime, 1000);


/*
console.log(currentDate.getDay()); //considera a domingo como 0, lunes 1, etc
console.log(currentDate.getMonth()); //considera a enero como 0, feb 1, etc por ser un arreglo
console.log(currentDate.getFullYear());
*/