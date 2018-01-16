import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class CollegueService {

  collegues: BehaviorSubject<Collegue[]> = new BehaviorSubject([]);
  isOnline: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(navigator.onLine);

  constructor(private http: HttpClient) {
    this.refreshData();
    Observable.interval(5000).map(() => navigator.onLine).subscribe(v => this.isOnline.next(v));
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
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post<Collegue[]>('http://localhost:8080/collegues', JSON.stringify(newCollegue), httpOptions)
    .subscribe(c => this.collegues.next(c));
  }

  aimerUnCollegue(unCollegue: Collegue): void {
    // TODO Aimer un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = { "action": "aimer" };
    this.http.patch<Collegue[]>('http://localhost:8080/collegues/' + unCollegue['nom'] + '/', body, httpOptions)
    .subscribe(c => this.collegues.next(c));
  }

  detesterUnCollegue(unCollegue: Collegue): void {
    // TODO Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = { "action": "detester" };
    this.http.patch<Collegue[]>('http://localhost:8080/collegues/' + unCollegue['nom'] + '/', body, httpOptions)
    .subscribe(c => this.collegues.next(c));
  }

  horsEnLigne(): Observable<boolean>{
    return this.isOnline.asObservable();
  }
}
