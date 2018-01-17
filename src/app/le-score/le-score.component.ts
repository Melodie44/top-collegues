import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Vote } from '../shared/domain/vote';
import { Avis } from '../shared/domain/avis';
import { HistoriqueVotesService } from '../shared/service/historique-votes.service'

@Component({
  selector: 'app-le-score',
  templateUrl: './le-score.component.html',
  styleUrls: ['./le-score.component.css']
})
export class LeScoreComponent implements OnInit {

  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;
  @Output() choix: EventEmitter<string> = new EventEmitter<string>();
  comment: Vote;
  avis: Avis;

  constructor(private cService: CollegueService, private hService:HistoriqueVotesService, private modalService: NgbModal) { }

  ngOnInit() {

    //this.avis['message'] = '';
  }

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this.cService.aimerUnCollegue(this.collegue);
    this.choix.emit("aime");
  }

  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.cService.detesterUnCollegue(this.collegue);
    this.choix.emit("deteste");
  }

  commenter(content) {
    const modalRef = this.modalService.open(content).result.then(result => {
      //this.comment.patchValue({comment:this.comment});
      console.log(this.comment)
    }, () => console.log('Closed!'));
  }

  submit(){
    this.comment = new Vote(this.collegue, this.avis);
    this.hService.sauvegarderVotes(this.comment);
  }

}
