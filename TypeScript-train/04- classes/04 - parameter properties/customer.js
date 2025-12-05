"use strict";
var customer = /** @class */ (function () {
    function customer(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    Object.defineProperty(customer.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
var mycus = new customer("rajan", "raghuram");
console.log(mycus.firstname, mycus.lastname);
mycus.firstname = 'raghuram';
mycus.lastname = 'rajan';
console.log(mycus.firstname, mycus.lastname);
