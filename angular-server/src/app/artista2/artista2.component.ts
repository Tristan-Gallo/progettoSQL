import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-artista2',
  templateUrl: './artista2.component.html',
  styleUrls: ['./artista2.component.css']
})
export class Artista2Component {
  top10artista! : any;
  url: string = "https://3245-tristangall-progettosql-q3g84vdwdli.ws-eu83.gitpod.io/artista2"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.http.get(url).subscribe(data => {
      this.top10artista = data;
    });
  }


}
