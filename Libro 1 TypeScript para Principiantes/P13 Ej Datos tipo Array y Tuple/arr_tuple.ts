/*// Con strictNullChecks true (tsc string.ts --strictNullChecks true)
let a: number[] = [1, 12, 93, 5];
let b: string[] = ["a", "apricot", "mango"];
let c: number[] = [1, "manzana", "papa"];           // Error
let d: Array<number> = [null, undefined, 10, 15];   // Error
let e: Array<string> = ["pie", null, ""];           // Error

// Con strictNullChecks true (tsc string.ts --strictNullChecks false)
let a: number[] = [1, 12, 93, 5];
let b: string[] = ["a", "apricot", "mango"];
let c: number[] = [1, "manzana", "papa"];       // Error
let d: Array<number> = [null, undefined, 10, 15];
let e: Array<string> = ["pie", null, ""];
*/
// Tupla
let a: [number, string] = [11, "Lunes"];
let b: [number, string] = ["Lunes", 11]; // Error
let c: [number, string] = ["a", "mono"]; // Error
let d: [number, string] = [105, "búho", 129, 45, "gato"];
let e: [number, string] = [13, "murcielago", "spiderman", 2];

e[13] = "elefante";
e[15] = false;      // Error