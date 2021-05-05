export class Punto{

    private x:number
    private y:number

    constructor(x,y){
        this.x=x
        this.y=y
    }

    toString():string{
        return `(${this.x},${this.y})`
    }

    getY():number{
        return this.y
    }
    setY(y:number){
        this.y=y
    }
    getX():number{
        return this.x
    }
    setX(x:number){
        this.x=x
    }
    distanciaOrigen():number{
        let resultado:number =0
        resultado= Math.sqrt((0 - this.x)**2 + (0 - this.y)**2)
        return resultado
    }
    calcularDistancia(otroPunto:Punto):number{
        let resultado:number =0
        resultado= Math.sqrt((otroPunto.x - this.x)**2 + (otroPunto.y - this.y)**2)
        return resultado
    }
    calcularCuadrante():number{
        let resultado:number=0
        if(this.x==0||this.y==0){}
        else if(this.x>0 && this.y>0){
            resultado=1
        }
        else if (this.x<0 && this.y>0){
            resultado=2
        }
        else if(this.x<0 && this.y<0){
            resultado=3
        }
        else if(this.x>0 && this.y<0){
            resultado=4
        }
        return resultado
    }

    calcularCercano(puntos:Punto[]){
        let resultado=0
        let arr:number[]=[]
       for(let i=0;i<puntos.length;i++){

        arr.push(Math.sqrt((puntos[i].x - this.x)**2 + (puntos[i].y - this.y)**2))
       }
       arr=Math.min.apply(null, arr)  
       for(let i=0;i<puntos.length;i++){
           if(arr== [Math.sqrt((puntos[i].x - this.x)**2 + (puntos[i].y - this.y)**2)]){
               return puntos[i]
           }
       }
    }
}
