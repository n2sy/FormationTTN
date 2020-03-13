import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth : AuthentificationService) { }

  ngOnInit() {
  }

  Logout() {
    this.auth.SeDeconnecter();
  }

}
