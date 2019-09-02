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
var Shape = /** @class */ (function () {
    function Shape(name, width, heigth) {
        this.name = name;
        this.area = width * heigth;
        this.color = 'rosa';
    }
    ;
    Shape.prototype.shoutout = function () {
        return "Soy un " + this.name + " " + this.color + " con un volumen de " + this.area + " cm cuadrados.";
    };
    return Shape;
}());
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volumen = length * _this.area;
        return _this;
    }
    ;
    Shape3D.prototype.shoutout = function () {
        return "Soy un " + this.name + " con un volumen de " + this.volumen + " cm cubicos.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var figura = new Shape3D('Cubo', 30, 30, 30);
console.log("Area de Shape: " + figura.area);
console.log("Nombre de Shape: " + figura.name);
console.log("Color de Shape: " + figura.color);
console.log("Width de Shape: " + figura.width);
console.log("Height de Shape: " + figura.height);
console.log(figura.shoutout());
console.log(figura.superShout());
