import { coach } from "./coach";
import { cricketCoach } from "./cricketCoach";
import { golfCoach } from "./golfCoach";


let mycric:cricketCoach=new cricketCoach();

let mygoc:golfCoach=new golfCoach();

let coaches:coach[]=[];


coaches.push(mycric);
coaches.push(mygoc);

for(let ele of coaches){

    console.log(ele.gettrainingdetails());
    console.log();

}