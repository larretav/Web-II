interface Personas{
    name: string;
}

interface Familia{
    nombre: string,
    edad: number,
    relacion: string
}

interface Celebridad extends Personas{
    profesion: string
}

function ImprimirNombre<T extends Personas>(ElInput: T): void {
    console.log(`Mi nombre es ${ElInput.name}`);
}

let serena: Celebridad = {
    name: 'Serena Williams',
    profesion: 'Tennis Player'
}

ImprimirNombre(serena);