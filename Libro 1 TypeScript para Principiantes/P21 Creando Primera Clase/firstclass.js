var Persona = /** @class */ (function () {
    function Persona(Elnombre, quehiciste) {
        this.nombre = Elnombre;
        this.accion = quehiciste;
    }
    Persona.prototype.Mostrar = function () {
        console.log("Hola, soy " + this.nombre + " y yo " + this.accion);
    };
    return Persona;
}());
var personita = new Persona("Timmy", "robé a mamá de su cartera");
personita.Mostrar();
