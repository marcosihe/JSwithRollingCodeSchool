let askForANumber = () => {
    do {
        number = parseInt(prompt('Ingrese un número mayor que 0:'));
        if (isNaN(number)) {
            alert('Introduzca un número válido');
        }
        if (number < 0) {
            alert('El número a ingresar debe ser mayor que 0');
        }
    } while (isNaN(number) || number < 0);
    return number;
}

let creatingTable = (number = 1) => {
    let files = 10;
    document.write(`<table border=1 cellpadding=10px><thead><tr><th>Núm</th><th>* ${number}</th></tr></thead>`);
    for (let i = 0; i < files; i++) {
        document.write(`<tbody><tr><td>${i+1}</td><td>${(i+1)*number}</td></tr>`);
    }
    document.write(`</tbody></table>`);
}

let num = askForANumber();
creatingTable(num);