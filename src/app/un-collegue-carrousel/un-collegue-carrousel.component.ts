import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue-carrousel',
  templateUrl: './un-collegue-carrousel.component.html',
  styleUrls: ['./un-collegue-carrousel.component.css']
})
export class UnCollegueCarrouselComponent implements OnInit {

  collegues: Collegue[];
  collegue: Collegue;
  limite: number;

  constructor(private cService: CollegueService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cService.listerCollegues()
                 .subscribe(c => this.collegues = c, e => console.log(e));
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
