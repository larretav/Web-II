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
let a: string = undefined;  // Ok
let b: string = null;       // Ok
let c: string = "";
let d: string = "y";
let e: string = "construcción";
let f: string = '3';          // Error
let g: string = "3";

let h: string = "construcción";
let i: number = 300;
let sentence: string = `La ${h} en frente de mi oficina es de ${i} pies de altura.`;

console.log(sentence);