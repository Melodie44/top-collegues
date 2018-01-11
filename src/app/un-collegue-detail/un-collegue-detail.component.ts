import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-un-collegue-detail',
  templateUrl: './un-collegue-detail.component.html',
  styleUrls: ['./un-collegue-detail.component.css']
})
export class UnCollegueDetailComponent implements OnInit {

  collegues:Collegue[];
  collegue:Collegue;

constructor(private cService:CollegueService, public route: ActivatedRoute) {}

ngOnInit() {
  
  this.cService.listerCollegues().then(result => {
    this.collegues = result; 
  });
}

}
