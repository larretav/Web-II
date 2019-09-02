var shape = {
    name: "Rectangulo",
    popup: function() {
        console.log('Esto es un popup(): ' + this.name);

        setTimeout( () => {
            console.log('Esto dentro de SetTimeout(): ' + this.name);
            console.log('Soy un ' + this.name + '!');
        }, 3000);
    }
};

shape.popup();