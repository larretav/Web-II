// Con strictNullChecks true (tsc void.ts --strictNullChecks true)
var a = undefined; //Ok
var b = null; //Error
var c = 3; //Error
var d = "apple"; //Ok
/*
// Con strictNullChecks true (tsc void.ts --strictNullChecks false)
let a: void = undefined;//Ok
let b: void = null;     //Error
let c: void = 3;        //Error
let d: void = "apple";  //Ok*/ 
