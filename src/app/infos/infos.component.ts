import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from '../personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedroute : ActivatedRoute,
    private router: Router,
    private personneservice : PersonneService) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (params) => this.personneservice.searchPersonneById(params['id']).subscribe(
        (response) => this.pers = response,
        (error) => console.log('Erreur de searchPersonne', error)
      ),
      (error) => console.log('erreur level 1', error)
    )
  }

  Supprimer() {
    this.personneservice.deletePersonne(this.pers.id).subscribe(
      (response) => {
        console.log("Suppression réussie");
        this.router.navigate(['cv'])
      },
      (error) => {
        console.log('erreur de suppression', error)
      }
    );
  }

  MiseAJour() {

  }

}
