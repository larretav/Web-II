// Con strictNullChecks true (tsc indefinido.ts --strictNullChecks true)
let a: undefined = undefined;   //Ok
let b: undefined = null;        //Error
let c: number = undefined;      //Error
let d: void = undefined;        //Ok
let e: string = undefined;      //Error

// Con strictNullChecks true (tsc indefinido.ts --strictNullChecks false)
let a: undefined = undefined;   //Ok
let b: undefined = null;        //Ok
let c: number = undefined;      //Ok
let d: void = undefined;        //Ok
let e: string = undefined;      //Ok