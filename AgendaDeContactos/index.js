class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
        this.modificacion = new Date().toLocaleString();
    }
}

let modificar = false;
let indiceModificar = null;
let agenda = JSON.parse(localStorage.getItem('agenda')) || [];

mostrarContactos(agenda);

function guardarContacto(event){
    event.preventDefault();
    let nombre = document.getElementById('nombre');
    let telefono = document.getElementById('telefono');
    // Control de campos necesarios
    if(nombre.value && telefono.value){
        if(modificar){
            agenda[indiceModificar].nombre = nombre.value;
            agenda[indiceModificar].telefono = telefono.value;
            agenda[indiceModificar].modificacion = new Date().toLocaleString();
            localStorage.setItem('agenda',JSON.stringify(agenda));
            indiceModificar = null;
            modificar = false;
            nombre.value = '';
            telefono.value = '';
            mostrarContactos(agenda);
        } else {
            // Control de contacto existente
            if(existeContacto(nombre.value)){
                alert('Ya existe un contacto con el nombre ingresado');
            } else {
                let contacto = new Contacto(nombre.value, telefono.value);
                agenda.push(contacto);
                localStorage.setItem('agenda',JSON.stringify(agenda));
                nombre.value = '';
                telefono.value = '';
                mostrarContactos(agenda);
            }
        }
    } else {
        alert('Todos los campos son requeridos');
    }
}

function mostrarContactos(miagenda){
    let tabla = document.getElementById('tabla-contactos');
    tabla.innerHTML = '';
    let contenido = '';
    let num = 1;
    miagenda.map(contacto => {
        contenido += `
            <tr>
                <td>${num}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.telefono}</td>
                <td>${contacto.modificacion}</td>
                <td><button type="button" class="btn btn-danger" onclick="eliminarContacto('${contacto.nombre}')">Borrar</button>
                <button type="button" class="btn btn-warning ml-1" onclick="modificarContacto('${contacto.nombre}')">Modificar</button></td>
            </tr>`;
        num++;
    });
    tabla.innerHTML = contenido;    
}

function existeContacto(nombre){
    if(agenda.findIndex(contacto => contacto.nombre.toUpperCase() === nombre.toUpperCase()) > -1){
        return true;
    } else {
        return false;
    }
}

function eliminarContacto(nombre){
    if(nombre){
        if(confirm('¿Esta seguro que desea eliminar el contacto?')){
            agenda = agenda.filter(contacto => contacto.nombre !== nombre);
            localStorage.setItem('agenda',JSON.stringify(agenda));
            mostrarContactos(agenda);
        }
    }
}

function buscarContactos(event){
    event.preventDefault();
    let buscar = document.getElementById('buscar').value;
    agendaFiltrada = agenda.filter(contacto => contacto.nombre.toUpperCase().includes(buscar.toUpperCase()) || contacto.telefono.includes(buscar));
    mostrarContactos(agendaFiltrada);
}

function modificarContacto(nombre){    
    indiceModificar = agenda.findIndex(contacto => contacto.nombre === nombre);
    let contacto = agenda[indiceModificar];
    document.getElementById('nombre').value = contacto.nombre;
    document.getElementById('telefono').value = contacto.telefono;
    modificar = true;
}
