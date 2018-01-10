import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    const res1:Promise<Collegue[]> = this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise();
    return res1;
  }
  sauvegarder(newCollegue:Collegue): Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const res2:Promise<Collegue> = this.http.post<Collegue>('http://localhost:8080/collegues', JSON.stringify(newCollegue), httpOptions).toPromise();
    return res2;
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Aimer un collègue côté serveur
    console.log(unCollegue['nom']);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {"action":"aimer"};
    const res3:Promise<Collegue> = this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue['nom']+'/', body, httpOptions).toPromise();
    return res3;
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {"action":"detester"};
    const res4:Promise<Collegue> = this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue['nom']+'/', body, httpOptions).toPromise();
    return res4;
  }
}
