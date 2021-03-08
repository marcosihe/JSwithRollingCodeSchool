import {Funko} from './funkoClass.js';
import {generalValidation} from './validations.js';

let funkopopList = [];

//Función  que permite agregar un nuevo funkopop al local storage
window.addFunkopop = (event) => {
    event.preventDefault();

     //Traer los valores del formulario previamente validados
     
     if (generalValidation()) {
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
    console.log(funkopopList);
    }

   
}