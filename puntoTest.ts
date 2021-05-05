import {Punto} from './punto'
import {Triangulo} from './triangulo'

let p1:Punto=new Punto(5,7)
let p2:Punto =new Punto(3,3)
let p3:Punto= new Punto(3,5)
let p4:Punto= new Punto(2,1)
let p5:Punto= new Punto(1,1)
console.log(p1.toString())
console.log(p1.distanciaOrigen())
console.log(p1.calcularDistancia(p3))
console.log(p1.calcularCuadrante())
console.log(p1.calcularCercano([p2,p3,p4,p5]))
let t1:Triangulo=new Triangulo(p1,p2,p3)
console.log(t1.calcularLongitudLados())