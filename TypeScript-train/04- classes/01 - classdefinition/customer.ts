class customer{

    // properties
    firstName : string;
    lastName : string;

    constructor(fname :string, lname: string){
        this.firstName=fname;
        this.lastName=lname
    }
    
}

let mycus=new customer('rao','srinu');
// mycus.firstName='ram'
// mycus.lastName='ramesh'

console.log(mycus.firstName+' '+mycus.lastName)