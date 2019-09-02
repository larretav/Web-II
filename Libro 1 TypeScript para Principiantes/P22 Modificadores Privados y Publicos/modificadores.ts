class Persona{
    private nombre: string;
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

// Tratando de modificar una propiedad Private para que diga que no se puede
personita.nombre = "Vicky";

// Imprimiendo
personita.Mostrar();