interface Enemigo {
    readonly size: number,
    health: number,
    range: number,
    readonly damage: number
}

interface EnemyHit {
    (name: Enemigo, damageDone: number): number;
}
let tankHit: EnemyHit = function(tankName: Enemigo, damageDone: number) {
    tankName.health -= damageDone;
    return tankName.health;
}
let En1: Enemigo = {size: 50, health: 100, range: 60, damage: 12};

console.log(tankHit(En1, 30));