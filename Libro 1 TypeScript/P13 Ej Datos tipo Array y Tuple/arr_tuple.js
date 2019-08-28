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
var a = [11, "Lunes"];
var b = ["Lunes", 11]; // Error
var c = ["a", "mono"]; // Error
var d = [105, "búho", 129, 45, "gato"];
var e = [13, "murcielago", "spiderman", 2];
e[1] = "elefante";
e[15] = false; // Error
