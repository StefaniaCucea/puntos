import { Punto } from "./punto";

export class Triangulo{
    a:Punto
    b:Punto
    c:Punto
    
    constructor(a:Punto,b:Punto,c:Punto){
        this.a=a
        this.b=b
        this.c=c
    }

    calcularLongitudLados():number[]{
        let longitudes:number[]=new Array()
        let resultado1=0
        let resultado2=0
        let resultado3=0

        resultado1=Math.sqrt((this.a.getX() - this.b.getX())**2 + (this.a.getY()- this.b.getY())**2)
        resultado2=Math.sqrt((this.b.getX() - this.c.getX())**2 + (this.b.getY()- this.c.getY())**2)
        resultado3=Math.sqrt((this.c.getX() - this.a.getX())**2 + (this.c.getY() - this.a.getY())**2)
        longitudes.push(resultado1,resultado2,resultado3)
        
        return longitudes
    }
}
