//General validation
export function generalValidation(){
    if (validateProductCode(
        validateProductCode() &&
        validateProductName() &&
        validateProductSerialNumber() &&
        validateProductCategory()
    )) {
        return true;
    }else{
        return false;
   }
}

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
let validateProductCode = (productCode) => {
    if (productCode.value.trim() != '' &&!isNaN(productCode.value)){
        productCode.className = 'form-control is-valid';
        return true;
    }else{
        productCode.className = 'form-control is-invalid';
        return false;
    }
}

//Product name validation
let validateProductName = (productName) => charValidation(productName);

//Product Category validation
let validateProductCategory =  (category) => charValidation(category);


//Product serial number validation
/*I know its the same validation used on product code, but I'll replace it with a regular expresion
to validate 'numbers and letters' so thats the reason why I don't want to unify both of them in a
single function*/
let validateProductSerialNumber = (serialNumber) => {
    if (productCode.value.trim() != '' &&!isNaN(productCode.value)){
        productCode.className = 'form-control is-valid';
        return true;
    }else{
        productCode.className = 'form-control is-invalid';
        return false;
    }
}