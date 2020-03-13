import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class RecruesService {
  listeRecrues : Personne[] = []
  
  constructor() { }

  addRecrue(p) {
    if(this.listeRecrues.indexOf(p) < 0)
      this.listeRecrues.push(p);
    else
      alert('La personne est déjà recruté');
  }

  getListeRecrues() {
    return this.listeRecrues;
  }


}
