import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link = 'http://localhost:3000/api/Users/login'
  constructor(private http: HttpClient) { }

  SeConnecter(u) {
    return this.http.post(this.link, u);
  }

  SeDeconnecter() {
    localStorage.removeItem('token');
  }

  isLogged() {
    const token = localStorage.getItem('token');
    return(!!token);
  }
}
