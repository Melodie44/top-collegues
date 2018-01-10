export class Collegue {
    constructor(private nom:string, private urlImage:string, private score:number){  
    }

    get _score(){
        return this.score;
    }
    set _score(leScore:number){
        this.score = leScore;
    }
    get _nom(){
        return this.nom;
    }
    get _urlImage(){
        return this.urlImage;
    }
}
