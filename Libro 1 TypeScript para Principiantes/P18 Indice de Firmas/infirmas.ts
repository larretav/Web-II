interface Lago{
    nombre: string,
    area: number,
    longtud: number,
    profundidad: number, 
    aguafresca: boolean,
    paises:string[],
    congelado?: string[],
    [extraProp: string]: any
}

let CuartoLago: Lago = {
    nombre: 'Tanganyika',
    longtud: 676,
    profundidad: 1470, 
    area: 32600,
    aguafresca: true,
    paises: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma:'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
}