import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cvPersonne : Personne[];
  cvSelecPersonne : Personne;

  constructor(private personneservice : PersonneService) { }

  ngOnInit() {
    this.personneservice.getPersonnes().subscribe(
      (response) => {
        this.cvPersonne = response;
      },
      (error) => console.log(error)
    );
  }

  takePersonneFromListe(p) {
    this.cvSelecPersonne = p;
  }

}
