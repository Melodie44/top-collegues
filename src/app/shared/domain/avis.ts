export class Avis {
    constructor(private message:string){  
    }

    get _message(){
        return this.message;
    }
    set _message(leMessage:string){
        this.message = leMessage;
    }
}
