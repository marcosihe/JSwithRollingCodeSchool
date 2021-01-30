let checkLowerAndUpperCases = (text = 'hola mundo') => {
    if (isNaN(text)) {
        switch (text) {
            case text.toUpperCase():
                document.write(`La cadena de texto ingresada solo está formada por mayúsculas.`);
                break;
            case text.toLowerCase():
                document.write(`La cadena de texto ingresada solo está formada por minúsculas.`);
                break;
            default:
                document.write(`La cadena de texto ingresada está formada por mayúsculas y minúsculas.`);
                break;
        }
    } else {
        document.write(`La cadena de texto ingresada contiene solo caracteres numéricos.`);
    }
}

let text = prompt(`Ingrese una cadena de texto: `);
checkLowerAndUpperCases(text);