class Shape{
    area: number;
    private color: string;

    constructor (public name: string, width: number, heigth: number){
        this.area = width * heigth;
        this.color = 'rosa';
    };

    shoutout() {
        return "Soy un " + this.name + " " + this.color + " con un volumen de " + this.area + " cm cuadrados.";
    }
}

class Shape3D extends Shape {
    volumen: number;

    constructor (public name: string, width: number, height: number, length: number){
        super(name, width, height);
        this.volumen = length * this.area;
    };
    shoutout() {
        return "Soy un " + this.name + " con un volumen de " + this.volumen + " cm cubicos.";
    }

    superShout(){
        return super.shoutout();
    }
}

var figura = new Shape3D('Cubo', 30, 30, 30);

console.log("Area de Shape: " + figura.area);
console.log("Nombre de Shape: " + figura.name);
console.log("Color de Shape: " + figura.color);
console.log("Width de Shape: " + figura.width);
console.log("Height de Shape: " + figura.height);

console.log(figura.shoutout());
console.log(figura.superShout());