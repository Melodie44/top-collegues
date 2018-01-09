import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Top Collègues';
  // TODO Ajouter un champ collegues qui est de type Tableau de Collegue
  collegues: Collegue[];

  ngOnInit() {
    // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores
    //variés
    this.collegues = [new Collegue('Jade', 'image.jpg', 50),
    new Collegue('Sarah', 'image.jpg', 100),
    new Collegue('Jean', 'iamge.jpg', 20),
    new Collegue('Thomas', 'image.jpg', 60),
    new Collegue('Joseline', 'image.jpg', 10)];
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 30));
    document.getElementById("success").setAttribute("class", "alert alert-success m-3");
    document.getElementById("success").innerHTML = "Le collègue "+pseudo.value+" a été ajouté avec succès"
    //document.getElementById("success").innerHTML = "<alert type=\"success\">Le collègue "+pseudo.value+" a été ajouté avec succès</alert>"
    
    // TODO vider les champs de saisie
    pseudo.value = "";
    imageUrl.value = "";

    return false; // pour éviter le rechargement de la page
  }
}
