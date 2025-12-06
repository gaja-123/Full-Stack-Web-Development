import { Shape } from "./Shape";

export class Circle extends Shape{

    constructor(theX: number,theY : number,private _radius:number){
        super(theX,theY);
    }

    set radius(value:number){
        this._radius=value;
    }

    get radius():number{
        return this._radius;
    }

    
   getinfo(): string {
       return super.getinfo()+` , radius : ${this._radius}`
   }
    
}