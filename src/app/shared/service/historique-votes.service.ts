import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vote } from '../domain/vote';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HistoriqueVotesService {

  votes: BehaviorSubject<Vote[]> = new BehaviorSubject([]);
  lesVotes: Vote[]

  constructor(private http: HttpClient) {
    
    this.refreshData();

    Observable.interval(5000).mergeMap(() => this.listerVotes(0)).subscribe(v => this.votes.next(v));
  }

  refreshData(){
    const params = new HttpParams().set('since', '0');

    this.http.get<Vote[]>('http://localhost:8080/votes', {params})
    .subscribe(votes => { this.votes.next(votes) })
  }

  listerVotes(voteId): Observable<Vote[]> {
    // récupérer la liste des votes côté serveur
  
    return this.votes.asObservable();
  }

  sauvegarderVotes(newVote: Vote): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post<Vote[]>('http://localhost:8080/votes', JSON.stringify(newVote), httpOptions)
    .subscribe(c => this.votes.next(c));
  }
}
