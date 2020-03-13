import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent implements OnInit {
  bgColor: string = 'white';
  color: string = 'black';
  font : string = 'Arial';
  size : string = '12px';
  listeFonts : string[] = ['Arial', 'Garamond', 'Impact', 'Times New Roman'];
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  changeSize(s) {
    this.size = s.value+'px';
  }

  goToCv() {
    this.router.navigate(['cv']);
  }

  

}
