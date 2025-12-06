"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var s1 = new Shape_1.Shape(13, 12);
var c1 = new Circle_1.Circle(11, 21, 31);
console.log(s1.getinfo());
console.log(c1.getinfo());
