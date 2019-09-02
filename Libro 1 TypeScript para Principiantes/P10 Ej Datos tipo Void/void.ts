// Con strictNullChecks true (tsc void.ts --strictNullChecks true)
let a: void = undefined;//Ok
let b: void = null;     //Error
let c: void = 3;        //Error
let d: void = "apple";  //Error

// Con strictNullChecks true (tsc void.ts --strictNullChecks false)
let a: void = undefined;//Ok
let b: void = null;     //Ok
let c: void = 3;        //Error
let d: void = "apple";  //Error