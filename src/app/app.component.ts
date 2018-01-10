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
    this.collegues = 
    [new Collegue('Jade', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUB0Ng134QUKbFtlElyixg6d--dpWQLME3xG4UziTCV2Io1JR', 50),
    new Collegue('Sarah', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7ASemR4brCI404buAJu-ZZ3s_JKs7t2GZ04cJqPP-FnhtSTmdw', 100),
    new Collegue('Jean', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynJLjDmPA6KZ40sUVGRJSAc3LglJfQsh5DcoI8u41XDmnKY0Z', 20),
    new Collegue('Thomas', 'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png', 60),
    new Collegue('Joseline', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0e_XDplnyZMllLVN0LOYd3EvunlkozRo2zA9brg9-8VC-5DoUg', 10)];
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 30));
    document.getElementById("success").setAttribute("class", "alert alert-success m-3");
    document.getElementById("success").innerHTML = "Le collègue "+pseudo.value+" a été ajouté avec succès"
    //document.getElementById("success").innerHTML = "<ng-alert type=\"success\">Le collègue "+pseudo.value+" a été ajouté avec succès</ng-alert>"
    
    // TODO vider les champs de saisie
    pseudo.value = "";
    imageUrl.value = "";

    return false; // pour éviter le rechargement de la page
  }
}
