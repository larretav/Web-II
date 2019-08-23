interface Shape{
    name: string;
    width: number;
    height: number;
    color?: string;
}

function area(shape:Shape) {
    var area = shape.width * shape.height;
    return `Soy un ${shape.name} con area ${area} cm cuadrados`;
}

console.log(area({name: "Rectangulo", width: 30, height: 15}));
console.log(area({name: "Cuadrado", width: 30, height: 30, color: "blue"}));

console.log( area( {width: 30, height: 15} ) );