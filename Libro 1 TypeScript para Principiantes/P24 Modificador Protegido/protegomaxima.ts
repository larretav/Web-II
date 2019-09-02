class Persona{
    private nombre: string;
    accion: string;
    protected edad: number;
    protected constructor (Elnombre: string, Laedad:number, quehiciste: string){
        this.nombre = Elnombre;
        this.edad = Laedad;
        this.accion = quehiciste;
    }

    Presentarse(){
        console.log(`Hola, soy ${this.nombre} y yo ${this.accion}`);
    }
}

class Amigo extends Persona{
    tiempoconocido: number;
    constructor(nombre: string, edad: number, tconocido: number, quehizo: string){
        super(nombre, edad, quehizo);
        this.tiempoconocido = tconocido;
    }

    TiempoConocido(){
        console.log(`Hemos sido amigos por ${this.tiempoconocido} años`);
    }

    AmigosDesde(){
        let desdecuando = this.edad - this.tiempoconocido;
        console.log(`Hemos sido amigos desde que tenía ${desdecuando} años`);
    }
}

let amiguis = new Amigo("Timmy", 19, 8, "robé a mamá de su cartera");
//let personita = new Persona("Pepe", 10, "no hice nada"); //No se puede instanciar :v

amiguis.Presentarse();
amiguis.TiempoConocido();
amiguis.AmigosDesde();