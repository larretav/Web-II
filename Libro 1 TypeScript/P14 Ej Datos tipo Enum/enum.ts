enum Animales {gato, leon, prro, vaca, mono}
let c: Animales = Animales.gato;

console.log(Animales[3]); // cow
console.log(Animales.mono); // 4

enum Animales2 {gato = 1, leon, prro = 11, vaca, mono}
let d: Animales2 = Animales2.gato;

console.log(Animales2[3]); // undefined
console.log(Animales2.mono); // 13
