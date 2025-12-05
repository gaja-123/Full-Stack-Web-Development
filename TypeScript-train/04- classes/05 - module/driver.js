"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var mycus = new customer_1.customer("rajan", "raghuram");
console.log(mycus.firstname, mycus.lastname);
mycus.firstname = 'raghuram';
mycus.lastname = 'rajan';
console.log(mycus.firstname, mycus.lastname);
