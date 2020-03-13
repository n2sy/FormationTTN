import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    //console.log(this.httpClient.get(this.link));

    this.httpClient.get(this.link).subscribe(
      (response) => {console.log(response)},
      (error) => {console.log(error)},
      () => console.log('Done.... !')
    )
  }

}
