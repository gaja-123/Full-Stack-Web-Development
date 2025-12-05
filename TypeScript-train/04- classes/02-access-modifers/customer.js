var customer = /** @class */ (function () {
    function customer(fname, lname) {
        this._firstName = fname;
        this._lastName = lname;
    }
    Object.defineProperty(customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
var mycus = new customer('rao', 'srinu');
// mycus.firstName='ram'
// mycus.lastName='ramesh'
mycus.firstName = 'lord';
console.log(mycus.firstName + ' ' + mycus.lastName);
