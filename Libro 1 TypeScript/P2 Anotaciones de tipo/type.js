function area(shape, width, height) {
    var area = width * height;
    return "Soy un " + shape + " con un area de " + area + " cm cuadrados.";
}
document.body.innerHTML = area("Rectangulo", 30, 15);
