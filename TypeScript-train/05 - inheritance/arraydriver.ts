import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let s1=new Shape(13,12);

let c1=new Circle(11,21,31);

let r1= new Rectangle(1,2,3,4);


let as:Shape[]=[];

as.push(s1);
as.push(c1);
as.push(r1);

//as.push(1)

for (let  ele of as){

    console.log(ele.getinfo());
}