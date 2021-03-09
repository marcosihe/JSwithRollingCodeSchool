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
        return false;
    } else {
        productName.className = 'form-control is-valid';
        return true;
    }
}
//Product Category validation
let validateProductCategory = category => {
    if (category.value.trim() === '') {
        category.className = 'form-control is-invalid';
        return false;
    } else {
        category.className = 'form-control is-valid';
        return true;
    }
}

//Product code validation
let validateProductCode = productCode => {
    if (productCode.value.trim() != '' && !isNaN(productCode.value)){
        productCode.className = 'form-control is-valid';
        return true;
    }else{
        productCode.className = 'form-control is-invalid';
        return false;
    }
}

//Product serial number validation
let validateProductSerialNumber = serialNumber => {
    if (serialNumber.value.trim() != '' &&!isNaN(serialNumber.value)){
        serialNumber.className = 'form-control is-valid';
        return true;
    }else{
        serialNumber.className = 'form-control is-invalid';
        return false;
    }
}

export function addFunkopop(e){
    e.preventDefault();
    if (
        inputs.productCode &&
        inputs.serialNumber &&
        inputs.productName &&
        inputs.category
        ) {
        return true;
    }else{
        return false;
    }
}