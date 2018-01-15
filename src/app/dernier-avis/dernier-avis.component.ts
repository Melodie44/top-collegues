import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-dernier-avis',
  templateUrl: './dernier-avis.component.html',
  styleUrls: ['./dernier-avis.component.css']
})
export class DernierAvisComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() aimerOuDetester: string;

  constructor() { 

  }

  ngOnInit() {
    console.log(this.aimerOuDetester)
  }

}
