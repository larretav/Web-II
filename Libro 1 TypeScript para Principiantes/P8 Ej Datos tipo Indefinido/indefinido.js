/*// Con strictNullChecks true (tsc indefinido.ts --strictNullChecks true)
let a: undefined = undefined;   //Ok
let b: undefined = null;        //Error
let c: number = undefined;      //Error
let d: void = undefined;        //Ok
let e: string = undefined;      //Error
*/
// Con strictNullChecks true (tsc indefinido.ts --strictNullChecks false)
var a = undefined; //Ok
var b = null; //Ok
var c = undefined; //Ok
var d = undefined; //Ok
var e = undefined; //Ok
