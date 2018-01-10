export class Collegue {
    constructor(private _nom:string, private _urlImage:string, private _score:number){  
    }

    get score(){
        return this._score;
    }
    set score(leScore:number){
        this._score = leScore;
    }
    get nom(){
        return this._nom;
    }
    get urlImage(){
        return this._urlImage;
    }
}
