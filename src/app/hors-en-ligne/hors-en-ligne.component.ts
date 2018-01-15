import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-hors-en-ligne',
  templateUrl: './hors-en-ligne.component.html',
  styleUrls: ['./hors-en-ligne.component.css']
})
export class HorsEnLigneComponent implements OnInit {

  heLigne: boolean;
  

  constructor(public cService: CollegueService) {
    
   }

  ngOnInit() {
    this.cService.horsEnLigne().subscribe(v => this.heLigne = v)
  }

}
