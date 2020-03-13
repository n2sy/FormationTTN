import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur : boolean = false;
  constructor(private auth : AuthentificationService,
    private router: Router) { }

  ngOnInit() {
  }

  Connect(f) {
    this.auth.SeConnecter(f).subscribe(
      (response) => {
        const token = response['id'];
        localStorage.setItem('token', token);
        this.router.navigate(['cv'])
      },
    (error) => {
      this.erreur = true;
      console.log("erreur d'authentification", error);
    }
    )
  }

}
