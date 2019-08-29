interface Lago{
    nombre: string,
    area: number,
    longtud: number,
    profundidad: number, 
    aguafresca: boolean,
    paises:string[]
}

let PrimerLago: Lago = {
    nombre: 'Caspian Sea',
    longtud: 1199,
    profundidad: 1025, 
    area: 371000,
    aguafresca: false,
    paises: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
}

let SegundoLago: Lago = {
    nombre: 'Superior',
    longtud: 616, 
    area: 82100,
    aguafresca: false,
    paises: ['Canada', 'United States']
}