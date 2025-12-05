var customer = /** @class */ (function () {
    function customer(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return customer;
}());
var mycus = new customer('rao', 'srinu');
// mycus.firstName='ram'
// mycus.lastName='ramesh'
console.log(mycus.firstName + ' ' + mycus.lastName);
