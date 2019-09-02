var tankHit = function (tankName, damageDone) {
    tankName.health -= damageDone;
    return tankName.health;
};
var En1 = { size: 50, health: 100, range: 60, damage: 12 };
console.log(tankHit(En1, 30));
