import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() color : string;
  @Output() sendReq = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  MsgToParent() {
    this.sendReq.emit(`Message vers le père avec couleur ${this.color}`);
  }



}
