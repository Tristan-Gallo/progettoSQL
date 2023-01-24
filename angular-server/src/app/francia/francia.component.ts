import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-francia',
  templateUrl: './francia.component.html',
  styleUrls: ['./francia.component.css']
})
export class FranciaComponent {
  cfrancia! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-8khmz3xub9g.ws-eu83.gitpod.io/francia"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.cfrancia = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?cfrancia=" + value);
  }

}
