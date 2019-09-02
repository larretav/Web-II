var shape = {
    name: "Rectangulo",
    popup: function () {
        var _this = this;
        console.log('Esto es un popup(): ' + this.name);
        setTimeout(function () {
            console.log('Esto dentro de SetTimeout(): ' + _this.name);
            console.log('Soy un ' + _this.name + '!');
        }, 3000);
    }
};
shape.popup();
