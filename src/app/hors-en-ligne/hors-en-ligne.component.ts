import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HorsEnLigneService } from '../shared/service/hors-en-ligne.service'

@Component({
  selector: 'app-hors-en-ligne',
  templateUrl: './hors-en-ligne.component.html',
  styleUrls: ['./hors-en-ligne.component.css']
})
export class HorsEnLigneComponent implements OnInit {

  heLigne: boolean = true;
  @Output() horsEnLigne: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(public horsEnLigneService: HorsEnLigneService) {
    
  }

  ngOnInit() {
    
    this.horsEnLigneService.isOnlineObs.subscribe(v => this.heLigne = v);
    this.horsEnLigne.emit(this.heLigne);
  }

}
