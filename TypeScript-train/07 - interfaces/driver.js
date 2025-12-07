"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cricketCoach_1 = require("./cricketCoach");
var golfCoach_1 = require("./golfCoach");
var mycric = new cricketCoach_1.cricketCoach();
var mygoc = new golfCoach_1.golfCoach();
var coaches = [];
coaches.push(mycric);
coaches.push(mygoc);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var ele = coaches_1[_i];
    console.log(ele.gettrainingdetails());
    console.log();
}
