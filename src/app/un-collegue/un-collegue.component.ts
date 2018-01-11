import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  // paramètre d'entrée "collegue"
    collegues:Collegue[];
    collegue:Collegue;

  constructor(private cService:CollegueService, public route: ActivatedRoute) {}

  ngOnInit() {
    
    this.cService.listerCollegues().then(result => {
      this.collegues = result; 
    });
  }

}
