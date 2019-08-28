/*// Con strictNullChecks true (tsc string.ts --strictNullChecks true)
let a: string = undefined;  // Error
let b: string = null;       // Error
let c: string = "";
let d: string = "y";
let e: string = "construcción";
let f: string = 3;          // Error
let g: string = "3";
*/
// Con strictNullChecks true (tsc string.ts --strictNullChecks false)
var a = undefined; // Ok
var b = null; // Ok
var c = "";
var d = "y";
var e = "construcción";
var f = '3'; // Error
var g = "3";
var h = "construcción";
var i = 300;
var sentence = "La " + h + " en frente de mi oficina es de " + i + " pies de altura.";
console.log(sentence);
