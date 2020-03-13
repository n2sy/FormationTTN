import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  link = 'http://localhost:3000/api/Personnes'
  private cvPersonne = [
    // new Personne(1, "Nidhal", "Jelassi", 35, "Enseigant", "nidhal.jpg"),
    // new Personne(2, "Yasmine", "Jelassi", 8, "Eleve", "yasmine.JPG"),
    // new Personne(3, "Senda", "Jelassi", 3, "Eleve", "senda.JPG")
  ];

  constructor(private http: HttpClient) { }

  getPersonnes() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
    //return this.cvPersonne;
  }

  searchPersonneById(id) : Observable<Personne> {
    //return this.cvPersonne.find(p => p.id ==id);
    //this.cvPersonne.find(function(p) { return p.id == id }) 
    return this.http.get<Personne>(this.link + `/${id}`);
  }

  addPersonne(p): Observable<Object> {
    console.log(p);
    //p.id = this.cvPersonne[this.cvPersonne.length - 1].id + 1;
    // let token = localStorage.getItem('token');
    // if(token) {
    //   const params = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, p, {params});
    // }
    return this.http.post(this.link, p);
    //this.cvPersonne.push(p);
  }

  deletePersonne(id) {
    //let token = localStorage.getItem('token');
    //if(token) {
    //  const params = new HttpParams().set('access_token', token);
    //  return this.http.delete(this.link + `/${id}`, {params});
    //}
    return this.http.delete(this.link + `/${id}`);
  }

  UpdatePersonne(p) {

  }
}
