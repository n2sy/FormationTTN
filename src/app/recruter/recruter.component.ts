import { Component, OnInit } from '@angular/core';
import { RecruesService } from '../recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  listeDesRecrues : Personne[] = [];

  constructor(private recrueservice : RecruesService) { }

  ngOnInit() {
    this.listeDesRecrues = this.recrueservice.getListeRecrues();
  }

}
