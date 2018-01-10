import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-le-score',
  templateUrl: './le-score.component.html',
  styleUrls: ['./le-score.component.css']
})
export class LeScoreComponent implements OnInit {

   // paramètre d'entrée "collegue"
   @Input() collegue: Collegue;

  constructor(private cService:CollegueService) { }

  ngOnInit() {
  }

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this.cService.aimerUnCollegue(this.collegue)
                 .then(result => this.collegue['score'] = result['score'] );

    return false; // pour éviter le rechargement de la page
  }

  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.cService.detesterUnCollegue(this.collegue)
                 .then(result => this.collegue['score'] = result['score']);
  
    return false; // pour éviter le rechargement de la page         
  }

}
