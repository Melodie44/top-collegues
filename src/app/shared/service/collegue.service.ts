import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class CollegueService {

  init: Observable<Collegue[]>
  collegues: BehaviorSubject<Collegue[]> = new BehaviorSubject([]);
  response: boolean;

  constructor(private http: HttpClient) {
    this.refreshData();
  }

  refreshData() {
    this.http.get<Collegue[]>('http://localhost:8080/collegues')
      .subscribe(collegues => { this.collegues.next(collegues) })
  }

  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this.collegues.asObservable();
  }

  sauvegarder(newCollegue: Collegue): void {
    // TODO sauvegarder le nouveau collègue côté serveur
    this.response = false;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post<Collegue[]>('http://localhost:8080/collegues', JSON.stringify(newCollegue), httpOptions)
    .subscribe(c => this.collegues.next(c));
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = { "action": "aimer" };
    const res3 = Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue['nom'] + '/', body, httpOptions));
    return res3;
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = { "action": "detester" };
    const res4 = Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue['nom'] + '/', body, httpOptions));
    return res4;
  }
}
