class customer{

    constructor(private _firstname:string,private _lastname:string){

    }

    public get firstname():string{
        return this._firstname
    }

    public set firstname(value : string){
        this._firstname=value
    }

    public get lastname():string{
        return this._lastname
    }

    public set lastname(value: string){
        this._lastname=value
    }
}

let mycus = new customer("rajan","raghuram");

console.log(mycus.firstname,mycus.lastname);

mycus.firstname='raghuram';

mycus.lastname='rajan'

console.log(mycus.firstname,mycus.lastname);

