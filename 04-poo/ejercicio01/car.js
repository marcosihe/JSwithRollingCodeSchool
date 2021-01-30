//Object
let car = {
    name: 'for focus III 2.0 se',
    year: 2015,
    color: 'blanco',
    doors: 5,
    transmition: 'manual',
    km: 0,
    On: true,
    
    //metodos
    mostrarDatos(){
        document.write(`<h4>Automóvil</h4>
        Nombre: ${this.name}
        <br>Modelo: ${this.year}
        <br>Color: ${this.color}
        <br>Puertas: ${this.doors}
        <br>Transmisión: ${this.transmition}
        <br>Km: ${this.km}
        `);
    },
    
    encendido(boolean){
        return boolean;
    }
}

car.mostrarDatos();
document.write(`<br> ${car.encendido(true) ? 'El auto está encendido' : 'El auto está apagado'} `);
