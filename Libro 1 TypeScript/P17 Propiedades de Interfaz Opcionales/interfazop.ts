interface Lago{
    nombre: string,
    area: number,
    longtud: number,
    profundidad: number, 
    aguafresca: boolean,
    paises:string[],
    congelado?: string[]
}

let SegundoLago: Lago = {
    nombre: 'Superior',
    longtud: 616, 
    area: 82100,
    profundidad: 406.3,
    aguafresca: true,
    paises: ['Canada', 'United States']
}

let TercerLago: Lago = {
    nombre: 'Baikal',
    longtud: 636,
    profundidad: 1637, 
    area: 31500,
    aguafresca: true,
    paises: ['Russia'],
    congelado: ['January', 'February', 'March', 'April', 'May']
}