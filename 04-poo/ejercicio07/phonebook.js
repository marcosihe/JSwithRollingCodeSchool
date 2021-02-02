class Phonebook{
    constructor(arrayContactList){
        this.size = 10;
        this.arrayContactList = arrayContactList;
    }
    get showSize(){return this.size;}
    get showArray(){return this.arrayContactList}
    set modifySize(newSize){this.size = newSize;}

}

class Contact extends Phonebook{
    constructor(arrayContactList, name, number){
        super(arrayContactList);
        this.name = name;
        this.number = number;
    }
    get showName(){return this.name;}
    get showNumber(){return this.number;}

    set modifyName(newName){this.name = newName;}
    set modifyNumber(newNumber){this.number = newNumber;}

    addContact(){
        this.arrayContactList.set = (this.name, this.phoneNumber);
    }
    existingContact(){}
    listContacts(){}
    findContact(){}
    deleteContact(){}
    fullPhonebook(){}
    availableSpace(){}
}

let arrayContactList = new Map; //arreglo de tipo objeto para guardar los objetos 'contact' o 'contactos'
let menuVariable = 0; //variable para guardar la elección del usuario
let amountOfContacts = 0; //variale para la cantidad de contactos en la agenda

//menú con opciones
do {
    menuVariable = parseInt(prompt(`LISTA DE CONTACTOS
    Seleccione una opción:
    1. Añadir contactos
    2. Existe contacto
    3. Listar contactos
    4. Buscar contacto
    5. Eliminar contacto
    6. ¿Agenda llena?
    7. Espacio para nuevo contacto`));
} while ((menuVariable < 0 || menuVariable > 7) || confirm(`¿Continuar ingresando opciones?`));

//función agregar contacto
let addContactFunction = (newContact) => {
    if (amountOfContacts < newContact.showSize) {
        let name = prompt('Ingrese nombre').toLowerCase().trim()
        let phoneNumber = parseInt(prompt('Ingrese el número'));            newContact.addContact(arrayContactList, name, phoneNumber);
        amountOfContacts++;
    }else {
        alert('La agenda de contactos se encuentra llena.<br>Elimine contactos para continuar agregando.');
    }
}

//Defino la función que actuará acorde a la elección del usuario
let optionsPhonebook = (menuVariable) => {
    switch (menuVariable) {
        case 1:
            let newContact = new Contact;
            addContactFunction(newContact);
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            
            break;
        default:
            break;
    }
}