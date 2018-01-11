import { Component, OnInit} from '@angular/core';
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
  collegues: Collegue[];
  i:number;

  constructor(private cService: CollegueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => { this.i = params['i'] });

    this.cService.listerCollegues().then(result => {
      this.collegues = result;
    });
  }

  detail(col) {

    this.router.navigate(['/detail', col['nom']]);
  }

}
