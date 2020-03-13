import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {
  personne : Personne = new Personne(null, null, null, null, null);

  constructor() { }

  ngOnInit() {
  }

}
