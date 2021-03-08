let inputs = {
    productCode: false,
    productName: false,
    category: false,
    serialNumber: false
};

//Función para validar cadena de caracteres
let validateProductName = productName => {
    if (productName.value.trim() === '') {
        productName.className = 'form-control is-invalid';
        inputs.productName = false;
    } else {
        productName.className = 'form-control is-valid';
        inputs.productName = true;
    }
}
//Product Category validation
let validateProductCategory = category => {
    if (category.value.trim() === '') {
        category.className = 'form-control is-invalid';
        inputs.category = false;
    } else {
        category.className = 'form-control is-valid';
        inputs.category = true;
    }
}

//Product code validation
let validateProductCode = productCode => {
    if (productCode.value.trim() != '' && !isNaN(productCode.value)){
        productCode.className = 'form-control is-valid';
        inputs.productCode = true;
    }else{
        productCode.className = 'form-control is-invalid';
        inputs.productCode = false;
    }
}

//Product serial number validation
let validateProductSerialNumber = serialNumber => {
    if (serialNumber.value.trim() != '' &&!isNaN(serialNumber.value)){
        serialNumber.className = 'form-control is-valid';
        inputs.serialNumber = true;
    }else{
        serialNumber.className = 'form-control is-invalid';
        inputs.serialNumber = false;
    }
}
/*I know its the same validation used on product code, but I'll replace it with a regular expresion
to validate 'numbers and letters' so thats the reason why I don't want to unify both of them in a
single function*/

function addFunkopop(e){
    e.preventDefault();
    if (
        inputs.productCode &&
        inputs.serialNumber &&
        inputs.productName &&
        inputs.category
        ) {
        console.log('estoy en true')
        return true;
    }else{
        console.log('estoy en false')
        return false;
    }
}

