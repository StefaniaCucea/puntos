"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var punto_1 = require("./punto");
var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudes = new Array();
        var resultado1 = 0;
        var resultado2 = 0;
        var resultado3 = 0;
        resultado1 = Math.sqrt(Math.pow((this.a.getX() - this.b.getX()), 2) + Math.pow((this.a.getY() - this.b.getY()), 2));
        resultado2 = Math.sqrt(Math.pow((this.b.getX() - this.c.getX()), 2) + Math.pow((this.b.getY() - this.c.getY()), 2));
        resultado3 = Math.sqrt(Math.pow((this.c.getX() - this.a.getX()), 2) + Math.pow((this.c.getY() - this.a.getY()), 2));
        longitudes.push(resultado1, resultado2, resultado3);
        return longitudes;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var p1 = new punto_1.Punto(5, 7);
var p2 = new punto_1.Punto(3, 3);
var p3 = new punto_1.Punto(3, 5);
var t1 = new Triangulo(p1, p2, p3);
console.log(t1.calcularLongitudLados());
