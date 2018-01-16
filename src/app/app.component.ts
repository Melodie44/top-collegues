import { Component, Output, EventEmitter } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Top Collègues';
  // TODO Ajouter un champ collegues qui est de type Tableau de Collegue
  collegues: Collegue[];
  success: HTMLDivElement;

  constructor(private cService: CollegueService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores
    //variés
    this.cService.listerCollegues()
      .subscribe(c => this.collegues = c);
  }

  add(nom: HTMLInputElement, urlImage: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    if (this.collegues.find(c => c['nom'] == nom.value) == undefined) {

      this.cService.sauvegarder(new Collegue(nom.value, urlImage.value, 0))

      document.getElementById("success").setAttribute("class", "alert alert-success m-3");
      document.getElementById("success").innerHTML = "Le collègue " + nom.value + " a été ajouté avec succès";
    } else {
      document.getElementById("success").setAttribute("class", "alert alert-danger m-3");
      document.getElementById("success").innerHTML = "Le collègue " + nom.value + " existe déjà";
    }

    // TODO vider les champs de saisie
    nom.value = "";
    urlImage.value = "";

    return false; // pour éviter le rechargement de la page
  }

  horsEnLigne(event){
   // let buttons:HTMLButtonElement[] = document.querySelectorAll("button");
    
    
  }
}
