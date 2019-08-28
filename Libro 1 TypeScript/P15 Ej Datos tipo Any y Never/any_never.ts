// Any
let a: any = "manzana";
let b: any = 14;
let c: any = false;

// Never
let d: never;           // Ok
let e: never = false;   // Error
let f: never = null;    // Error
let g: never = "monday";// Error

function stuck(): never {
    while (true) {
    }
}
