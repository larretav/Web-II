//Booleano (true o false)
let isDone: boolean = false;

//Numericos
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744

//Strings y Templates strings
let color: string = "azul";
color = 'rojo';

//Tamplates strings (Plantillas de strings para concatenar)
let nombre: string = `Bob Bobbington`;
let edad: number = 37;
let mensaje1: string = `Hola, mi nombre es ${ nombre }. Cumpliré ${ edad + 1 } años el siguiente mes`;

//Esto equivale a:
let mensaje2: string = "Hola, mi nombre es " + nombre + ". Cumpliré " + (edad + 1) + " años el siguiente mes";


//Plantillas de strings
var letras = 'Never gonna give up'; //Entre comillas simples
var html = `<div>${letras}<div>`;

//Tipo String literal
let strliteral = 'Hola';
strliteral = 'Adios'; //Error 'Adios' no se puede asignar al tipo 'Hola'

//Se combina con Union types. type guards y type alias para mayor utilidad
type DireccionCardinal =
    "Norte"
    | "Este"
    | "Sur"
    | "Oeste";
function Mover(distancia: number, direccion: DireccionCardinal) {
    // ...
}
Mover(1,"Norte"); // Ok
Mover(1,"Nurte"); // Error


//Array (por default tipo Any)
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Null (Cuando un objeto o variable no esta accesible)
let a: null = null;

//Undefined
let b: undefined = undefined;
//Si nuestro código interactua con alguna API podemos recibir null como respuesta, para evaluar esas 
//respuestas es mejor utilizar == en vez de ===
console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

//Tuple / Tuplas (hacen referencia a registros clave/valor)
//Declaración
let x: [string, number];
//Inicialización correcta
x = ['hola', 10];
//Inicialización incorrecta
x = [10, 'hola'];

//Acceder a los datos dentro de las tuplas de las cuales se sabe el índice
console.log(x[0].substr(1)); //Ok
console.log(x[1].substr(1)); //Error, Un tipo 'number' no tiene la función 'substr'

//Acceder a un elemento sin conocer el mapeo del contenido
x[0] = "world"; // OK, Un tipo 'string' puede ser asignado a una tupla que contenga 'string | number'
console.log(x[1].toString()); // OK, Un tipo 'string' y un tipo 'number' tienen la función 'toString'
x[1] = true; // Error,El tipo 'boolean' no es 'string | number'


//Enum
enum Direccion{
    Up = 1,             // Si se le asigna un valor numerico primero, los siguientes valores empiezan desde el número especificado
    Down = NaN,         // Si le ponemos un NaN despúes de haber inicializado un valor nos obliga a inicializar
                        // el siguiente después de este, esto no solo pasa con Nan, pasa con String.length, etc.
    
    Left = "asdasd".length,
    Right = 1 << 1      // También admiten operadores binarios
};

var c = Direccion.Up;
console.log(Direccion.Down);

//Enum sin asignación de valores
enum Color{Rojo, Verde, Azul};
let d: Color = Color.Verde;

//Enum con asignación de valores
enum Color2{ Rojo = 1, Verde = 2, Azul = 4 };
let e: Color2 = Color2.Verde; // 2

// Accediendo al valor de los atributos
enum Color3 {Rojo = 1, Verde, Azul};
let NombreColor: string = Color3[2];
alert(NombreColor); // Verde

//Ejemplo de comparación de Enum con Type Alias
// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;

// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;

/* Demo */
var fooId: FooId;
var barId: BarId;

// Por seguridad
fooId = barId; // error
barId = fooId; // error

// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;

// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;


//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure2: any = 4;
notSure2.ifItExists(); // OK, ifItExists puede existir
notSure2.toFixed(); // OK, toFixed existe, pero no es comprobado por el compilador
let prettySure: Object = 4;
prettySure.toFixed(); // Error: La propiedad 'toFixed' no existe en un 'Object'.

let lista: any[] = [1, true, "free"];
lista[1] = 100;


//Void
function WarnUser(): void {
    alert('Este es un mensaje de advertencia');
}
//En variables solo se le pueden asignarl valores Null o Undefined (No recomendado)
let sinuso: void = undefined; 


//Let (se pueden declarar variables con Let y Var, Let con ámbito de bloque y Var no)
//Con Var
var foov = 123;
if (true){
    var foov = 456;
}
console.log(foov); //456

//Con Let
let fool = 123;
if (true) {
    fool = 456;
}
console.log(fool); //123


//Const (Constantes)
const foo = 123;
foo = 456; // No permitido

// Las constantes admiten objetos literales
const foo2 = { bar: 123};
foo2 = { bar: 456 }; //Error, no se puede modificar el objeto

//Pero si se puede modificar las variables que contiene
const foo3 = { bar: 123};
foo3.bar = 456; //Permitido
console.log(foo3); // { bar: 456 }

// For In
// En TypeScript
let list3 = { a: 1, b: 2, c: 3 };

for (let i in list3) {
    console.log(list3[i]); // 1, 2, 3
}

// En Javascript
var list4 = { a: 1, b: 2, c: 3 };

for (var i in list4) {
    console.log(list4[i]); // 1, 2, 3
}

// Accediendo al índice de una variable dentro de un objeto
// TypeScript
let list5 = {a: 1, b: 2, c:3};
for(let i in list5){
    console.log(i); // a, b, c
}
// Javascript
var list6 = { a: 1, b: 2, c: 3 };
for (var i in list6) {
    console.log(i); // a, b, c
}


//For Of
//Accediendo al valor de una variable
//TypeScript
let list7 = ["a", "b", "c"];
for (let b of list7) {
    console.log(b); // a, b, c
}

//Javascript
var list_7 = ["a", "b", "c"];
for (var j = 0, list_j = list_7; j < list_7.length; j++) {
    var bj = list_7[j];
    console.log(bj); // a, b, c
}

//Accediendo al valor de una variable dentro de un string
//TypeScript
let stringt = "¿soy yo a quien estás buscando?";
for (let char of stringt) {
    console.log(char); // ¿soy yo a quien estás buscando?
}

//Javascript
var stringj = "¿soy yo a quien estás buscando?";
for (var _i = 0, string_1 = stringj; _i < string_1.length; _i++) {
    var char = string_1[_i];
    console.log(char); // ¿soy yo a quien estás buscando?
}

//Accediendo al valor de una variable dentro de un objeto, el cual nos dará error:
//TypeScript
let objt = {a: 1, b: 2, c:3};
for(let i of objt){
    console.log(i); // Error
}

//Javascript
var objj = { a: 1, b: 2, c: 3 };
for (var _i = 0, obj_1 = objj; _i < obj_1.length; _i++) {
    var i = obj_1[_i];
    console.log(i); // Error
}


//Funciones
// Este tipo de función hace referencia al objeto que llama a esta función
setTimeout(function(){
    console.log(this); // Elemento Que llama a la función
}, 2000);

//Este tipo de funciones, lo que hacen es que el this no hace referencia 
//al padre sino al objeto que contiene la función
setTimeout( () => {
    console.log(this);// Elemento que contiene esta función
}, 2000);

// Evitar el tipo Any y filtrar solo por los tipos de datos que necesitamos
function padLeft(value: string, padding: string | number) {
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }
    // Si existiera Any tendriamos que controlar la excepción
    // Como buenas practicas y ya que este código al fin y al cabo
    // será javascript y es vulnerable a inyeción siempre está bien
    // realizar el control de las posibles excepciones
    throw new Error(`Se esperaba String o Number, en '${padding}' `);
}

console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
console.log(padLeft("hello", true)); // Ejemplo de función con texto -> NO FUNCIONA (no compila)

//Parametros opcionales
// Compilado con --strictNullChecks true
function validateEntity(e: Entity?) {
    // Arrojará una excepción si e es una entidad tipo null o inválida
}
function processEntity(e: Entity?) {
    validateEntity(e);
    let s = e!.name; // Afirmar que e no es null y nombre de acceso
}

//Igualación de Funciones
//Utilizando Fat Arrows
let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;

y1 = x1; // OK
x1 = y1; // Error

let x2 = () => ({name: 'Alice'});
let y2 = () => ({name: 'Alice', location: 'Seattle'});

x2 = y2; // OK
y2 = x2; // Error porque x() no tiene la propiedad location


//Genericos
//TypeScript
function echo<T>(arg: T) : T {
    return arg;
}
let f = echo<number>(1); // El typeof es Number
let g = echo<String>("Hola mundo"); // El typeof es String

// Javascript (Ya compilado)
function echo2(arg) {
    return arg;
}
var f2 = echo2(1); // El typeof es Number
var g2 = echo2("Hola mundo"); // El typeof es String