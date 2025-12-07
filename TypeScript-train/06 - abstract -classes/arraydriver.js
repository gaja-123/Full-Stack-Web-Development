"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
//let s1=new Shape(13,12);
var c1 = new Circle_1.Circle(11, 21, 31);
var r1 = new Rectangle_1.Rectangle(1, 2, 3, 4);
var as = [];
//as.push(s1);
as.push(c1);
as.push(r1);
//as.push(1)
for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
    var ele = as_1[_i];
    console.log(ele.getinfo());
    console.log(ele.calculateArea());
    console.log();
}
