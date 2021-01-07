let move1;
let move2;
let amountOfPlays = 50;
let sum;
let results = [];
let possibilities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let highest = 1;
let position = [];

let checkMatches = (number) => {
    switch (number) {
        case 2:
            possibilities[0] += 1;
            break;
        case 3:
            possibilities[1] += 1;
            break;
        case 4:
            possibilities[2] += 1;
            break;
        case 5:
            possibilities[3] += 1;
            break;
        case 6:
            possibilities[4] += 1;
            break;
        case 7:
            possibilities[5] += 1;
            break;
        case 8:
            possibilities[6] += 1;
            break;
        case 9:
            possibilities[7] += 1;
            break;
        case 10:
            possibilities[8] += 1;
            break;
        case 11:
            possibilities[9] += 1;
            break;
        case 12:
            possibilities[10] += 1;
            break;
    }
}

let calculateHighestFrecuency = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= highest) {
            position.push(i + 2);
        }
    }
    if (position.length == 1) {
        document.write(`<br>El resultado que se dio con mayor frecuencia fue: ${position[0]}`);
    } else {
        document.write(`<br>Los resultados que se dieron con mayor frecuencia fueron:`);
        for (let i = 0; i < position.length - 1; i++) {
            document.write(` ${position[i]}, `);
        }
        document.write(`y ${position[position.length-1]}.`);
    }
}

for (let i = 0; i < amountOfPlays; i++) {
    move1 = parseInt(Math.random(1, 7) * 6 + 1);
    move2 = parseInt(Math.random(1, 7) * 6 + 1);
    sum = move1 + move2;
    checkMatches(sum);
    results.push(sum);
}

document.write(`Resultados de las ${amountOfPlays} tiradas:<br>(${results})<br>`);
//document.write(`<br>Array de posibilidades: (${possibilities})<br>`);
calculateHighestFrecuency(possibilities);