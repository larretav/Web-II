// Con strictNullChecks true (tsc numerico.ts --strictNullChecks true)
var a = undefined; //Error
var b = null; //Error
var c = 3;
var d = 57; //Binary
var e = 286; //Octal
var f = 0xadf0d; //Hexadecimal
var g = "cat"; //Error
/*
// Con strictNullChecks true (tsc numerico.ts --strictNullChecks false)
let a: number = undefined;  //Ok
let b: number = null;       //Ok
let c: number = 3;
let d: number = 0b111001;   //Binary
let e: number = 0o436;      //Octal
let f: number = 0xadf0d;    //Hexadecimal
let g: number = "cat";      //Error*/ 
