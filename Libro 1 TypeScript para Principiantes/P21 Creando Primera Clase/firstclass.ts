class Persona{
    nombre: string;
    accion: string;
    constructor (Elnombre: string, quehiciste: string){
        this.nombre = Elnombre;
        this.accion = quehiciste;
    }

    Mostrar(){
        console.log(`Hola, soy ${this.nombre} y yo ${this.accion}`);
    }
}

let personita = new Persona("Timmy", "robé a mamá de su cartera");

personita.Mostrar();