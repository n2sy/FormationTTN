import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listeRoute = ['', 'cv', 'color', 'word'];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCv() {
    this.router.navigate(['cv']);
  }

  goColor() {
    this.router.navigate(['color']);
  }

  goWord() {
    this.router.navigate(['word']);
  }

  changeRoute(r) {
    console.log(r.value)
    this.router.navigate([r.value]);
  }

}
