// Random Int
function RndInt(array) {
    var rnd = Math.floor(Math.random() * array.length);
    return array[rnd];
}
var posiciones = [103, 458, 472, 458];
var rndposicion = RndInt(posiciones);
console.log("N\u00FAmero generado: " + rndposicion);
// Random String
function RndString(array) {
    var rnd = Math.floor(Math.random() * array.length);
    return array[rnd];
}
var colores = ["Violeta", "Azul", "Verde", "Rojo"];
var rndcolores = RndString(colores);
console.log("Color generado: " + rndcolores);
// Random Elemento de tipo Any
function RndElemento(array) {
    var rnd = Math.floor(Math.random() * array.length);
    return array[rnd];
}
var posicion = [103, 458, 472, 458];
var rndpos = RndElemento(posicion);
var color = ["Violeta", "Azul", "Verde", "Rojo"];
var rndcolor = RndElemento(color);
console.log("\nFuncion que recibe parametros tipo Any");
console.log("N\u00FAmero generado: " + rndpos);
console.log("Color generado: " + rndcolor);
// Random Elemento de tipo Genérico
function RndElementoG(array) {
    var rnd = Math.floor(Math.random() * array.length);
    return array[rnd];
}
var posicion2 = [103, 458, 472, 458];
var rndpos2 = RndElementoG(posicion2);
var color2 = ["Violeta", "Azul", "Verde", "Rojo"];
var rndcolor2 = RndElementoG(color2);
console.log("\nFuncion que recibe parametros tipo Genérico");
console.log("N\u00FAmero generado: " + rndpos2);
console.log("Color generado: " + rndcolor2);
