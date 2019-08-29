// Random Int
function RndInt(array: number[]): number {
    let rnd = Math.floor(Math.random()*array.length);
    return array[rnd];
}
let posiciones: number[] = [103, 458, 472, 458];
let rndposicion: number = RndInt(posiciones);

console.log(`Número generado: ${rndposicion}`);

// Random String
function RndString(array: string[]): string {
    let rnd = Math.floor(Math.random()*array.length);
    return array[rnd];
}
let colores: string[] = ["Violeta", "Azul", "Verde", "Rojo"];
let rndcolores: string = RndString(colores);

console.log(`Color generado: ${rndcolores}`);

// Random Elemento de tipo Any
function RndElemento(array: any[]): any {
    let rnd = Math.floor(Math.random()*array.length);
    return array[rnd];
}
let posicion = [103, 458, 472, 458];
let rndpos = RndElemento(posicion);

let color = ["Violeta", "Azul", "Verde", "Rojo"];
let rndcolor = RndElemento(color);

console.log("\nFuncion que recibe parametros tipo Any");
console.log(`Número generado: ${rndpos}`);
console.log(`Color generado: ${rndcolor}`);

// Random Elemento de tipo Genérico
function RndElementoG<T>(array: T[]): T {
    let rnd = Math.floor(Math.random()*array.length);
    return array[rnd];
}
let posicion2: number[] = [103, 458, 472, 458];
let rndpos2: number = RndElementoG(posicion2);

let color2: string[] = ["Violeta", "Azul", "Verde", "Rojo"];
let rndcolor2: string = RndElementoG(color2);

console.log("\nFuncion que recibe parametros tipo Genérico");
console.log(`Número generado: ${rndpos2}`);
console.log(`Color generado: ${rndcolor2}`);