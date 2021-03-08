
//Función para validar cadena de caracteres
function charValidation(input) {
    if (input.value.trim() === '') {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

//Product code validation
function validateProductCode(productCode) {
    if (productCode.value.trim() != '' && !isNaN(productCode.value)){
        productCode.className = 'form-control is-valid';
        return true;
    }else{
        productCode.className = 'form-control is-invalid';
        return false;
    }
}

//Product name validation
function validateProductName(productName) {charValidation(productName)}

//Product Category validation
function validateProductCategory(category) {charValidation(category)}

//Product serial number validation
function validateProductSerialNumber(serialNumber) {
    if (serialNumber.value.trim() != '' &&!isNaN(serialNumber.value)){
        serialNumber.className = 'form-control is-valid';
        return true;
    }else{
        serialNumber.className = 'form-control is-invalid';
        return false;
    }
}

/*I know its the same validation used on product code, but I'll replace it with a regular expresion
to validate 'numbers and letters' so thats the reason why I don't want to unify both of them in a
single function*/
/*
export function addFunkopop(e){
    e.preventDefault();
    if (
        validateProductCode(document.querySelector('#productCode')) &&
        validateProductName(document.querySelector('#productName')) &&
        validateProductCategory(document.querySelector('#category')) &&
        validateProductSerialNumber(document.querySelector('#serialNumber'))
    ) {
        return true;
    }else{
        return false;
    }
}

export function funcionDePrueba() {
    if (validateProductCode(document.querySelector('#productCode'))) {
        return true;
    }else{
        return false;
    }
}
*/