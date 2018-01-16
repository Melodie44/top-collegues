import { Collegue } from './collegue'
import { Avis } from './avis'

export class Vote {
    constructor(private collegue:Collegue, private avis:Avis){  
    }

    get _collegue(){
        return this.collegue;
    }
    set _collegue(leCollegue:Collegue){
        this.collegue = leCollegue;
    }
    get _avis(){
        return this.avis;
    }
    set _avis(leAvis:Avis){
        this.avis = leAvis;
    }
}
