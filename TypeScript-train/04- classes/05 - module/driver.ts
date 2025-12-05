import { customer } from "./customer";

let mycus = new customer("rajan","raghuram");

console.log(mycus.firstname,mycus.lastname);

mycus.firstname='raghuram';

mycus.lastname='rajan'

console.log(mycus.firstname,mycus.lastname);
