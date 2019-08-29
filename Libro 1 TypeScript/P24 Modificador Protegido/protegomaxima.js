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
    function Persona(Elnombre, Laedad, quehiciste) {
        this.nombre = Elnombre;
        this.edad = Laedad;
        this.accion = quehiciste;
    }
    Persona.prototype.Presentarse = function () {
        console.log("Hola, soy " + this.nombre + " y yo " + this.accion);
    };
    return Persona;
}());
var Amigo = /** @class */ (function (_super) {
    __extends(Amigo, _super);
    function Amigo(nombre, edad, tconocido, quehizo) {
        var _this = _super.call(this, nombre, edad, quehizo) || this;
        _this.tiempoconocido = tconocido;
        return _this;
    }
    Amigo.prototype.TiempoConocido = function () {
        console.log("Hemos sido amigos por " + this.tiempoconocido + " a\u00F1os");
    };
    Amigo.prototype.AmigosDesde = function () {
        var desdecuando = this.edad - this.tiempoconocido;
        console.log("Hemos sido amigos desde que ten\u00EDa " + desdecuando + " a\u00F1os");
    };
    return Amigo;
}(Persona));
var amiguis = new Amigo("Timmy", 19, 8, "robé a mamá de su cartera");
//let personita = new Persona("Pepe", 10, "no hice nada"); //No se puede instanciar :v
amiguis.Presentarse();
amiguis.TiempoConocido();
amiguis.AmigosDesde();
