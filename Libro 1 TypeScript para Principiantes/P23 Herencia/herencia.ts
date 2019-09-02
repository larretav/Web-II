class Persona{
    private nombre: string;
    accion: string;
    constructor (Elnombre: string, quehiciste: string){
        this.nombre = Elnombre;
        this.accion = quehiciste;
    }

    Presentarse(){
        console.log(`Hola, soy ${this.nombre} y yo ${this.accion}`);
    }
}

class Amigo extends Persona{
    tiempoconocido: number;
    constructor(nombre: string, tconocido: number, quehizo: string){
        super(nombre, quehizo);
        this.tiempoconocido = tconocido;
    }

    TiempoConocido(){
        console.log(`Hemos sido amigos por ${this.tiempoconocido} años`);
    }
}

let amiguis = new Amigo("Timmy", 10, "robé a mamá de su cartera");

amiguis.Presentarse();

amiguis.TiempoConocido();