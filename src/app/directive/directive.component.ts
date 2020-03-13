import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  @Input() color : string;
  @Input() bgcolor : string;
  @Input() font : string;

  cls1 : boolean = true;
  cls2 : boolean = false;
  cls3 : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeClass() {
    if(this.cls1) {
      this.cls1 = false;
      this.cls2 = true;
      //this.cls3 = false;
    } else if(this.cls2) {
      //this.cls1 = false;
      this.cls2 = false;
      this.cls3 = true;
    }
    else {
      this.cls1 = true;
      //this.cls2 = false;
      this.cls3 = false;
    }

  }

}
