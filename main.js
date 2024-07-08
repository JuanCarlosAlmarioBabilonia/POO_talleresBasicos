// Crea una clase llamada Persona que tenga las siguientes
// propiedades: nombre, edad, sexo y un método llamado saludar
// que imprima en la consola un saludo con el nombre de la
// persona.
class Persona {
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getNombre(){
        return this.nombre;
    }
    set setEdad(edad){
        this.edad = edad;
    }
    get getEdad(){
        return this.edad;
    }
    set setSexo(sexo){
        this.sexo = sexo;
    }
    get getSexo(){
        return this.sexo;
    }
    saludar(){
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.sexo}`
    }
}

// Crea una instancia de la clase Persona llamada persona1 y
// asigna valores a sus propiedades. Luego, llama al método
// saludar()para que la persona imprima su saludo.

let persona1 = new Persona ("Juan", "17", "hombre");

document.querySelector("#resultado").innerHTML = /*html*/ `
<h2>${persona1.saludar()}</h2>
`;

// Crea una clase llamada Estudiante que herede de la clase
// Persona. Agrega una nueva propiedad llamada carrera y un
// método llamado estudiar que imprima en la consola un
// mensaje indicando la carrera que está estudiando.

class Estudiante extends Persona {
    carrera;
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo);
        this.carrera = carrera
    }
    get getCarrera(){
        return this.carrera;
    }
    estudiar(){
        return `${this.saludar()} y estudio ${this.carrera}`;
    }
}

// Crea una instancia de la clase Estudiante llamada estudiante1 y
// asigna valores a sus propiedades. Luego, llama al método
// saludar() para que el estudiante imprima su saludo y al método
// estudiar() para que el estudiante imprima el mensaje de su
// carrera.

let estudiante1 = new Estudiante ("Juan", "17", "hombre", "Artes audiovisuales");

document.querySelector("#resultado").innerHTML = /*html*/ `
<h2>${estudiante1.estudiar()}</h2>
`;