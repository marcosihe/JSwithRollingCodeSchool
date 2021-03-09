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
//Fin de validaciones

// Arreglo para guardar los datos del nuevo producto
let funkopopList = [];

const productModal = new bootstrap.Modal(
    document.querySelector("#productModal")
  );
  // modificarFunkopop=true estoy modificando un producto, cuando sea false estoy agregando un nuevo funkopop.
  let modifyFunkopop = false; 
  
  let addButton = document.querySelector("#addButton");
  
  addButton.addEventListener("click", () => {
      resetForm();
      productModal.show();
  });

  dataRead();

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

    //Limpiar formulario
    resetForm();

    // mostrar mensaje al usuario de que el producto fue creado
    Swal.fire("Nuevo Funkopop", "El funkopop se agrego correctamente", "success");

    //Llamar a la función leer datos
    dataRead();
    }
}

//  Función limpiar formulario
let resetForm = () => {
    document.querySelector('#funkopopForm').reset();
}

//Función de lectura de datos
function dataRead() {
    if (localStorage.length > 0) {
        //Trae los datos del localStorage a un arreglo auxiliar
        let _funkopopList = JSON.parse(localStorage.getItem("FunkopopListKey"));
        //console.log(_funkopopList);
        if (funkopopList.length === 0) {
            funkopopList = _funkopopList;
        }

        drawTable(_funkopopList);
    }
}

function drawTable(_funkopopList) {
    let funkoTable = document.querySelector('#funkopopTable');
    // Paso neceario: borrado de filas
    funkoTable.innerHTML = '';
    let funkoRows;
    //Debo recorrer todo el arreglo
    for (let i in _funkopopList) {
            rows = `<tr>
            <th scope="row">${_funkopopList[i].productCode}</th>
            <td>${_funkopopList[i].productName}</td>
            <td>${_funkopopList[i].serialNumber}</td>
            <td>${_funkopopList[i].category}</td>
            <td>${_funkopopList[i].description}</td>
            <td>${_funkopopList[i].image}</td>
            <td>
                <button class="btn btn-warning" onclick="prepareFunkopop(this)" id="${_funkopopList[i].productCode}">Editar</button>
                <button class="btn btn-danger" onclick="deleteFunkopop(this)" id="${_funkopopList[i].productCode}">Borrar</button>            </td>
            </tr>`;
            //Agregar la fila al padre
            funkoTable.innerHTML += funkoRows;
        }
}

window.deleteFunkopop = _button => {
    //console.log(_button.id);
    Swal.fire({
        title: 'Esta segur@ de eliminar el Funkopop',
        text: "No puedes volver atras luego de eliminar un funkopop",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText:'Cancelar',
      }).then((result) => {
          if (result.isConfirmed) {
            let filteredFunkopop = funkopopList.filter(
                product => product.productCode != _button.id
              );
              console.log(filteredFunkopop);
              // igualar los arreglos
              funkopopList = filteredFunkopop;
              // guardar los datos en Localstorage
              localStorage.setItem("FunkopopListKey", JSON.stringify(funkopopList));
              // llamar a la funcion leer datos
              dataRead();
        
              Swal.fire(
                "Producto borrado",
                "El funkopop seleccionado fue eliminado",
                "success"
              );
          }
      });
};


window.prepareFunkopop = _button => {
    // buscar el funkopop seleccionado
    let findedFunkopop = funkopopList.find(product => {return product.productCode === _button.id});
  
    console.log(findedFunkopop);
    // completar con los datos todos inputs de mi formulario
    document.querySelector('#productCode').value = findedFunkopop.productCode;
    document.querySelector('#productName').value = findedFunkopop.productName;
    document.querySelector('#serialNumber').value = findedFunkopop.serialNumber;
    document.querySelector('#category').value = findedFunkopop.category;
    document.querySelector('#description').value = findedFunkopop.description;
    document.querySelector('#image').value = findedFunkopop.image;
    //Quiero modificar mi funkopop
    modifyFunkopop = true;
    // mostrar ventana modal
    productModal.show();
  }

  window.saveData = function (event) {
    event.preventDefault();
    console.log("desde la funcion guardar Datos");
    // if(true === true)
    if (modifyFunko) {
      // modificar un funcopop existente
      console.log("aqui deberia modificar el funko");
    } else {
      // agregar un nuevo funkopop
      addFunkopop();
    }
  };