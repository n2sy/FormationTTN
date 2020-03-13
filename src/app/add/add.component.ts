import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../personne.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  erreur = false;
  constructor(private personeservice : PersonneService,
    private router : Router,
    private http : HttpClient) { }

  ngOnInit() {

  }

  addPersonne(f) {
    //this.personeservice.addPersonne(f.value);
    this.personeservice.addPersonne(f.value).subscribe(
      (response) => this.router.navigate(['cv'])
    ,
    (error) => {
      console.log("Erreur dans l'ajout d'une personne", error);
      this.erreur = true
    }
    )
  }

}
