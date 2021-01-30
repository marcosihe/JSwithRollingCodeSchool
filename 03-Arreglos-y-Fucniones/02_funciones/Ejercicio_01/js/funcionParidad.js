let askForAnInteger = () => {
    do {
        number = parseInt(prompt("Ingrese un número entero: "));
        if (isNaN(number)) {
            alert("Introduzca un número válido");
        }
    } while (isNaN(number));
    return number;
}

let checkParity = (number = 0) => {
    switch (number % 2) {
        case 0:
            return true;
            break;
        default:
            return false;
            break;
    }
}

let num;
let parity = (number = 0) => {
    num = askForAnInteger();
    let booleanValue = checkParity(num);
    if (booleanValue) {
        return document.write(`El número ingresado, ${num}, es par.`);
    } else {
        return document.write(`El número ingresado, ${num}, es impar.`);
    }
}

parity();