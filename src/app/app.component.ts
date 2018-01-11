import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Top Collègues';
  // TODO Ajouter un champ collegues qui est de type Tableau de Collegue
  collegues: Collegue[];

  constructor(private cService:CollegueService, public route: ActivatedRoute){}

  ngOnInit() {
    // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores
    //variés
      this.cService.listerCollegues().then(result => {
        this.collegues = result; 
    });
  }

  add(nom: HTMLInputElement, urlImage: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    this.cService.sauvegarder(new Collegue(nom.value, urlImage.value, 0))
                 .then(result => {
                    if(result != null){
                      this.collegues.push(result);
                      document.getElementById("success").innerHTML = "<ngb-alert type=\"success\" [dismissible]=\"false\">Le collègue "+result['nom']+" a été ajouté avec succès</ngb-alert>";
                      document.getElementById("success").setAttribute("class", "alert alert-success m-3");
                      //document.getElementById("success").innerHTML = "Le collègue "+result['nom']+" a été ajouté avec succès";
                   }else{
                      document.getElementById("success").setAttribute("class", "alert alert-danger m-3");
                      document.getElementById("success").innerHTML = "Le collègue existe déjà";
                      //document.getElementById("success").innerHTML = "<ngb-alert type=\"success\" [dismissible]=\"false\">Le collègue "+result['nom']+" existe déjà </ngb-alert>";
                   }
                 });
    
    // TODO vider les champs de saisie
    nom.value = "";
    urlImage.value = "";

    return false; // pour éviter le rechargement de la page
  }
}
