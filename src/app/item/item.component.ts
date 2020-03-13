import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne : Personne;
  @Output() sendReq = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.personne)
  }

  SendPersonne() {
    this.sendReq.emit(this.personne);
  }

}
