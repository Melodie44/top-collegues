import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable()
export class CollegueService {

  init:Observable<Collegue[]>
  subject:ReplaySubject<Collegue[]>

  constructor(private http:HttpClient) { 
     
    // Initialisation de la liste collegues
    this.refresh();
  }

  refresh(){
    // Initialisation de la liste collegues
    this.init = Observable.from(this.http.get<Collegue[]>('http://localhost:8080/collegues'));
    this.subject = new ReplaySubject();
    this.init.subscribe(this.subject);
  }

  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    let res1 = Observable.from(this.http.get<Collegue[]>('http://localhost:8080/collegues'));
    return res1;
  }

  sauvegarder(newCollegue:Collegue): Observable<Collegue> {
    // TODO sauvegarder le nouveau collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let res2 = Observable.from(this.http.post<Collegue>('http://localhost:8080/collegues', JSON.stringify(newCollegue), httpOptions));
    
    return res2;
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {"action":"aimer"};
    const res3 = Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue['nom']+'/', body, httpOptions));
    return res3;
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {"action":"detester"};
    const res4 = Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue['nom']+'/', body, httpOptions));
    return res4;
  }
}
