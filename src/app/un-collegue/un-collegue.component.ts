import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service'
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  // paramètre d'entrée "collegue"
  collegues: Collegue[];
  limite: number;

  constructor(private cService: CollegueService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.cService.listerCollegues()
      .subscribe(c => {
        this.limite = c.length;
        this.collegues = c
      }, e => e);

    /*this.cService.listerCollegues().then(result => {
      this.collegues = result;
      
    });*/
  }

  detail(col) {

    this.router.navigate(['/detail', col['nom']]);
  }

  limiter(event) {
    if (event != '') {
      this.limite = event;
    }else{
      this.limite = this.collegues.length;
    }
  }

  filtrer(event) {
    if (event != '') {
      this.collegues = this.collegues.filter(c => c['nom'].startsWith(event.toUpperCase()))
    }else{
      this.ngOnInit();
    }
  }

}
