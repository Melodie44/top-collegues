import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service'
import { ScorePipe } from '../shared/pipe/score.pipe';

@Component({
  selector: 'app-un-collegue-detail',
  templateUrl: './un-collegue-detail.component.html',
  styleUrls: ['./un-collegue-detail.component.css'],
})
export class UnCollegueDetailComponent implements OnInit {

  pseudo: string;
  collegue: Collegue;

  constructor(private cService: CollegueService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {

    this.route.params.subscribe(params => { this.pseudo = params['nom'] });

    /*this.cService.listerCollegues()
      .then(result => {
        this.collegue = result.find(c => c['nom'] == this.pseudo);
      });*/
      this.cService.listerCollegues()
                 .subscribe(list => this.collegue = list.find(c => c['nom'] == this.pseudo, e => console.log(e)));
  }

}
