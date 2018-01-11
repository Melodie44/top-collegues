import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  // paramètre d'entrée "collegue"
    collegues:Collegue[];

  constructor(private cService:CollegueService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    
    this.cService.listerCollegues().then(result => {
      this.collegues = result; 
    });
  }

  detail(col){
    console.log(col);
    this.router.navigate(['detail/', {nom:col['nom']}]);
  }

}
