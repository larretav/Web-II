var tank = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
};
// Esto esta al chingazo
tank.health = 95;
// Error porque 'damage' es readonly, solo lectura.
tank.damage = 10;
console.log(tank);
