var Animales;
(function (Animales) {
    Animales[Animales["gato"] = 0] = "gato";
    Animales[Animales["leon"] = 1] = "leon";
    Animales[Animales["prro"] = 2] = "prro";
    Animales[Animales["vaca"] = 3] = "vaca";
    Animales[Animales["mono"] = 4] = "mono";
})(Animales || (Animales = {}));
var c = Animales.gato;
console.log(Animales[3]); // cow
console.log(Animales.mono); // 4
var Animales2;
(function (Animales2) {
    Animales2[Animales2["gato"] = 1] = "gato";
    Animales2[Animales2["leon"] = 2] = "leon";
    Animales2[Animales2["prro"] = 11] = "prro";
    Animales2[Animales2["vaca"] = 12] = "vaca";
    Animales2[Animales2["mono"] = 13] = "mono";
})(Animales2 || (Animales2 = {}));
var d = Animales2.gato;
console.log(Animales2[3]); // undefined
console.log(Animales2.mono); // 13
