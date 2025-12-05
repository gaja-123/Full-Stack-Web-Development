class customer{

    // properties
    private _firstName : string;
    private _lastName : string;

    constructor(fname :string, lname: string){
        this._firstName=fname;
        this._lastName=lname
    }
    public get firstName():string{
        return this._firstName
    }
    public set firstName(value : string){
        this._firstName=value
    }
    
    public get lastName(): string{
        return this._lastName
    }

    public set lastName(value : string){
        this._lastName=value
    }
}

let mycus=new customer('rao','srinu');
// mycus.firstName='ram'
// mycus.lastName='ramesh'

mycus.firstName='lord';
console.log(mycus.firstName+' '+mycus.lastName)