"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.distanciaOrigen = function () {
        var resultado = 0;
        resultado = Math.sqrt(Math.pow((0 - this.x), 2) + Math.pow((0 - this.y), 2));
        return resultado;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var resultado = 0;
        resultado = Math.sqrt(Math.pow((otroPunto.x - this.x), 2) + Math.pow((otroPunto.y - this.y), 2));
        return resultado;
    };
    Punto.prototype.calcularCuadrante = function () {
        var resultado = 0;
        if (this.x == 0 || this.y == 0) { }
        else if (this.x > 0 && this.y > 0) {
            resultado = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            resultado = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            resultado = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            resultado = 4;
        }
        return resultado;
    };
    Punto.prototype.calcularCercano = function (puntos) {
        var resultado = 0;
        var arr = [];
        for (var i = 0; i < puntos.length; i++) {
            arr.push(Math.sqrt(Math.pow((puntos[i].x - this.x), 2) + Math.pow((puntos[i].y - this.y), 2)));
        }
        arr = Math.min.apply(null, arr);
        for (var i = 0; i < puntos.length; i++) {
            if (arr == [Math.sqrt(Math.pow((puntos[i].x - this.x), 2) + Math.pow((puntos[i].y - this.y), 2))]) {
                return puntos[i];
            }
        }
    };
    return Punto;
}());
exports.Punto = Punto;
var p1 = new Punto(5, 7);
var p2 = new Punto(3, 3);
var p3 = new Punto(3, 5);
var p4 = new Punto(2, 1);
var p5 = new Punto(1, 1);
console.log(p1.calcularCercano([p2, p3, p4, p5]));
