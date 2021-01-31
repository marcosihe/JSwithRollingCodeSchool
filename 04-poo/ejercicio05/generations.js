class Persona{
    constructor(name, age, gender, weight, height, birthYear){
        this.name = name;
        this.age = age;
        this.id = this.idGenerator();
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.birthYear = birthYear;
    }
    get showName(){return this.name;}
    get showAge(){return this.age;}
    get showId(){}
    get showGender(){return this.gender;}
    get showWeight(){return this.weight;}
    get showHeight(){return this.height;}
    get showBirthYear(){return this.birthYear;}

    set modifyName(newName){this.name = newName;}
    set modifyAge(newAge){this.age = newAge;}
    set modifyId(){this.id = this.idGenerator();}
    set modifyGender(NewGender){this.gender = NewGender;}
    set modifyWeight(newWeight){this.weight = newWeight;}
    set modifyHeight(newHeight){this.height = newHeight;}
    set modifyBirthYear(newBirthYear){this.birthYear = newBirthYear;}

    showGeneration(){
        switch (true) {
            case this.birthYear > 1929 && this.birthYear < 1949:
                document.write(`<br>Generacón: Silent Generation <br>Rasgo característico: Austeridad`);
                break;
            case this.birthYear > 1948 && this.birthYear < 1969:
                document.write(`<br>Generacón: Baby Boom <br>Rasgo característico: Ambición`);
                break;
            case this.birthYear > 1968 && this.birthYear < 1981:
                document.write(`<br>Generacón: Generación X <br>Rasgo característico: Obsesión por el éxito`);
                break;
            case this.birthYear > 1980 && this.birthYear < 1994:
                document.write(`<br>Generacón: Generación Y (millennials) <br>Rasgo característico: Frustración`);
                break;
            case this.birthYear > 1993 && this.birthYear < 2011:
                document.write(`<br>Generacón: Generación Z <br>Rasgo característico: Irreverencia`);
                break;
        
            default:
                document.write(`Generación: undefined <br>Rasgo característico: undefined`);
                break;
        }
    }
    legalAge(){
        return age >= 18;
    }
    showData(){
        document.write(`<h4>Datos de la persona:</h4>
        Nombre: ${this.name}
        <br>Edad: ${this.age}
        <br>DNI: ${this.id}
        <br>Género: ${this.gender}
        <br>Peso: ${this.weight}
        <br>Altura: ${this.height}
        <br>Año de nacimiento: ${this.birthYear}`);
        this.showGeneration();
    }
    idGenerator(min=10000000,max=100000000){
        return Math.floor(Math.random()*(max - min)+min);
    }
}

let anaPF = new Persona('Ana Paula Fernandez', 18, 'F', 48, '1,65 m', 2002);
let darioRJ = new Persona('Dario Romero Juarez', 17, 'M', 70, '1.75 m', 2003);
let robertoG = new Persona('Roberto Gonzalez', 70, 'M', 65, '1.74 m', 1950);

anaPF.showData();
darioRJ.showData();
robertoG.showData();