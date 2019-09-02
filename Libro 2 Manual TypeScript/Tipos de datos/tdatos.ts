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
