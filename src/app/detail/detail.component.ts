import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { RecruesService } from '../recrues.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() detailPersonne : Personne;
  constructor(private Recruesservice : RecruesService,
    private router : Router,
    private actd : ActivatedRoute) { }

  ngOnInit() {
  }

  addRecrue() {
    this.Recruesservice.addRecrue(this.detailPersonne);
  }

  plusInfos() {
    this.router.navigate(['cv', this.detailPersonne.id]);
  }

}
