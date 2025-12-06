import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let s1=new Shape(13,12);

let c1=new Circle(11,21,31);

let r1= new Rectangle(1,2,3,4);


console.log(s1.getinfo());

console.log(c1.getinfo());

console.log(r1.getinfo());