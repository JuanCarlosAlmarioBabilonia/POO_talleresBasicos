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


