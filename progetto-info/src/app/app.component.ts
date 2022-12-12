import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'progetto-info';
  obsrooms: Observable<object>=undefined!

  data:object=undefined!;

  constructor(private Http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.obsrooms = this.Http.get<object>("https://my-json-server.typicode.com/malizia-g/hotel/songlist")
    this.obsrooms.subscribe(this.faiqualcosa)
  } 
  faiqualcosa = (data : object) => {
    this.data = data;
  }

}
