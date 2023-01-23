import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  nomeartista! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-je8ws3leu5r.ws-eu83.gitpod.io/artista"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.nomeartista = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?nomeartista=" + value);
  }

}
