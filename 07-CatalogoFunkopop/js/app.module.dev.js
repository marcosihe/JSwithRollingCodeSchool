//import { Funko } from './funkoClass.dev';
class Funko{
    constructor(productCode, productName, serialNumber, category, description, image){
        this.productCode = productCode;
        this.productName = productName;
        this.serialNumber = serialNumber;
        this.category = category;
        this.description = description;
        this.image = image;
    }
}
// VALIDACIONES
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

// ARREGLO PARA GUARDAR LOS DATOS DEL NUEVO PRODUCTO
let funkopopList = [];

//Función  que permite agregar un nuevo funkopop al local storage
window.addFunkopop = (event) => {
    event.preventDefault();
    if (
        inputs.productCode &&
        inputs.serialNumber &&
        inputs.productName &&
        inputs.category
    ) {
    let productCode = document.querySelector('#productCode').value;
    let productName = document.querySelector('#productName').value;
    let serialNumber = document.querySelector('#serialNumber').value;
    let category = document.querySelector('#category').value;
    let description = document.querySelector('#description').value;
    let image = document.querySelector('#image').value;
        

    let newFunko = new Funko(
        productCode,
        productName,
        serialNumber,
        category,
        description,
        image);

    funkopopList.push(newFunko);
    //console.log(funkopopList);

    //Guardo la lista 'funkopopList' en el local storage
    localStorage.setItem("funkopopListKey", JSON.stringify(funkopopList));
    }
}
