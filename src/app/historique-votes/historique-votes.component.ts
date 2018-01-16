import { Component, OnInit } from '@angular/core';
import { Vote } from '../shared/domain/vote'
import { HistoriqueVotesService } from '../shared/service/historique-votes.service'

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  votes:Vote[];

  constructor(private hService: HistoriqueVotesService) { }

  ngOnInit() {

    this.hService.listerVotes(0).subscribe(v => this.votes = v);

  }

}
