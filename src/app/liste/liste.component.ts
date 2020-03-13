import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePersonne : Personne[];
  selectedPersonne : Personne;
  @Output() sendReq = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.listePersonne);
  }

  takePersonnefromItem(p) {
    this.selectedPersonne = p;
  }

  sendPersonneToCvP() {
    this.sendReq.emit(this.selectedPersonne);
  }

}
