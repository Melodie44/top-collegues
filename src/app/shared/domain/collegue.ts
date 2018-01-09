export class Collegue {
    constructor(private nom:string, private urlImage:string, private score:number){  
    }

    getScore(){
        return this.score;
    }
    setScore(leScore:number){
        this.score = leScore;
    }
    getNom(){
        return this.nom;
    }
    getUrlImage(){
        return this.urlImage;
    }
}
