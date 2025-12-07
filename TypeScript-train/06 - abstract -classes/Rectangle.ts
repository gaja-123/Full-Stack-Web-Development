import { Shape } from "./Shape";

export class Rectangle extends Shape{
    

    constructor(theX:number,theY:number,private _width:number, private _length : number){
        super(theX,theY);
    }

    get width():number{
        return this._width;
    }

    set width(value:number){
        this._width=value;
    }

    get length():number{
        return this._width;
    }

    set length(value:number){
        this._width=value;
    }

    getinfo():string{
        return super.getinfo()+` , length : ${this._length} , width : ${this._width}`;
    }

    calculateArea(): string {
        return `Area of rect ${this._length*this._width}`;
    }

}