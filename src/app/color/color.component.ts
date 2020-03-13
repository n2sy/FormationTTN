import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  valeur : string = "pink";
  //color : string = "yellow";
  //hd : boolean = false;
  constructor(private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (params) => {
        this.valeur = params['cl'];
      }
    )
  }

  showMsg() {
    //alert('Show or Hide ? ');
  }

  swipeHd() {
    //this.hd = !this.hd;
  }

  changeColor(cl) {
    //this.color = cl;
  }

  TraitementParent(evt) {
    alert(evt);
  }


}
