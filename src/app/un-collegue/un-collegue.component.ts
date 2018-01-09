import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;

  constructor() { }

  ngOnInit() {
  }

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
     this.collegue.setScore(this.collegue.getScore()+10);
  }
  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.collegue.setScore(this.collegue.getScore()-5);
  }

}
