var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(Elnombre, quehiciste) {
        this.nombre = Elnombre;
        this.accion = quehiciste;
    }
    Persona.prototype.Presentarse = function () {
        console.log("Hola, soy " + this.nombre + " y yo " + this.accion);
    };
    return Persona;
}());
var Amigo = /** @class */ (function (_super) {
    __extends(Amigo, _super);
    function Amigo(nombre, tconocido, quehizo) {
        var _this = _super.call(this, nombre, quehizo) || this;
        _this.tiempoconocido = tconocido;
        return _this;
    }
    Amigo.prototype.TiempoConocido = function () {
        console.log("Hemos sido amigos por " + this.tiempoconocido + " a\u00F1os");
    };
    return Amigo;
}(Persona));
var amiguis = new Amigo("Timmy", 10, "robé a mamá de su cartera");
amiguis.Presentarse();
amiguis.TiempoConocido();
// Imprimiendo
//personita.Mostrar();
